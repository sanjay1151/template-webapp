import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    axios
      .get("/test")
      .then((res) => {
        console.log(res.data);
        setApiData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div className="App">{apiData}</div>;
}

export default App;
