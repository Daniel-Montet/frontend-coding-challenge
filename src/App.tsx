import { useEffect, useState } from "react";
import "./App.css";
import { AppProps } from "./types/types";
import List from "./components/list/list.component";

function App() {
  const [{ isLoading, isError, data }] = useTypicodeApi();
  return (
    <div>
      <hr />
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? <div>Loading ...</div> : <List data={data} />}
    </div>
  );
}

export default App;
// fetch data from  https://jsonplaceholder.typicode.com/photos
// create list component
//   list item component
//     label <---> focused input onHover, onClick of canvas, onKeyUp Esc / Enter
//     display image ---> thumbnailUrl
//     <div>{Date.now()}</div>
//     conditionally render backgroundColor if id is even grey if odd white
//  Confirm Update
//   disabled by default ---> onChange of any listItem label it switches to active
//   onClick update all listItem(s)
//  Reset button
//     disabled by default
//     enabled when any listItem title has been changed
//     onClick all titles should reset to previous state without need of re fetching data from the API

// function useHackerNewsApi(): [
//   state: { data: { hits: any[] }; isLoading: boolean; isError: boolean },
//   setUrl: Function
// ] {
//   const [data, setData] = useState({ hits: [] });
//   const [url, setUrl] = useState(
//     "https://hn.algolia.com/api/v1/search?query=redux"
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const fetchData = () => {
//     setIsLoading(true);
//     setIsError(false);

//     fetch(url)
//       .then(async (response) => {
//         let result = await response.json();
//         setData(result);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsLoading(false);
//         setIsError(true);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, [url]);

//   return [{ data, isLoading, isError }, setUrl];
// }

function useTypicodeApi(): [
  { isLoading: boolean; isError: boolean; data: AppProps["data"] }
] {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<AppProps["data"]>();

  const fetchData = () => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(async (response) => {
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log("use effect called");
    fetchData();
  }, []);

  return [{ isLoading, isError, data }];
}
