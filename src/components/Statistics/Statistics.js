// import React from 'react';
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div className={s.statistics}>
      <ul>
        <li key="id-1">Good: {good}</li>
        <li key="id-2">Neutral: {neutral}</li>
        <li key="id-3">Bad: {bad}</li>
        <li key="id-4">Total: {total}</li>
        <li key="id-5">
          Positive feedback: {good ? positivePercentage(good, neutral, bad) : 0}
          %
        </li>
      </ul>
    </div>
  );
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(Statistics);

export default Statistics;
