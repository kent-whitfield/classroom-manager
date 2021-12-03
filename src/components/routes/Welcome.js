import React from "react";
import ApiFrame from "../ApiFrame";
import { nanoid } from "nanoid";

function Welcome() {
  const apiInfo = [
    {
      title: "Random Quote",
      url: "https://api.quotable.io/random",
      type: "quote",
      datamap: [
        { api: "content", container: "quote" },
        { api: "author", container: "quoteAuthor" },
      ],
    },

    {
      title: "Useless Facts",
      url: "https://uselessfacts.jsph.pl/random.json?language=en",
      type: "generic",
      datamap: [{ api: "text", container: "element0" }],
    },

    {
      title: "Fun Facts",
      url: "https://asli-fun-fact-api.herokuapp.com/",
      type: "generic",
      datamap: [{ api: "data.fact", container: "element0" }],
    },

    {
      title: "Vancouver Weather",
      url: "https://goweather.herokuapp.com/weather/vancouver",
      type: "generic",
      datamap: [
        { api: "temperature", container: "element0" },
        { api: "description", container: "element1" },
      ],
    },
  ];

  let frameList = apiInfo.map((info) => {
    return (
      <ApiFrame
        key={"api" + nanoid()}
        apiTitle={info.title}
        apiUrl={info.url}
        apiType={info.type}
        apiDatamap={info.datamap}
      />
    );
  });

  return (
    <div>
      <h2>Welcome!</h2>
      <div className="api-frame-list">{frameList}</div>
    </div>
  );
}

export default Welcome;
