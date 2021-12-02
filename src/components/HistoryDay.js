import React from "react";
import { nanoid } from "nanoid";

function HistoryDay(props) {
  const { day } = props;

  const capitalize = (str) => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  function summarize(category) {
    let summaryData = [];

    day.events
      .filter((event) => event.category === category)
      .forEach((event) => {
        let summary = summaryData.find((s) => s.type === event.type);
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
        let result = summary.results.find((r) => r.type === event.result);
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
      const results = summary.results.map((result) => {
        return (
          <div key={nanoid()}>
            {result.type}: {result.count}
          </div>
        );
      });

      return (
        <div key={nanoid()}>
          <h6>
            {capitalize(summary.type)}: {summary.count}
          </h6>
          <div>
            Results:
            <div>{results}</div>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <h5>{day.date}</h5>
      {interactions()}
    </div>
  );
}

export default HistoryDay;
