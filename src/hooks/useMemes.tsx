import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { MemesData } from "../interfaces/app_interfaces";

const useMemes = () => {
  const [memesData, setMemesData] = useState<MemesData>();

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setMemesData(res.data);
    });
  }, []);

  return { memesData };
};

export default useMemes;
