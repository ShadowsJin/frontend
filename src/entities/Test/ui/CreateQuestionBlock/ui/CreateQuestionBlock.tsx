import Input from "@/shared/ui/Input";
import style from "./CreateQuestionBlock.module.scss";
import Button from "@/shared/ui/Button";
import useTest from "@/entities/Test/model/TestSlice";
import { QuestionType } from "@/entities/Test/model/TestSliceTypes";
import TrashIcon from "@/shared/assets/Trash.svg";

interface CreateQuestionBlockI {
  question: QuestionType;
  id: number;
}
const CreateQuestionBlock = ({ question, id }: CreateQuestionBlockI) => {
  const {
    setAnswers,
    addAnswer,
    setQuestion,
    setTrueAnswer,
    deleteQuestion,
    deleteAnswer,
  } = useTest();

  const ChangeQuestion = (name: string) => {
    setQuestion(id, name);
  };

  return (
    <div className={style.questionBlock}>
      <div className={style.question}>
        <div className={style.title}>
          <p>Вопрос :</p>
          <span onClick={() => deleteQuestion(id)}>Удалить вопрос</span>
        </div>
        <Input
          value={question.name}
          onChange={(e) => ChangeQuestion(e.target.value)}
        />
      </div>
      <ul className={style.answers}>
        {question.answers?.map((answer, AnswId) => (
          <li key={AnswId} className={style.answer}>
            <p>Вариант ответа {AnswId + 1}:</p>

            <div className={style.inputs}>
              <Input
                type="checkbox"
                onClick={() => setTrueAnswer(id, AnswId)}
              />
              <Input
                value={answer.name}
                onChange={(e) => setAnswers(id, AnswId, e.target.value)}
              />
              <div
                className={style.trashIcon}
                onClick={() => deleteAnswer(id, AnswId)}
              >
                <TrashIcon />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button onClick={() => addAnswer(id)}>Добавить ответ</Button>
    </div>
  );
};

export default CreateQuestionBlock;
