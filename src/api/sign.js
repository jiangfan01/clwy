import request from "@/utils/request";

// 登录
export function SignIn(data) {
  return request({
    url: `/auth/sign_in`,
    method: "post",
    data,
  });
}

// 注册
export function SignUp(data) {
  return request({
    url: `/auth/sign_up`,
    method: "post",
    data,
  });
}
