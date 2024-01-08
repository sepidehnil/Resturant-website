import "../assets/styles/header.css";
import logo from "../assets/images/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-title">
        <img src={logo} className="header-logo" />
        <h1 className="headerName">ReactFood</h1>
      </div>
      <nav className="cart">
        <Button textOnly>Cart 0</Button>
      </nav>
    </header>
  );
}
