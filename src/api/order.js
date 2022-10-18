// 订单
import request from "@/utils/request";

//列表
export function ordersList(params) {
  return request({
    url: `/orders`,
    method: "get",
    params,
  });
}

//生成订单
export function orders(data) {
  return request({
    url: `/orders`,
    method: "post",
    data,
  });
}

//单条
export function orderPay(id) {
  return request({
    url: `/orders/${id}`,
    method: "get",
  });
}

//确认订单
export function checkoutOrder() {
  return request({
    url: `/orders/checkout`,
    method: "get",
  });
}
