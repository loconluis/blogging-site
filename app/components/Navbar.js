import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ tabs }) {
  const router = useRouter();

  return (
    <nav className="sidebar-main-navigation">
      <ul className="sidebar-main-navigation-list">
        {tabs?.map((el, index) => {
          return (
            <li
              className={`sidebar-main-navigation-list-item ${
                router.route == el.route
                  ? "sidebar-main-navigation-list__active"
                  : ""
              }`}
              key={index}
            >
              <Link href={el.route}>
                <a>{el.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
