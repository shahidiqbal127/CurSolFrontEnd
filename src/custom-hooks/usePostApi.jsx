import { useState } from "react";
import Axios from "axios";
import { UpdateToken } from "../UserFunction";
import { Global_Ip } from "Urls";

const usePostApi = (urlVal, dataPost) => {
  const [postApiData, setPostApiData] = useState([]);

  var url = "";
  url = Global_Ip + "api/" + urlVal;
  const postApiDataList = async (dataPost) => {
    try {
      const res = await Axios.post(url, dataPost, {
        headers: {
          Authorization: `bearer ${localStorage.usertoken}`,
        },
      });
      setPostApiData(res.data);
      alert("Data Saved Successfully");
    } catch (error) {
      console.log("Token Error Occured", error);
      const token = await UpdateToken();
      if (token) {
        const res = await Axios.post(url, dataPost, {
          headers: {
            Authorization: `bearer ${localStorage.usertoken}`,
          },
        });
        setPostApiData(res.data);
        alert("Data Saved Successfully");
      }
    }
  };
  return { postApiData, postApiDataList };
};

export default usePostApi;
