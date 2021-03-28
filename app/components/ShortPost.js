export default function ShortPost({ post }) {
  return (
    <div className="sp-item">
      <div>
        <span className="sp-item-date">{post.date}</span>
      </div>
      <h2 className="sp-item-title">
        <a className="sp-item-title-anchor">{post.title}</a>
      </h2>
      <p className="sp-item-description">{post.description}</p>
      <a className="sp-item-anchor">Read</a>
    </div>
  );
}
