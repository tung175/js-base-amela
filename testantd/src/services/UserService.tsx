import { useSelector } from "react-redux";
import axios from "../config/customize-axios";

export const postLogin = (
  username: string,
  password: string,
  expiresInMins: number
) => {
  return axios.post<any>("/auth/login", {
    username,
    password,
    expiresInMins: 60,
  });
};

export const CallRefreshToken = (expiresInMins: number) => {
  // console.log(axios.post<any>("/auth/refresh", {expiresInMins: 5}));
  return axios.post<any>("/auth/refresh", { expiresInMins });
};

export const CallCurrentAuth = async () => {
  const auth = useSelector((state: any) => state.user.userAcc);

  try {
    let data = await axios.get<any>("/auth/me",{
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
