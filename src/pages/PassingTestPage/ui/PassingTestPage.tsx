import Header from "@/widgets/Header";
import classNames from "classnames";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./PassingTestPage.module.scss";
import QuestionBlock from "@/widgets/QuestionBlock";
import Button from "@/shared/ui/Button";

const PassingTestPage = () => {
  const { id } = useParams();
  const data = [
    {
      question:
        "Кто из этих персонажей не получил проходные баллы по всем 12 предметам на СОВ?",
      answers: [
        "Гермиона Грейнджер",
        "Билл Уизли",
        "Перси Уизли",
        "Барти Крауч-младший",
      ],
    },
    {
      question: "Что пообещали близнецы, сбегая из Хогвартса?",
      answers: [
        "Что будут наведываться в замок и портить жизнь Амбридж",
        "Назвать одну из вредилок в честь Пивза",
        "Скидку тем, кто будет использовать их продукцию против Амбридж",
        "Запас вредилок всем, кто вступит в Отряд Дамблдора",
      ],
    },
    {
      question:
        "Как Гарри Поттер при первом же знакомстве умудрился взбесить Андромеду Тонкс, мать Нимфадоры?",
      answers: [
        "Зло высказался о факультете Слизерин, на котором она училась",
        "Сказал, что она похожа на Беллатрису Лестрейндж",
        "Использовал темную магию",
        "Тепло отозвался о Сириусе, которого Андромеда, как и весь магический мир, считала предателем и Пожирателем",
      ],
    },
  ];
  useEffect(() => {
    //Делаем запрос на сервер для получения теста по id
  }, []);
  return (
    <div className={classNames("section", style.PassingTestPage)}>
      <Header title="Прохождение Теста" />
      {data.map(({ question, answers }, id) => (
        <QuestionBlock id={id} key={id} question={question} answers={answers} />
      ))}
      <Button>Закончить</Button>
    </div>
  );
};

export default PassingTestPage;
