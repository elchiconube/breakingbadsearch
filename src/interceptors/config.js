import axiosMiddleware from "redux-axios-middleware";
import * as axios from "axios";
import { STATUS_CODE, PROXY } from "../utils/constants";

const middlewareConfig = {
  interceptors: {
    request: [
      {
        success: function ({ getState, dispatch, getSourceAction }, config) {
          return config;
        },
        error: function ({ getState, dispatch, getSourceAction }, error) {
          return Promise.reject(error);
        },
      },
    ],
    response: [
      {
        success: function ({ getState, dispatch, getSourceAction }, res) {
          return Promise.resolve(res);
        },
        error: function ({ getState, dispatch, getSourceAction }, request) {
          let result = request;
          const { response: { status } = {} } = request;

          if (status === STATUS_CODE.UNAUTHORIZED) console.log("error");

          switch (true) {
            case status === STATUS_CODE.BAD_REQUEST:
              result = {
                ...result,
                meta: {
                  code: STATUS_CODE.BAD_REQUEST,
                  message: `errors.generic.${STATUS_CODE.BAD_REQUEST}`,
                },
              };
              break;
            case status === STATUS_CODE.NOT_FOUND:
              result = {
                ...result,
                meta: {
                  code: STATUS_CODE.NOT_FOUND,
                  message: `errors.generic.${STATUS_CODE.NOT_FOUND}`,
                },
              };
              break;
            case status === STATUS_CODE.UNAUTHORIZED:
              result = {
                ...result,
                meta: {
                  code: STATUS_CODE.UNAUTHORIZED,
                  message: `errors.generic.${STATUS_CODE.UNAUTHORIZED}`,
                },
              };
              break;
            case /^5\d{2}$/.test(String(status)):
              result = {
                ...result,
                meta: {
                  code: STATUS_CODE.INTERNAL_SERVER_ERROR,
                  message: `errors.generic.${STATUS_CODE.INTERNAL_SERVER_ERROR}`,
                },
              };
              break;
            default:
              result = {
                ...result,
                response: request.response || {},
                request: request.response || {},
                meta: {
                  code: STATUS_CODE.NETWORK,
                  message: `errors.generic.${STATUS_CODE.NETWORK}`,
                },
              };
          }
          return Promise.reject(result);
        },
      },
    ],
  },
};

const apiClient = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
  responseType: "json",
});

const httpClientMiddleware = () => axiosMiddleware(apiClient, middlewareConfig);

export default httpClientMiddleware;
