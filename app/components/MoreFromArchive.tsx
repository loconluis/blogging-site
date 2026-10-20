import Link from "next/link";

export interface ArchivePost {
  slug: string;
  title: string;
  publishedAt: string;
}

function Panel({
  id,
  label,
  note,
  posts,
}: {
  id: string;
  label: string;
  note: string;
  posts: ArchivePost[];
}) {
  if (!posts.length) return null;
  return (
    <div className="archive-fragment reveal" data-ui aria-labelledby={id}>
      <div className="af-bar">
        <span id={id}>{label}</span>
        <span>{note}</span>
      </div>
      <ul className="af-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="af-row">
              <span className="af-title">{p.title}</span>
              <span className="af-year">{p.publishedAt.slice(0, 4)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The site's own archive, rendered as real interface fragments at the end of a
 * post: the two kinds of thing it publishes, with their real titles and years.
 */
export default function MoreFromArchive({
  posts,
  current,
}: {
  posts: ArchivePost[];
  current?: string;
}) {
  const rest = posts.filter((p) => p.slug !== current);
  const reading = rest.filter((p) => /^books i read/i.test(p.title));
  const entries = rest.filter((p) => !/^books i read/i.test(p.title));
  if (!entries.length && !reading.length) return null;

  return (
    <div className="archive-pair">
      <Panel
        id="archive-entries"
        label="More entries"
        note={`${entries.length} to read`}
        posts={entries.slice(0, 5)}
      />
      <Panel
        id="archive-reading"
        label="Reading lists"
        note={`${reading.length} years`}
        posts={reading}
      />
    </div>
  );
}