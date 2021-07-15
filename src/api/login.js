import request from "../lib/axios/config";

export const Login = data => {
  return request({
    url: "api/login",
    data,
    method: "post"
  });
};
