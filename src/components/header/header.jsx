import style from "../header/header.module.css";
import LogoMenu from "../../assets/img/google-logo.svg";

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.headerWrapper}> 
          <a className={style.logo} href="/">
            <buttom>
              <img src={LogoMenu} alt="logo google" />
            </buttom>
          </a>
          <nav className={style.navWrapper}>
            <ul>
              <li>Inicio</li>
              <li>Assesórios</li>
              <li>Aparelhos</li>
              <li>Sobre</li>
            </ul>
          </nav>
        </div>
    </header>
  );
};

export default Header;
