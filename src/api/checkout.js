// 修改用户
import request from "@/utils/request";

export function checkout() {
  return request({
    url: `/orders/checkout`,
    method: "get",
  });
}
