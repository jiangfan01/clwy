import request from "@/utils/request";

// 列表
export function CarList() {
  return request({
    url: `/carts`,
    method: "get",
  });
}

// 添加
export function CarAdd(data) {
  return request({
    url: `/carts`,
    method: "post",
    data,
  });
}

// 修改
export function CarEdit(id, data) {
  return request({
    url: `/carts/${id}`,
    method: "put",
    data,
  });
}

// 删除
export function CarDelete(id) {
  return request({
    url: `/carts/${id}`,
    method: "delete",
  });
}
