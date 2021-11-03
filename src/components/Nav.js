import "../components/Nav.css";
export default function Nav() {
  return (
    <nav className="container m-t">
      <div className="logo">
        <img src="./assets/images/logo.svg" alt="logo Blogr" />
      </div>
      <ul className="links none">
        <li className="links__link">
          Product{" "}
          <img src="./assets/images/icon-arrow-light.svg" alt="icon arrow" />
        </li>
        <li className="links__link">
          Company{" "}
          <img src="./assets/images/icon-arrow-light.svg" alt="icon arrow" />
        </li>
        <li className="links__link">
          connect{" "}
          <img src="./assets/images/icon-arrow-light.svg" alt="icon arrow" />
        </li>
      </ul>
      <div className="login none">
        <span>Login</span>
        <span>Sign up</span>
      </div>
      <div className="menu">
        <div className="menu__icon">
          <img src="./assets/images/icon-hamburger.svg" alt="icon-menu" />
        </div>
      </div>
    </nav>
  );
}
