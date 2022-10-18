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
                    长乐未央帐号登录
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
                        <label
                          id="region-code"
                          class="labelbox login_user c_b disable add_regioncode"
                          for=""
                        >
                          <input
                            class="item_account"
                            autocomplete="off"
                            name="user"
                            id="username"
                            placeholder="账号"
                            v-model="user.username"
                          />
                        </label>

                        <label class="labelbox pwd_panel c_b">
                          <input
                            class="item_account"
                            type="number"
                            placeholder="密码"
                            autocomplete="off"
                            id="pwd"
                            name="password"
                            _type="number"
                            v-model="user.password"
                          />

                          <div
                            id="sms-code-panel"
                            class="code_panel"
                            style="display: block"
                          >
                            <a
                              class="send_ticket"
                              href="javascript:;"
                              id="getSMSCode"
                              >获取验证码</a
                            >
                          </div>
                        </label>
                      </div>

                      <div class="btns_bg">
                        <input
                          class="btnadpt"
                          id="login-button"
                          type="button"
                          value="立即登录"
                          @click="init"
                        />
                      </div>
                      <div class="other_panel clearfix">
                        <span id="custom_display_256" class="sms_link">
                          <a
                            href="javascript:;"
                            class="btnadpt btn_gray login_type_link"
                            id="ChangeLoginType"
                            >用户名密码登录</a
                          >
                        </span>
                        <div class="reverse" id="extra-links">
                          <div
                            class="n_links_area reg_forget_links reg-forget-links"
                            id="custom_display_64"
                          >
                            <router-link
                              :to="{ name: 'SignUp' }"
                              class="outer-link"
                            >
                              还没有账号，现在注册
                            </router-link>
                          </div>
                        </div>
                        <div
                          class="other_login_type sns-login-container"
                          id="custom_display_16"
                        >
                          <fieldset class="oth_type_tit">
                            <legend align="center" class="oth_type_txt">
                              其他方式登录
                            </legend>
                          </fieldset>
                          <div id="sns-login-links" class="oth_type_links">
                            <a
                              class="icon_type btn_qq sns-login-link"
                              data-type="qq"
                              href="/pass/sns/login/auth?appid=100284651&amp;&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go"
                              title="QQ登录"
                              target="_blank"
                            >
                              <i class="btn_sns_icontype icon_default_qq"></i>
                            </a>
                            <a
                              class="icon_type btn_weixin sns-login-link"
                              data-type="weixin"
                              href="/pass/sns/login/auth?appid=wxxmh5&amp;scope=snsapi_userinfo&amp;callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go"
                              title="微信登录"
                              target="_blank"
                            >
                              <i
                                class="btn_sns_icontype icon_default_weixin"
                              ></i>
                            </a>
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
import { SignIn } from "@/api/sign";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async init() {
      const res = await SignIn(this.user);
      if (res.code !== 20000) {
        alert(res.message);
        return;
      }
      localStorage.token = res.data.token;
      this.$router.push({ name: "home" });
    },
  },
};
</script>
