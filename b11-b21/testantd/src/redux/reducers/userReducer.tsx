import {
  FETCH_USER_ERROR,
  FETCH_USER_LOGIN,
  FETCH_USER_SUCCESS,
  USER_LOGOUT,
  USER_REFRESH,
  SET_CURRENT_USER,
  UPDATE_USER_EMAIL,
} from "../actions/UserAction";

const INITIAL_STATE = {
  userAcc: {
    username: "",
    auth: null,
    token: "",
    email: "",
    refreshToken: "",
    rememberMe: null,
    status: 200,
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
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("username");      
      localStorage.removeItem("refreshToken");
      return {
        ...state,
        userAcc: {
          username: "",
          token: "",
          // auth: false,
          email: "",
          refreshToken: "",
        },
      };

    case USER_REFRESH:
      return {
        ...state,
        userAcc: {
          // username: action.data.username,
          token: action.data.token,
          auth: true,
        },
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        // currentUser: action.data,
        userAcc: {
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
          token: localStorage.getItem("token"),
          auth: true,
        },
      };
    case UPDATE_USER_EMAIL:
      return {
        ...state,
        userAcc: {
          ...state.userAcc,
          email: action.data,
        },
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
