import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  CustomResponse,
  GenericObjectInterface,
} from "@/utilities/commonInterface/commonInterface";

/* eslint-disable no-useless-catch */
let BASE_URL = "http://10.16.140.129:8001/";
// BASE_URL = "http://10.44.17.18:8001/";
// BASE_URL = 'http://10.44.22.83:8008/'
// BASE_URL = "http://localhost:8008/";
// if (process.env.DEV) {
//   // local porting
//   console.log(process.env, "server mode");
//   if (process.env.VITE_SERVER_MODE == SERVER_MODE.BOLT) {
//     // local porting
//     BASE_URL = "http://localhost:8011/";
//     // Inder IP
//     // BASE_URL = 'http://10.44.25.12:8008/'
//     // yutika IP
//     // BASE_URL = "http://10.44.21.18:8009/";
//   } else if (process.env.VITE_SERVER_MODE == SERVER_MODE.EC2) {
//     // EC2 prod
//     BASE_URL = "http://65.2.140.240:8011/";
//   } else {
//     BASE_URL = "http://localhost:8011/";
//     // yutika IP
//     // BASE_URL = "http://10.44.21.18:8009/";
//   }
// } else {
//   //   BASE_URL = 'http://10.44.17.18:8001/'
//   // local porting
//   BASE_URL = "http://localhost:8011/";
// }

const headersList = {
  Accept: "*/*",
  "Content-Type": "application/x-www-form-urlencoded",
};

const CONTENT_TYPES = {
  APPLICATION_JSON: "application/json",
  FORM_DATA: "multipart/form-data",
};

const API_END_POINTS = {
  SERVICES: "services/",
  BLOGS: "blogs/",
  LOGIN: "login/",
  LOGOUT: "logout/",
  SIGNUP: "register/",
};

const makeApiRequest = async <T>(
  method: AxiosRequestConfig["method"],
  headers: GenericObjectInterface,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  endPoint: string,
  baseUrl?: string
): Promise<AxiosResponse<T>> => {
  try {
    const requestURL = `${baseUrl ? baseUrl : BASE_URL}${endPoint}`;
    const response: AxiosResponse<T> = await axios({
      method: method,
      headers: headers,
      url: requestURL,
      data: data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const postData = async <T>(
  headers: GenericObjectInterface,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  endPoint: string,
  baseUrl?: string
): Promise<CustomResponse<T>> => {
  try {
    const response = await makeApiRequest<T>(
      "POST",
      headers,
      data,
      endPoint,
      baseUrl
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchData = async <T>(
  headers: GenericObjectInterface,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  endPoint: string,
  baseUrl: string | undefined = BASE_URL
): Promise<CustomResponse<T>> => {
  try {
    const response = await makeApiRequest<T>(
      "GET",
      headers,
      data,
      endPoint,
      baseUrl
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const patchData = async <T>(
  headers: GenericObjectInterface,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  endPoint: string,
  baseUrl?: string
): Promise<CustomResponse<T>> => {
  try {
    const response = await makeApiRequest<T>(
      "PATCH",
      headers,
      data,
      endPoint,
      baseUrl
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  BASE_URL,
  postData,
  fetchData,
  patchData,
  API_END_POINTS,
  headersList,
  CONTENT_TYPES,
};
