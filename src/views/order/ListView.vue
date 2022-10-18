<template>
  <div class="page-my-order" data-log="我的订单">
    <div class="header">
      <div class="left">
        <a
          title="长乐未央商城"
          data-log="HEAD-首页"
          onclick="history.go(-1)"
          class="home"
          ><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"
        /></a>
      </div>
      <div class="tit">
        <h2 data-log="HEAD-标题-我的订单">
          <span class="title">我的订单</span>
        </h2>
      </div>
      <div class="right">
        <a href="/1/#/search/index">
          <div class="icon icon-search"></div>
        </a>
      </div>
    </div>
    <div class="order_list">
      <div class="ol-item" v-for="order in orders" :key="order.id">
        <div>
          <div class="oi1">
            <div class="oi11">
              <div class="oi111">
                <p>
                  <strong>订单日期：</strong
                  ><span>{{ order.createdAt | dateFormat }}</span>
                </p>
              </div>
              <div class="oi112">
                <p>
                  <strong>订单编号：</strong><span>{{ order.outTradeNo }}</span>
                </p>
              </div>
            </div>
            <div class="oi12">
              <p>{{ order.status | ordersMode }}</p>
            </div>
          </div>
          <div class="oi2">
            <ul>
              <li v-for="item in order.products" :key="item.id">
                <div class="oi21">
                  <div class="img">
                    <img :src="item.image" />
                  </div>
                </div>
                <div class="oi22">
                  <p>{{ item.name }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="oi3" v-for="item in order.products" :key="item.id">
            <p>
              <span>共{{ item.num }}件商品</span><span>总金额：</span
              ><strong>{{ item.price }}元</strong>
            </p>
          </div>
          <div class="oi4">
            <router-link
              :to="{ name: 'payShow', params: { id: order.id } }"
              class="org"
              >立即付款</router-link
            >
            <a href="javascript:;">取消订单</a>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import FooterComponents from "@/components/FooterComponents";
import { ordersList } from "@/api/order";

export default {
  components: {
    Footer: FooterComponents,
  },
  data() {
    return { orders: [], products: [], currentPage: 1, moreData: true };
  },
  created() {
    this.init();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听页面滚动
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  filters: {
    ordersMode(value) {
      //switch 写法
      // let result;
      // switch (value) {
      //   case 1:
      //     result = "待付款";
      //     break;
      //   case 2:
      //     result = "待发货";
      //     break;
      //   case 3:
      //     result = "配货中";
      //     break;
      //   case 4:
      //     result = "待收货";
      //     break;
      //   default:
      //     result = "已完成";
      // }
      // return result;

      const mode = ["待下单", "待付款", "待发货", "已发货", "交易完成"];
      return mode[value];
    },
  },
  methods: {
    async init() {
      if (!this.moreData) {
        return;
      }
      const res = await ordersList({
        currentPage: this.currentPage,
        status: this.$route.query.status,
      });
      if (res.data.orders.length !== 0) {
        this.orders = [...this.orders, ...res.data.orders];
      } else {
        this.moreData = false;
      }
    },

    async handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (Math.ceil(scrollTop + windowHeight) >= scrollHeight) {
        this.currentPage++;
        await this.init();
      }
    },
  },
};
</script>
