
// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://dummyjson.com",
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//   },
//   timeout: 3000
// });

// instance.interceptors.request.use(
//   (config: any) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
//       config.headers["Authorization"] = `Bearer ${token}`; // for Node.js Express back-end
//       // config.headers["Content-Type"] = `application/json`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   async (res) => {
//     if(!res?.data?.token) {
//       const rs = await instance.post("/auth/refresh", {
//         expiresInMins: 5,
//       });
//       return rs
//     }
//     return res?.data ? res?.data : { statusCode: res?.status };
//   },


//   async (err) => {
//     let res: any = {};
//     const originalConfig = err?.config;

//     if (err?.response) {
//       res.data = err.response.data;
//       res.status = err.response.status;
//       res.headers = err.response.headers;
//       //  Access Token was expired
//       if (
//         originalConfig?.url !== "/auth/refresh" &&
//         res?.status === 401 &&
//         !originalConfig?._retry
//       ) {
//         originalConfig._retry = true;
//         try {
//           const rs = await instance.post("/auth/refresh", {
//             expiresInMins: 5,
//           });

//           if (rs.status === 401) {
//             localStorage.clear();
//             window.location.href = "/login";
//             return Promise.reject(rs?.data);
//           }

//           const { token } = rs?.data;
//           if (token) {
//             localStorage.setItem("token", token);
//           }

//           return instance(originalConfig);
//         } catch (_error) {
//           localStorage.clear();
//           window.location.href = "/login";
//           return Promise.reject(_error);
//         }
//       }
//     }
//     // console.log("check status: ", res);

//     // return Promise.reject(err);
//     return res;
//   }
// );


//   //   async (error) => {
//   //     if (
//   //       error.config &&
//   //       error.response &&
//   //       +error.response.status === 401 &&
//   //       error.config.url !== "/auth/refresh" &&
//   //       !error.config.headers[NO_RETRY_HEADER]
//   //     ) {
//   //       let token: any = await handleRefresh(2);
//   //       error.config.headers[NO_RETRY_HEADER] = "true";
//   //       if (token) {
//   //         error.config.headers["Authorization"] = `Bearer ${token}`;
//   //         localStorage.setItem("token", token);
//   //         return instance.request(error.config);
//   //       }
//   //     }
//   //     if (
//   //       error.config &&
//   //       error.response &&
//   //       +error.response.status === 400 &&
//   //       error.config.url === "/auth/refresh"
//   //     ) {
//   //       const message =
//   //         error?.response?.data?.message ?? "Có lỗi xảy ra, vui lòng login.";
//   //       //dispatch redux action
//   //       // store.dispatch(setRefreshTokenAction({ status: true, message }));
//   //     }
//   //   }

// instance.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;

//     // Refresh token nếu nhận được mã lỗi 401 (Unauthorized)
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       await store.dispatch(refreshAccessToken());
//       return instance(originalRequest);
//     }

//     return Promise.reject(error);
//   }
// );

// const handleRefreshToken = async (): Promise<string | null> => {
//     return await mutex.runExclusive(async () => {
//         const res = await instance.get<AccessTokenResponse>('/auth/refresh');
//         if (res && res.data) return res.data.token;
//         else return null;
//     });
// };

// instance.interceptors.request.use(function (config: any) {
//     if (typeof window !== "undefined" && window && window.localStorage && window.localStorage.getItem('token')) {
//         config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
//     }
//     if (!config.headers.Accept && config.headers["Content-Type"]) {
//         config.headers.Accept = "application/json";
//         config.headers["Content-Type"] = "application/json; charset=utf-8";
//     }
//     return config;
// });

// /**
//  * Handle all responses. It is possible to add handlers
//  * for requests, but it is omitted here for brevity.
//  */
// instance.interceptors.response.use(
//     (res) => res.data,
//     async (error) => {
//         if (error.config && error.response
//             && +error.response.status === 401
//             && error.config.url !== '/auth/refresh'
//             && !error.config.headers[NO_RETRY_HEADER]
//         ) {
//             const access_token = await handleRefreshToken();
//             error.config.headers[NO_RETRY_HEADER] = 'true'
//             if (access_token) {
//                 error.config.headers['Authorization'] = `Bearer ${access_token}`;
//                 localStorage.setItem('token', access_token)
//                 return instance.request(error.config);
//             }
//         }

//         if (
//             error.config && error.response
//             && +error.response.status === 400
//             && error.config.url === '/auth/refresh'
//         ) {
//             const message = error?.response?.data?.message ?? "Có lỗi xảy ra, vui lòng login.";
//             //dispatch redux action
//             // store.dispatch(setRefreshTokenAction({ status: true, message }));
//         }

//         return error?.response?.data ?? Promise.reject(error);
//     }
// );

// instance.interceptors.request.use(
//     async (config: any) => {
//       const { token } = useSelector((state: any) => state.userAcc);;
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );


// // instance.interceptors.response.use(
// //   function (response: AxiosResponse<IUserData>) {
// //     // Any status code that lie within the range of 2xx cause this function to trigger
// //     // Do something with response data
// //     return response?.data ? response?.data : { statusCode: response?.status };
// //   },
// //   function (error) {
// //     // Any status codes that falls outside the range of 2xx cause this function to trigger
// //     // Do something with response error
// //     let res: any = {};
// //     if (error.response) {
// //       // The request was made and the server responded with a status code
// //       // that falls out of the range of 2xx
// //       res.data = error.response.data;
// //       res.status = error.response.status;
// //       res.headers = error.response.headers;
// //     } else if (error?.request) {
// //       // The request was made but no response was received
// //       // `error.request` is an instance of XMLHttpRequest in the browser
// //       // and an instance of http.ClientRequest in node.js
// //       console.log(error?.request);
// //     } else {
// //       // Something happened in setting up the request that triggered an Error
// //       console.log("Error", error?.message);
// //     }
// //     return res;
// //     // return Promise.reject(error);
// //   }
// // );
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
const logout = () => {
// const router = useNavigate();

  localStorage.removeItem("user");
  localStorage.removeItem("remember");
  // router("/login");
  // window.location.href = "/login";
};
const API_URL = "https://dummyjson.com/";
const Instance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  timeout: 2000,
});

Instance.interceptors.request.use(
  (config: any) => {
    // const now = Date.now();
    const token: any = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    } else {
      console.log("Token or expiration time not found");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Instance.interceptors.response.use(
  (response) => response?.data,
  async (error) => {
    const originalConfig = error.config;
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const refreshToken = localStorage.getItem("refreshToken") ;
    if (!refreshToken) {
      logout();
      return Promise.reject(error);
    }
    try {
      const response = await axios.post(
        `${API_URL}/auth/refresh`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        const data = response.data.data;
        localStorage.setItem("token", data.token);
        originalConfig.headers.Authorization = `Bearer ${data.token}`;
        return axios(originalConfig);
      } else {
        logout();
        return Promise.reject(error);
      }
    } catch (refreshError) {
      logout();
      return Promise.reject(refreshError);
    }
  }
);


export default Instance;
