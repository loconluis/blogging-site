import { inflateRawSync } from "zlib";

const FONT_ZIP_URL = "https://api.fontshare.com/v2/fonts/download/general-sans";

export interface ShareFonts {
  medium: Buffer;
  bold: Buffer;
}

const globalForFonts = globalThis as typeof globalThis & {
  __shareFonts?: Promise<ShareFonts>;
};

function zipEntry(zip: Buffer, suffix: string): Buffer {
  let offset = 0;
  while (offset + 30 <= zip.length) {
    const signature = zip.readUInt32LE(offset);
    if (signature !== 0x04034b50) break;

    const flags = zip.readUInt16LE(offset + 6);
    const method = zip.readUInt16LE(offset + 8);
    const compressedSize = zip.readUInt32LE(offset + 18);
    const nameLength = zip.readUInt16LE(offset + 26);
    const extraLength = zip.readUInt16LE(offset + 28);
    const nameStart = offset + 30;
    const name = zip.subarray(nameStart, nameStart + nameLength).toString("utf8");
    const dataStart = nameStart + nameLength + extraLength;

    if (flags & 0x8) {
      throw new Error(`Font archive entry ${name} has a data descriptor`);
    }

    const compressed = zip.subarray(dataStart, dataStart + compressedSize);
    offset = dataStart + compressedSize;

    if (!name.endsWith(suffix)) continue;
    if (method === 0) return Buffer.from(compressed);
    if (method === 8) return inflateRawSync(compressed);
    throw new Error(`Unsupported compression method ${method} for ${name}`);
  }

  throw new Error(`Font archive is missing ${suffix}`);
}

async function downloadShareFonts(): Promise<ShareFonts> {
  const response = await fetch(FONT_ZIP_URL);
  if (!response.ok) {
    throw new Error(`Could not download General Sans (${response.status})`);
  }

  const zip = Buffer.from(await response.arrayBuffer());
  const medium = zipEntry(zip, "Fonts/OTF/GeneralSans-Medium.otf");
  const bold = zipEntry(zip, "Fonts/OTF/GeneralSans-Bold.otf");

  for (const [label, font] of [
    ["medium", medium],
    ["bold", bold],
  ] as const) {
    if (font.subarray(0, 4).toString("ascii") !== "OTTO") {
      throw new Error(`General Sans ${label} is not an OpenType font`);
    }
  }

  return { medium, bold };
}

/** Official General Sans files, cached for the process. Not committed: the font license forbids redistributing the files. */
export function loadShareFonts(): Promise<ShareFonts> {
  if (!globalForFonts.__shareFonts) {
    globalForFonts.__shareFonts = downloadShareFonts().catch((error) => {
      globalForFonts.__shareFonts = undefined;
      throw error;
    });
  }
  return globalForFonts.__shareFonts;
}
