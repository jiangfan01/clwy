import request from "@/utils/request";

// 查询列表
export function fetchCategoryList(params) {
  return request({
    url: "/categories",
    method: "get",
    params,
  });
}

// 当前分类对应的商品
export function fetchCategory(id) {
  return request({
    url: `/categories/${id}`,
    method: "get",
  });
}
