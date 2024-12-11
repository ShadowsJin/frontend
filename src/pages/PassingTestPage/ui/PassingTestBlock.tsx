import LeftPanel from "@/widgets/LeftPanel";
import TestPassingForm from "@/entities/TestPassing/ui/TestPassingForm";
import {
  AnswerForPassing,
  TestCardType,
  TestPassingQuestionType,
} from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import {
  getPassingTestQuestionsArray,
  getTestQuestion,
  sendAnswers,
} from "@/features/TestsOperations/model/TestsOperations";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  testData: TestCardType | null;
}

const PassingTestBlock = ({ testData }: Props) => {
  const { idTest, numberQuestion } = useParams();
  const navigate = useNavigate();

  const [questionData, setQuestionData] =
    useState<null | TestPassingQuestionType>(null);
  const [viewedQuestions, setViewedQuestions] = useState<number[]>([]);
  const [answers, setAnswers] = useState<null | AnswerForPassing[]>(null);
  const selectAnswers = answers
    ?.filter(({ is_selected }) => is_selected)
    ?.map(({ id }) => id);
  const [questionsArray, setQuestionsArray] = useState<
    TestPassingQuestionType[]
  >([
    {
      name: "",
      type: "1",
      id: "",
      is_answered: false,
      answers: [
        {
          name: "",
          is_selected: false,
          id: "",
        },
      ],
    },
  ]);

  console.log(viewedQuestions);

  useEffect(() => {
    getTestQuestion(idTest, numberQuestion).then((data) => {
      if (data) {
        setQuestionData(data);
        setAnswers(data.answers);
      }
    });

    getPassingTestQuestionsArray(idTest).then((data) => {
      if (data) {
        if (
          numberQuestion &&
          !viewedQuestions?.includes(Number(numberQuestion))
        ) {
          setViewedQuestions([...viewedQuestions, Number(numberQuestion)]);
        }
        const newQuestionArray = [...data].map((question) =>
          viewedQuestions.includes(data.indexOf(question))
            ? { ...question, is_viewed: true }
            : { ...question }
        );
        console.log(newQuestionArray);
        setQuestionsArray(newQuestionArray);
      }
    });

    return () => {
      setQuestionData(null);
      setAnswers(null);
    };
  }, [idTest, numberQuestion, viewedQuestions]);

  const toggleAnswer = (id: number, isSelected: boolean) => {
    const newAnswers = answers ? [...answers] : [];
    newAnswers[id].is_selected = !isSelected;
    setAnswers(newAnswers);
  };

  const nextQuestion = async () => {
    selectAnswers?.length &&
      (await sendAnswers(idTest, numberQuestion, selectAnswers));
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) + 1}`);
  };

  const prevQuestion = async () => {
    selectAnswers?.length &&
      (await sendAnswers(idTest, numberQuestion, selectAnswers));
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) - 1}`);
  };

  return (
    <>
      <LeftPanel questionsArray={questionsArray} testData={testData} />
      <TestPassingForm
        toggleAnswer={toggleAnswer}
        nextQuestion={nextQuestion}
        prevQuestion={prevQuestion}
        questionData={questionData}
        questions_count={testData?.questions_count}
        answers={answers}
        selectAnswers={selectAnswers}
      />
    </>
  );
};

export default PassingTestBlock;
