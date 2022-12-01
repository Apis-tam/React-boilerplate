export const { REACT_APP_API_HOST } = process.env;

export const HEADER_FORM_DATA = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export enum LocalStorageKeys {
  accessToken = "accessToken",
}
