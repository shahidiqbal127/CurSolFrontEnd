import { useState } from "react";
import Axios from "axios";

const useGetApi = () => {
  const [getApiData, setGetApiData] = useState([]);
  const [error, setError] = useState(null);

  const getApiDataList = async (urlVal, customHeaders = {}) => {
    try {
      const apiUrl = process.env.REACT_APP_NIMBAPAY_IP;
      const url = `${apiUrl}/api/${urlVal}`;
      const headers = localStorage.usertoken
        ? { Authorization: `Bearer ${localStorage.usertoken}`, ...customHeaders }
        : customHeaders;
      const res = await Axios.get(url, { headers });
      setGetApiData(res.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred while fetching data. Please try again later.");
      }
    }
  };

  return { getApiData, getApiDataList, error };
};

export default useGetApi;
