<template>
  <div id="wrapper">
    <div class="page-personal-center" data-log="个人中心">
      <div class="b1">
        <div class="new_info">
          <div>
            <div class="name"></div>
            <div class="img">
              <img :src="user.avatar" />
            </div>
          </div>
        </div>
        <div class="new_nav">
          <ul>
            <li>
              <router-link :to="{ name: 'orderList' }">
                <div class="spr spr1"></div>
                <p>全部订单</p>
                <div class="line n"></div>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'orderList', query: { status: 'checked' } }"
              >
                <div class="spr spr2"></div>
                <p>待付款</p>
                <div class="line n"></div>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'orderList', query: { status: 'paid' } }"
              >
                <div class="spr spr3"></div>
                <p>待收货</p>
                <div class="line n"></div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <ol class="list">
        <li data-event="40000000100060005">
          <strong class="sprl ise"></strong><a>意见反馈</a>
        </li>
        <li data-event="40000000100060006">
          <strong class="sprl is"></strong
          ><router-link :to="{ name: 'addressEdit' }">地址管理</router-link>
        </li>
      </ol>
      <Footer />
    </div>
  </div>
</template>
<script>
import { user } from "@/api/user";
import FooterComponents from "@/components/FooterComponents";
export default {
  components: {
    Footer: FooterComponents,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await user();
      this.user = res.data.user;
    },
  },
};
</script>
