import Header from "@/widgets/Header";
import style from "./MyTestsPage.module.scss";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import TestCards from "@/widgets/TestCards/ui/TestCards";
import Button from "@/shared/ui/Button";
import { useState } from "react";

const MyTestsPage = () => {
  const [created, setCreated] = useState(true);
  const CreatedCardArray = [
    { title: "Тест “Python”" },
    { title: "Тест “Java”" },
    { title: "Тест “C++”" },
    { title: "Проверочная “Части речи”" },
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
      <div className={style.Buttons}>
        <Button
          onClick={() => setCreated(true)}
          variant={created ? "primary" : "text"}
        >
          Созданные
        </Button>
        <Button
          onClick={() => setCreated(false)}
          variant={created ? "text" : "primary"}
        >
          Решенные
        </Button>
      </div>

      <TestCards
        newTest={created ? true : false}
        cards={created ? CreatedCardArray : PassedCardArray}
      />
    </div>
  );
};

export default MyTestsPage;
