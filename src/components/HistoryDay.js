import React from "react";
import { nanoid } from "nanoid";

function HistoryDay(props) {
  const { day } = props;

  const capitalize = (str) => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // summarize interection types and results for a given category
  function summarize(category) {
    let summaryData = [];

    day.events
      .filter((event) => event.category === category)
      .forEach((event) => {
        let summary = summaryData.find(
          (s) => s.type.toUpperCase() === event.type.toUpperCase()
        );
        if (summary) {
          summary.count++;
        } else {
          summary = {
            type: event.type,
            count: 1,
            results: [],
          };
          summaryData.push(summary);
        }
        let result = summary.results.find(
          (r) => r.type.toUpperCase() === event.result.toUpperCase()
        );
        if (result) {
          result.count++;
        } else {
          result = {
            type: event.result,
            count: 1,
          };
          summary.results.push(result);
        }
      });

    return summaryData;
  }

  function interactions() {
    const summaryData = summarize("interaction");

    return summaryData.map((summary) => {
      // for each result type return a div containing format: result: count
      const results = summary.results.map((result) => {
        return (
          <div className="result" key={nanoid()}>
            {capitalize(result.type)}: {result.count}
          </div>
        );
      });

      return (
        <div className="summary-results" key={nanoid()}>
          <div className="summary-type">
            {capitalize(summary.type)}: {summary.count}
          </div>
          <div>
            <div className="results-container">{results}</div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="day-container">
      <div className="day-date">{day.date}</div>
      {interactions()}
    </div>
  );
}

export default HistoryDay;
