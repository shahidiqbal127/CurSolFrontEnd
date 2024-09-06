import { useState } from "react";
import Axios from "axios";
import { UpdateToken } from "../UserFunction";
import { Global_Ip } from "../components/Dashboard/url/urls";

const useGetApi = (urlVal) => {
  const [getApiData, setGetApiData] = useState([]);

  var url = "";
  url = Global_Ip + "api/" + urlVal;
  const getApiDataList = async () => {
    try {
      const res = await Axios.get(url, {
        headers: {
          Authorization: `bearer ${localStorage.usertoken}`,
        },
      });
      setGetApiData(res.data);
    } catch (error) {
      console.log("Token Error Occured", error);
      const token = await UpdateToken();
      if (token) {
        const res = await Axios.get(url, {
          headers: {
            Authorization: `bearer ${localStorage.usertoken}`,
          },
        });
        setGetApiData(res.data);
      }
    }
  };

  // useEffect(() => {
  //     getApiDataList()
  // }, []);

  return { getApiData, getApiDataList, setGetApiData };
};

export default useGetApi;
