import request from "@/utils/request";

// 查询列表
export function fetchHomeList(params) {
  return request({
    url: "https://api.shop.clwy.cn",
    method: "get",
    params,
  });
}
