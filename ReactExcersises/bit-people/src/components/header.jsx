import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { GridButton } from "./gridButton";
import { Refresh } from "./layout/Refresh";
import { ListButton } from "./listButton";

export const Header = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          Bit -People
        </Link>

        <ul>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <Refresh />
          </li>
          <li>
            <CustomLink to="/list">
              <ListButton />
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/grid">
              <GridButton />
            </CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
