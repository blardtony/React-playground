import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="container navbar mx-auto px-6 lg:px-2">
      <Link to={"/"} className="flex-1 text-xl font-bold">
        React Template
      </Link>
      <div className="flex-none">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
