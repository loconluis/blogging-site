import { shareImage, shareImageMetadata, shareImageSize } from "@/lib/share-card";

export const runtime = "nodejs";
export const size = shareImageSize;
export const contentType = "image/png";

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  return shareImageMetadata(params.slug);
}

export default function Image({ params }: { params: { slug: string } }) {
  return shareImage(params.slug);
}
