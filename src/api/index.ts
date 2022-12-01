import type { AxiosError } from "axios";
import axios from "axios";
import queryString from "query-string";
import { REACT_APP_API_HOST, LocalStorageKeys } from "../constants";
import { IAPIErrorResponseBody } from "./types";

export const getUrl = (
  path: string,
  queryParams: { [key: string]: unknown } = {}
): string => {
  const search = queryString.stringify(queryParams);

  return `${path}${search ? `?${search}` : ""}`;
};

export const processApiResponseError = (
  error: AxiosError<IAPIErrorResponseBody>,
  defaultErrorMessage = "Oops! Something went wrong. Please try again later.",
  additionMessage = ""
) => {
  const { response } = error;
  let errorMessage = response?.data?.message || defaultErrorMessage;

  if (additionMessage) {
    errorMessage += `\n\n${additionMessage}`;
  }

  // eslint-disable-next-line no-param-reassign
  error.message = errorMessage;

  throw error;
};

const requestApi = axios.create({
  baseURL: REACT_APP_API_HOST,
  headers: {
    common: {
      Accept: "application/json",
      ["api-key"]: "67ae7302-42a1-40d6-b9be-778b0285b99a",
      ["Content-Type"]: "application/json charset=utf-8",
      Authorization: `Bearer ${localStorage.getItem(
        LocalStorageKeys.accessToken
      )}`,
    },
  },
});

requestApi.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

requestApi.interceptors.response.use(
  (response) => response,
  (error) => {
    processApiResponseError(error);

    return Promise.reject(error);
  }
);

export default requestApi;
