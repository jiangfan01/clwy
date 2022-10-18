import request from "@/utils/request";

// 收货列表
export function AddressesList() {
  return request({
    url: `/addresses`,
    method: "get",
  });
}

// 收货单条
export function Addresses(id) {
  return request({
    url: `/addresses/${id}`,
    method: "get",
  });
}

// 新增
export function AddAddresses() {
  return request({
    url: `/addresses`,
    method: "post",
  });
}

// 修改
export function EditAddresses() {
  return request({
    url: `/addresses`,
    method: "put",
  });
}

// 修改
export function DeleteAddresses(id) {
  return request({
    url: `/addresses/${id}`,
    method: "delete",
  });
}
