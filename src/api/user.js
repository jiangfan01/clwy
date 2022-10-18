import request from "@/utils/request";

export function user(params) {
  return request({
    url: "/users/me",
    method: "get",
    params,
  });
}
