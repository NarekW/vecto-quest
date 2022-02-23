import styles from "./MainMenu.module.scss";
import searchIcon from "../../../assets/icons/Search.png";
import HomeIcon from "../../../assets/icons/Group46.png";
import GenresIcon from "../../../assets/icons/Group 53.png";
import TvShowsIcon from "../../../assets/icons/Group 54.png";
import moviesIcon from "../../../assets/icons/Group 56.png";
import LaterIcon from "../../../assets/icons/Group 47.png";
import { useState } from "react";
import { motion } from "framer-motion";

const UserInfoContainer = ({ name, src }) => (
  <div className={`${styles.userInfoContainer}`}>
    <div>
      <img src={src} alt="error" />
    </div>
    <div>
      <p>{name}</p>
    </div>
  </div>
);
const SettingsLink = ({ text, href, isShown }) => (
  <li>
    <a href={href}>{isShown ? <span>{text}</span> : null}</a>
  </li>
);
const SettingsContainer = ({ isShown }) => (
  <div className={`${styles.settingsContainer}`}>
    <ul>
      <SettingsLink isShown={isShown} text="Language" href="/#" />
      <SettingsLink isShown={isShown} text="Get Help" href="/#" />
      <SettingsLink isShown={isShown} text="Exit" href="/#" />
    </ul>
  </div>
);
const MenuLink = ({ text, href, src, isShown }) => (
  <li>
    <motion.a
      whileHover={{
        backgroundColor: "#3B486D",
      }}
      whileFocus={{
        backgroundColor: "#3B486D",
        width: "62px",
        borderRadius: "42px",
      }}
      href={href}
    >
      <img src={src} alt="error" />
      {isShown ? <span>{text}</span> : null}
    </motion.a>
  </li>
);
const ButtonsContainer = ({ isShown }) => (
  <div className={`${styles.buttonsContainer}`}>
    <ul>
      <MenuLink isShown={isShown} src={searchIcon} text="Search" href="/#" />
      <MenuLink isShown={isShown} src={HomeIcon} text="Home" href="/#" />
      <MenuLink isShown={isShown} src={TvShowsIcon} text="TV Shows" href="/#" />
      <MenuLink isShown={isShown} src={moviesIcon} text="Movies" href="/#" />
      <MenuLink isShown={isShown} src={GenresIcon} text="Genres" href="/#" />
      <MenuLink
        isShown={isShown}
        src={LaterIcon}
        text="Watch Later"
        href="/#"
      />
    </ul>
  </div>
);

function MainMenu() {
  const [isShown, setIsShown] = useState(false);
  return (
    <motion.section
      className={`${styles.mainMenu}`}
      animate={{
        width: isShown ? "550px" : "155px",
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="user-section">
        {isShown ? (
          <UserInfoContainer
            isShown={isShown}
            name="Daniel"
            src={
              "https://i.pinimg.com/736x/19/85/be/1985be408ebdeb23b19af4cdf2f86e61.jpg"
            }
          />
        ) : null}
      </div>
      <div className={`${styles.buttons_section}`}>
        <ButtonsContainer isShown={isShown} />
      </div>
      <div className="settings_section">
        <SettingsContainer isShown={isShown} />
      </div>
    </motion.section>
  );
}

export default MainMenu;
