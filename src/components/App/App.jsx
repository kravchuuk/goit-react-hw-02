import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedfeedback = window.localStorage.getItem("saved-feedback");
    if (savedfeedback !== null) {
      return JSON.parse(savedfeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    window.localStorage.removeItem("saved-feedback");
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const feedbackInPercent = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <div className="container">
      <Description />
      <Options
        update={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          percent={feedbackInPercent}
        />
      )}
    </div>
  );
}
