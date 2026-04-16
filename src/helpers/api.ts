import axios, { AxiosResponse } from "axios";
import { IComment } from "./interface";

const addComment = async (data: IComment) => {
  try {
    const res = await axios.post("/api/comments", data);
    return res as AxiosResponse;
  } catch (error) {
    return error as AxiosResponse;
  }
};

const fetchComments = async () => {
  try {
    const res = await axios.get("/api/comments");
    return res as AxiosResponse;
  } catch (error) {
    return error as AxiosResponse;
  }
};

export { addComment, fetchComments };
