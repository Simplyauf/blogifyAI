import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

export const contentType = "application/json";

export default function http() {
  const cookie = Cookies.get();
  console.log(cookie?.accessToken);

  const http = axios.create({
    baseURL: "https://api.blogifyai.com/api/",
    headers: {
      Accept: contentType,
      Authorization: "Bearer " + cookie?.accessToken,
    },
  });

  return new Proxy(http, {
    get<T>(target: AxiosInstance, key: string) {
      return (...args: any[]) => {
        const [url, config] = args;

        const absoluteUrl = url.startsWith("http")
          ? url
          : `${http.defaults.baseURL}${url}`;
        return http
          .request<T>({
            url: absoluteUrl,
            method: key.toUpperCase(),
            data: { ...config },
          })
          .then((response) => response);
      };
    },
  });
}
