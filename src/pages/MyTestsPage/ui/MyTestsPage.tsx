import Header from "@/widgets/Header";
import style from "./MyTestsPage.module.scss";
import classNames from "classnames";

import { useState } from "react";
import TestCards from "@/widgets/TestCards/ui/TestCards";
import CreatingTestBlock from "@/features/TestsOperations/ui/CreatingTestBlock";

const MyTestsPage = () => {
  const [created, setCreated] = useState(true);
  const CreatedCardArray = [
    {
      title: "Кто ты из Бравл Старс?",
      description:
        "Этот тест даст вам понять, каким персонажем из Бравл Старс вы являетесь. Может быть в душе вы Леон или Спайк? Узнайте это благодаря нашему тесту",
    },
    {
      title: "Логарифмы",
      description: "Тест даст вам понять, какие логарифмы вы изучаете.",
    },
    {
      title: "Части речи",
      description:
        "Данный тест проверяет ваши знания частей речи русского языка!",
    },

    { title: "Части речи" },
    { title: "Логарифмы" },
    {
      title: "Кто ты из Бравл Старс?",
      description:
        "Этот тест даст вам понять, каким персонажем из Бравл Старс вы являетесь. Может быть в душе вы Леон или Спайк? Узнайте это благодаря нашему тесту",
    },
  ];
  const PassedCardArray = [
    { title: "Тест какой ты батон?" },
    { title: "Проверочная “Алканы“" },
    { title: "Тест кто ты из телепузиков?" },
    { title: "Самостоятельная “Логарифмы“" },
    { title: "Тест на знание заклинаний из Гарри Потера" },
  ];
  return (
    <div className={classNames("section", style.MyTestsPage)}>
      <Header title="МОИ ТЕСТЫ" />
      <div className={style.tools}>
        <CreatingTestBlock />
        <div className={style.RightBlock}>
          <div
            onClick={() => setCreated(true)}
            className={classNames(style.tool, { [style.noActive]: !created })}
          >
            <h3>Созданные</h3>
          </div>
          <div className={style.line}></div>
          <div
            onClick={() => setCreated(false)}
            className={classNames(style.tool, { [style.noActive]: created })}
          >
            <h3>Решенные</h3>
          </div>
        </div>
      </div>

      <TestCards
        created={created}
        cards={created ? CreatedCardArray : PassedCardArray}
      />
    </div>
  );
};

export default MyTestsPage;
