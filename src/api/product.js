import request from "@/utils/request";

// 查询列表
export function Product(id) {
  return request({
    url: `/products/${id}`,
    method: "get",
  });
}
