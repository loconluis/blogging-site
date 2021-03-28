export default function Avatar({ size }) {
  return (
    <img
      width={size == "small" ? 50 : 75}
      height={size == "small" ? 50 : 75}
      className="sidebar-main-avatar"
      src="/images/me.png"
    />
  );
}
