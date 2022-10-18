import request from "@/utils/request";

// 收货列表
export function AddressesList() {
  return request({
    url: `/addresses`,
    method: "get",
  });
}

// 编辑
export function AddressesEdit(id, data) {
  return request({
    url: `/addresses/${id}`,
    method: "put",
    data,
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
export function CreateAddresses(data) {
  return request({
    url: `/addresses`,
    method: "post",
    data,
  });
}

// 删除
export function DeleteAddresses(id) {
  return request({
    url: `/addresses/${id}`,
    method: "delete",
  });
}

// 修改默认用户
export function EditAddress(id) {
  return request({
    url: `/addresses/${id}/set_default`,
    method: "put",
  });
}
