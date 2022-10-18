<template>
  <div class="wrapper">
    <div class="wrap">
      <div class="layout_panel">
        <div class="layout" id="layout">
          <div id="main-content">
            <div class="mainbox form-panel" id="login-main">
              <div class="lgnheader">
                <div class="header_tit t_c">
                  <em id="custom_display_1" class="milogo"></em>
                  <h4 class="header_tit_txt" id="login-title">
                    长乐未央帐号注册
                  </h4>
                </div>
              </div>

              <div class="tabs-con tabs_con now" data-con="pwd">
                <div>
                  <div class="login_area" id="login-main-form">
                    <div class="loginbox c_b">
                      <div
                        class="lgn_inputbg c_b login-panel pwdLogin sms_login"
                      >
                        <!--验证用户名-->
                        <label
                          class="labelbox login_user c_b disable add_regioncode"
                          for="username"
                        >
                          <input
                            class="item_account"
                            autocomplete="off"
                            name="username"
                            id="username"
                            placeholder="用户名"
                            v-model="user.username"
                          />
                        </label>

                        <div
                          class="err_tip"
                          :class="{ show: validate.username.error }"
                        >
                          <div>
                            <em class="icon_error"></em
                            ><span class="error-con">请输入用户名</span>
                          </div>
                        </div>

                        <label
                          class="labelbox login_user c_b disable add_regioncode"
                          for="password"
                        >
                          <input
                            class="item_account"
                            autocomplete="off"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="密码"
                            v-model="user.password"
                          />
                        </label>

                        <div
                          class="err_tip"
                          :class="{ show: validate.username.error }"
                        >
                          <div>
                            <em class="icon_error"></em
                            ><span class="error-con">请输入密码</span>
                          </div>
                        </div>

                        <label class="labelbox pwd_panel c_b">
                          <input
                            class="item_account"
                            type="text"
                            placeholder="图形验证码"
                            autocomplete="off"
                            id="captcha_code"
                            name="captcha_code"
                          />
                          <div class="code_panel" style="display: block">
                            <img
                              src="assets/images/captcha_code.png"
                              alt=""
                              class="captcha_code"
                            />
                          </div>
                        </label>
                      </div>
                      <div class="btns_bg">
                        <input
                          class="btnadpt"
                          id="login-button"
                          type="button"
                          value="立即注册"
                          @click="init"
                        />
                      </div>
                      <div class="other_panel clearfix">
                        <div class="reverse" id="extra-links">
                          <div
                            class="n_links_area reg_forget_links reg-forget-links"
                            id="custom_display_64"
                          >
                            <router-link
                              :to="{ name: 'SignIn' }"
                              class="outer-link"
                              >已有账号，立即登录
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SignUp } from "@/api/sign";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      validate: {
        username: {
          error: false,
          message: "",
        },
      },
    };
  },
  methods: {
    async init() {
      if (this.user.username === "") {
        this.validate.username.error = true;
        this.validate.username.message = "用户不能为空";
        return;
      }
      const res = await SignUp(this.user);
      this.user = res.data.user;
      if (res.code !== 20000) {
        alert(res.message);
        return;
      }
      this.$router.push({ name: "SignIn" });
    },
  },
};
</script>
<style scoped lang="scss">
.show {
  display: block;
}
</style>
