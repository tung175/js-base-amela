import { toast } from "react-toastify";
import {
  CallCurrentAuth,
  CallRefreshToken,
  postLogin,
} from "../../services/UserService";
import { ThunkResult } from "../reducers/rootReducer";
import { message } from "antd";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REFRESH = "USER_REFRESH";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL";

export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const handleLoginRedux = (
  username: string,
  password: string,
  rememberMe: boolean
): ThunkResult<void> => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_USER_LOGIN });
    let checkChar = /^(?=.*[A-Za-z])(?=.*\d).{1,7}$/.test(password);
    if (!checkChar) {
      // console.log(res);
      message.error(
        "Mật khẩu phải chứa cả chữ và số và có ít hơn hoặc bằng 8 ký tự."
      );
    } else {
      let res: any = await postLogin(username.trim(), password, 60);
      if (res && res?.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", username.trim());
        localStorage.setItem("email", res.email);
        localStorage.setItem("refreshToken", res.token);

        dispatch({
          type: FETCH_USER_SUCCESS,
          data: {
            username: username.trim(),
            token: res.token,
            email: res.email,
          },
        });
        message.success("Login success");
      } else {
        // console.log("check res error: ", res);
        if (res && res.status === 400) {
          message.error(res.data.message);
        }
        dispatch({ type: FETCH_USER_ERROR });
      }
    }
  };
};

export const handleLogoutRedux = (): ThunkResult<void> => {
  return (dispatch, getState) => {
    dispatch({
      type: USER_LOGOUT,
    });
  };
};

export const handleRefresh = (expiresInMins: number): ThunkResult<void> => {
  return async (dispatch, getState) => {
    let res: any = await CallRefreshToken(expiresInMins);
    // console.log(refreshToken);
    if (res && res?.token) {
      localStorage.setItem("token", res.token);
      dispatch({
        type: USER_REFRESH,
        data: {
          token: res.token,
        },
      });
    } else {
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
      dispatch({ type: FETCH_USER_ERROR });
    }
  };
};

export const getCurrentUser = (): ThunkResult<void> => {
  return async (dispatch, getState) => {
    try {
      // let data = await CallCurrentAuth();
      // console.log(1, data);

      dispatch({
        type: SET_CURRENT_USER,
        // data: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateUserEmail = (newEmail: any) => ({
  type: UPDATE_USER_EMAIL,
  data: newEmail,
});
// export const login = (
//   username: string,
//   password: string,
//   rememberMe: boolean,
//   expiresInMins: number
// ): ThunkResult<void> => {
//   return async (dispatch) => {
//     try {
//       const response = await postLogin(username, password, expiresInMins);
//       // console.log(response.data.token);

//       localStorage.setItem("token", response.data.token);
//       dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
//     } catch (error: any) {
//       dispatch({ type: "LOGIN_ERROR", error: error.response.data.message });
//     }
//   };
// };

// export const refreshAccessToken = (): ThunkResult<void> => {
//   return async (dispatch, getState) => {
//     // const { auth } = getState();
//     try {
//       const response = await CallRefreshToken(2);
//       console.log("check refresh:", response);

//       localStorage.setItem("token", response.data.token);

//       dispatch({ type: "REFRESH_TOKEN_SUCCESS", payload: response.data });
//     } catch (error: any) {
//       dispatch({
//         type: "REFRESH_TOKEN_ERROR",
//         error: error.response.data.message,
//       });
//     }
//   };
// };

// export const fetchUser = (): ThunkResult<void> => {
//   return async (dispatch, getState) => {
//     // const { auth } = getState();
//     try {
//       const response = await CallCurrentAuth();
//       dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
//     } catch (error: any) {
//       dispatch({
//         type: "FETCH_USER_ERROR",
//         error: error.response.data.message,
//       });
//     }
//   };
// };
