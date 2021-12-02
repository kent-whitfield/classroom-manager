import React, { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

function ApiFrame(props) {
  const [apiState, setApiState] = useState({
    loading: false,
    apiData: null,
  });

  const [componentData, setComponentData] = useState([]);

  function WaitForGetFrom(Component) {
    return function ({ isLoading, ...props }) {
      if (!isLoading) return <Component {...props} />;
      return <div>Loading...</div>;
    };
  }

  function getValue(key) {
    if (componentData.length > 0) {
      return componentData.find((d) => d.name === key).value;
    }
    return "";
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setApiState({ loading: true });
        const res = await axios.get(props.apiUrl);
        setApiState({ loading: false, apiData: res.data });
      } catch (err) {
        setApiState({ loading: false, apiData: null });
      }
    }
    fetchData();
  }, [setApiState, props.apiUrl]);

  useEffect(() => {
    function getNestedData(apiData, apiName) {
      let dotPos = apiName.indexOf(".");
      if (dotPos === -1) {
        return apiData[apiName];
      }

      let bracketVal = apiName.substring(0, dotPos);
      let newName = apiName.substring(dotPos + 1, apiName.length);
      return getNestedData(apiData[bracketVal], newName);
    }

    if (apiState.apiData && !apiState.loading) {
      setComponentData(
        props.apiDatamap.map((data) => {
          return {
            name: data.container,
            //value: apiState.apiData[data.api],
            value: getNestedData(apiState.apiData, data.api),
          };
        })
      );
    }
  }, [apiState, props.apiDatamap]);

  const quote = () => {
    if (!apiState.apiData)
      return <div>Sorry, unable to load data from: {props.apiUrl}</div>;
    return (
      <div>
        <div>{getValue("quote")}</div>
        <div>{getValue("quoteAuthor")}</div>
      </div>
    );
  };

  const generic = () => {
    const elementList = props.apiDatamap.map((data) => {
      return (
        <div key={nanoid()}>
          {getValue("element" + props.apiDatamap.indexOf(data))}
        </div>
      );
    });

    if (!apiState.apiData)
      return <div>Sorry, unable to load data from: {props.apiUrl}</div>;
    return elementList;
  };

  function setContainerType(type) {
    switch (type) {
      default:
      case "generic":
        return WaitForGetFrom(generic);
      case "quote":
        return WaitForGetFrom(quote);
    }
  }

  const FrameLoading = setContainerType(props.apiType);

  return (
    <div>
      <hr />
      <h3>{props.apiTitle}</h3>
      <div>
        <FrameLoading isLoading={apiState.loading} />
      </div>
    </div>
  );
}

export default ApiFrame;
