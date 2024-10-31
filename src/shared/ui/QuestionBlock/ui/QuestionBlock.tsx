import useTestPassing from "@/entities/TestPassing/model/TestPassingSlice";
import Input from "@/shared/ui/Input";

interface IQuestionBlock {
  question: string;
  answers: string[];
  id: number;
}
const QuestionBlock = ({ question, answers, id }: IQuestionBlock) => {
  const { addAnswer } = useTestPassing();
  return (
    <div>
      <h3>{question}</h3>
      {answers.map((answer, ansId) => (
        <div key={ansId}>
          {answer}{" "}
          <Input type="checkbox" onClick={() => addAnswer(id, ansId)} />
        </div>
      ))}
    </div>
  );
};

export default QuestionBlock;
