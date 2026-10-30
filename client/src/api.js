import axios from "axios";

export const api = axios.create({
  // Removes a trailing slash, if present: http://localhost:5000/ → http://localhost:5000
  baseURL: (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
  responseType: "json",
  transitional: {
    silentJSONParsing: false,
  },
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error),
// );

export async function apiRequest(path, options = {}) {
  const { token, body, headers, ...requestOptions } = options;
  const requestHeaders = new axios.AxiosHeaders(headers);

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  const response = await api.request({
    ...requestOptions,
    url: path,
    headers: requestHeaders,
    data: body,
  });

  return response.status === 204 ? null : response.data;
}
