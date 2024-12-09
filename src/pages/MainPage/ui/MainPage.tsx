import Button from "@/shared/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import style from "./MainPage.module.scss";
import NavBar from "@/widgets/NavBar";
import classNames from "classnames";
import ChacklistIcon from "@/shared/assets/checklist.svg";
import LaughEmojiIcon from "@/shared/assets/laughEmoji.svg";
import DiamondIcon from "@/shared/assets/Diamond.svg";
import CrownIcon from "@/shared/assets/crown.svg";
import AirplaneIcon from "@/shared/assets/airplane.svg";
import FrontendImg from "@/shared/assets/frontendImg.png";
import LizaImg from "@/shared/assets/lizaImg.png";
import LizaBackgroundImg from "@/shared/assets/lizaBackground.png";
import LetterIcon from "@/shared/assets/letterSvg.svg";
import TelegramIcon from "@/shared/assets/telegramSvg.svg";
import TeamIcon from "@/shared/assets/teamEmoji.svg";
import BackendImg from "@/shared/assets/backendImg.png";
import VladImg from "@/shared/assets/vladImg.png";
import VladBackground from "@/shared/assets/vladBackground.png";
import DesignImg from "@/shared/assets/designImg.png";
import DanyaBackground from "@/shared/assets/danyaBackground.png";
import DanyaImg from "@/shared/assets/danya.png";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className={style.MainPage}>
      <div className={style.mainBlock}>
        <div className={classNames(style.picture, style.checklist)}>
          <ChacklistIcon />
        </div>
        <div className={classNames(style.picture, style.diamond)}>
          <DiamondIcon />
        </div>
        <NavBar />
        <div className="container">
          <div className={style.content}>
            <h1>
              <div className={classNames(style.picture, style.crown)}>
                <CrownIcon />
              </div>
              TASTYQ
            </h1>

            <p>
              Веб-приложение для создания тестов <br /> и проверочных работ
            </p>

            <div className={style.authBlock}>
              <Button onClick={() => navigate("/login")}>Войти</Button>
              <Button onClick={() => navigate("/register")}>Регистрация</Button>
            </div>
          </div>
        </div>
        <div className={classNames(style.picture, style.emoji)}>
          <LaughEmojiIcon />
        </div>
        <div className={classNames(style.picture, style.airplane)}>
          <AirplaneIcon />
        </div>
      </div>

      <div id="aboutUsBlock" className={style.aboutUs}>
        <div className={style.clickBlock}>кликни!</div>
        <div className={style.description}>
          <h2>
            Создавай тесты <br />в
            <span className={style.accent}> один клик!</span>
          </h2>
          <p>
            TastyQ – это удобное и интуитивно понятное веб-приложение, которое
            позволяет легко создавать тесты любой сложности. Независимо от того,
            являетесь ли вы преподавателем, HR-специалистом или просто хотите
            проверить свои знания, TastyQ станет вашим надежным помощником!
          </p>
        </div>
      </div>

      <div id="teamBlock" className={style.teamBlock}>
        <h2>
          Команда проекта <TeamIcon />
        </h2>
        <div className={style.teamMember}>
          <div className={style.images}>
            <img src={FrontendImg} className={style.role} />
            <img src={LizaBackgroundImg} className={style.background} />
            <img src={LizaImg} className={style.member} />
          </div>
          <h3>Кобзева Елизавета</h3>
          <div className={style.contacts}>
            <p>
              <LetterIcon />
              lizakobzeva@list.ru
            </p>
            <p>
              <TelegramIcon />
              @lizakobzeva
            </p>
          </div>
        </div>

        <div className={style.teamMember}>
          <div className={style.images}>
            <img src={BackendImg} className={style.role} />
            <img src={VladBackground} className={style.background} />
            <img src={VladImg} className={style.member} />
          </div>
          <h3>Осипов Владислав</h3>
          <div className={style.contacts}>
            <p>
              <LetterIcon />
              lifelongcat@yandex.ru
            </p>
            <p>
              <TelegramIcon />
              @wtf_my_life
            </p>
          </div>
        </div>

        <div className={style.teamMember}>
          <div className={style.images}>
            <img src={DesignImg} className={style.role} />
            <img src={DanyaBackground} className={style.background} />
            <img src={DanyaImg} className={style.member} />
          </div>
          <h3>Писарев Даниил</h3>
          <div className={style.contacts}>
            <p>
              <LetterIcon />
              sc206vpisarevdaniil@yandex.ru
            </p>
            <p>
              <TelegramIcon />
              @DaniilPisarev
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
