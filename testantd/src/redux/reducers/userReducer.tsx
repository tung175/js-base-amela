import {
  FETCH_USER_ERROR,
  FETCH_USER_LOGIN,
  FETCH_USER_SUCCESS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REFRESH,
  SET_CURRENT_USER,
} from "../actions/UserAction";

const INITIAL_STATE = {
  userAcc: {
    username: "",
    auth: null,
    token: "",
    email: "",
    refreshToken: "",
    rememberMe: null
  },
  // userAcc: {
  //   username: "",
  //   email: "",
  //   token: "",
  //   refreshToken: null,
  //   user: null,
  //   error: null,
  //   auth: null,
  // },
  isLoading: false,
  isError: false,
};

const UserReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userAcc: {
          username: action.data.username,
          email: action.data.email,
          token: action.data.token,
          rememberMe: action.data.rememberMe,
          auth: true,
        },
        isLoading: false,
        isError: false,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        userAcc: {
          auth: false,
        },
        isLoading: false,
        isError: true,
      };
    case USER_LOGOUT:
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        userAcc: {
          username: "",
          token: "",
          auth: false,
          email: "",
          refreshToken: "",
        },
      };

    case USER_REFRESH:
      return {
        ...state,
        userAcc: {
          token: action.data.token,
          auth: true,
        },
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

// const UserReducer = (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//     case "REFRESH_TOKEN_SUCCESS":
//       return {
//         ...state,
//         userAcc: {
//           username: action.payload.username,
//           email: action.payload.email,
//           token: action.payload.token,
//           // rememberMe: action.data.rememberMe,
//           refreshToken: action.payload.refreshToken,
//           auth: true,
//         },
//       };
//     case "LOGIN_ERROR":
//     case "REFRESH_TOKEN_ERROR":
//       return {
//         ...state,
//         userAcc: {
//           ...state.userAcc,
//           error: action.error,
//         }
//       };
//     case "FETCH_USER_SUCCESS":
//       return {
//         ...state,
//         userAcc: {
//           ...state.userAcc,
//           user: action.payload,
//           error: null,
//         },
//       };
//     case "FETCH_USER_ERROR":
//       return {
//         ...state,
//         userAcc: {
//           ...state.userAcc,
//           user: null,
//           error: action.error,
//         },
//       };
//     default:
//       return state;
//   }
// };

export default UserReducer;
