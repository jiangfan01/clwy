import request from "@/utils/request";

export function AliPay(data) {
  return request({
    url: "/alipay/pay",
    method: "post",
    data,
  });
}
