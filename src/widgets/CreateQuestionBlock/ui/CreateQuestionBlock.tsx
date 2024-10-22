import Input from "@/shared/ui/Input";
import style from "./CreateQuestionBlock.module.scss";
import Button from "@/shared/ui/Button";
import useNewTest from "@/entities/NewTest/model/NewTest";
import { QuestionType } from "@/entities/NewTest/model/NewTestTypes";

interface CreateQuestionBlockI {
  question: QuestionType;
  id: number;
}
const CreateQuestionBlock = ({ question, id }: CreateQuestionBlockI) => {
  const { setAnswers, addAnswer, setQuestion, setTrueAnswer } = useNewTest();
  // const ChangeAnswers = (answer: string, id: number) => {
  //   const answers = [...question.answers];
  //   answers[id] = answers[id] + answer;
  //   setAnswers(id, answers);
  // };
  const ChangeQuestion = (name: string) => {
    setQuestion(id, name);
  };

  return (
    <div className={style.questionBlock}>
      <div className={style.question}>
        <h3>Вопрос:</h3>{" "}
        <Input
          value={question.name}
          onChange={(e) => ChangeQuestion(e.target.value)}
        />
      </div>
      <ul className={style.answers}>
        {question.answers?.map((answer, AnswId) => (
          <li key={AnswId} className={style.answer}>
            <h3>Ответ:</h3>
            <Input
              value={answer.name}
              onChange={(e) => setAnswers(id, AnswId, e.target.value)}
            />
            <Input type="checkbox" onClick={() => setTrueAnswer(id, AnswId)} />
          </li>
        ))}
      </ul>
      <Button onClick={() => addAnswer(id)} style={{ width: "30%" }}>
        Добавить ответ
      </Button>
    </div>
  );
};

export default CreateQuestionBlock;
