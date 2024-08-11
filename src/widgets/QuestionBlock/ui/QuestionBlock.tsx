import Input from "@/shared/ui/Input";

interface IQuestionBlock {
  question: string;
  answers: string[];
}
const QuestionBlock = ({ question, answers }: IQuestionBlock) => {
  return (
    <div>
      <h3>{question}</h3>
      {answers.map((answer, id) => (
        <div key={id}>
          {answer} <Input type="checkbox" />
        </div>
      ))}
    </div>
  );
};

export default QuestionBlock;
