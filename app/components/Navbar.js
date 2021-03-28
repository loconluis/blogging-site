export default function Navbar({ tabs }) {
  return (
    <nav className="sidebar-main-navigation">
      <ul className="sidebar-main-navigation-list">
        {tabs?.map((el, index) => {
          return (
            <li className="sidebar-main-navigation-list-item" key={index}>
              <a>{el}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
