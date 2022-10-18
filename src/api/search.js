import request from "@/utils/request";

// 登录
export function search(params) {
  return request({
    url: `products`,
    method: "get",
    params,
  });
}
