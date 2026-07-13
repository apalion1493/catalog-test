import { Link } from "react-router";

export const Header = () => {
  return (
    <header className={"bg-pink-300 flex flex-col"}>
      <h2>Header</h2>
      <nav>
        <Link to="/">Главная</Link>
        {" | "}
        <Link to="/about">О нас</Link>
        {" | "}
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  )
}
