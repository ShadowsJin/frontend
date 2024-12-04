import Input from "@/shared/ui/Input";
import style from "./CreateQuestionBlock.module.scss";
import Button from "@/shared/ui/Button";
import useTest from "@/entities/Test/model/TestSlice";
import { QuestionType } from "@/entities/Test/model/TestSliceTypes";
import TrashIcon from "@/shared/assets/Trash.svg";
import { LegacyRef, useRef } from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);

  const ChangeQuestion = (name: string) => {
    setQuestion(id, name);
  };

  const addAnswerFunc = async (id: number) => {
    await addAnswer(id);
    inputRef?.current?.focus();
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
                ref={AnswId === question.answers.length - 1 ? inputRef : null}
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
      <Button onClick={() => addAnswerFunc(id)}>Добавить ответ</Button>
    </div>
  );
};

export default CreateQuestionBlock;
