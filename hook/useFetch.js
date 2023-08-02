// import { useState, useEffect } from "react";
// import axios from "axios";
// // import { RAPID_API_KEY } from "@env";
// // const rapidApiKey = RAPID_API_KEY;

// const useFetch = ({ endpoint, query }) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//     params: {
//       query: "Python developer in Texas, USA",
//       page: "1",
//       num_pages: "1",
//     },
//     headers: {
//       "X-RapidAPI-Key": 'cc74c03d54msh28987f33b061a67p14a025jsndaca7435e2b7',
//       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//     },
//     // cc74c03d54msh28987f33b061a67p14a025jsndaca7435e2b7
//     params: {
//       query: "Python devloper",
//       page: "1",
//       num_pages: "1",
//     },
//   };
//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);
//       setData(response.data.data);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       alert("There is an error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return{data,isLoading,error,refetch};
// };

// export default useFetch ;

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": 'cc74c03d54msh28987f33b061a67p14a025jsndaca7435e2b7',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
              ...query
            },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;