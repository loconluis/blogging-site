import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getPostFrontMatter, type PostFrontMatter } from "@/lib/mdx";
import { loadShareFonts } from "@/lib/share-fonts";

export const shareImageSize = { width: 1200, height: 630 };

const bg = "#0f0f0f";
const ink = "#ffffff";
const muted = "#8f8f8f";
const accent = "#dafa9c";

function titleSize(title: string) {
  const length = Array.from(title).length;
  if (length > 180) return 40;
  if (length > 130) return 44;
  if (length > 100) return 50;
  if (length > 78) return 54;
  if (length > 48) return 66;
  if (length > 28) return 78;
  return 88;
}

function requirePost(slug: string): PostFrontMatter {
  const post = getPostFrontMatter(slug);
  if (!post) notFound();
  return post;
}

export async function shareImageMetadata(slug: string) {
  const post = requirePost(slug);
  const title = post.title;
  const author = post.author || "Luis Locon";
  return [
    {
      id: "card",
      alt: `${title} — ${author}`,
      size: shareImageSize,
      contentType: "image/png",
    },
  ];
}

export async function shareImage(slug: string) {
  const post = requirePost(slug);
  const title = post.title;
  const author = post.author || "Luis Locon";
  const fonts = await loadShareFonts();
  const fontSize = titleSize(title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: bg,
          color: ink,
          padding: "64px 72px 56px",
          fontFamily: "General Sans",
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              fontSize,
              fontWeight: 700,
              letterSpacing: Math.round(fontSize * -0.025),
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontWeight: 500, color: muted }}>
            {author}
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: accent,
              color: bg,
              fontSize: 24,
              fontWeight: 500,
              padding: "12px 18px",
            }}
          >
            luislocon.dev
          </div>
        </div>
      </div>
    ),
    {
      ...shareImageSize,
      fonts: [
        { name: "General Sans", data: fonts.medium, weight: 500, style: "normal" },
        { name: "General Sans", data: fonts.bold, weight: 700, style: "normal" },
      ],
    }
  );
}
