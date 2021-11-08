import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;

  return (
    <>
      {Object.keys(options).map((name) => (
        <button
          key={name}
          name={name}
          type="button"
          className={s.button}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(FeedbackOptions);

export default FeedbackOptions;
