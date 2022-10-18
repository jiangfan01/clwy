<template>
  <div id="wrapper">
    <div class="page-order-view" data-log="订单详情">
      <div class="page-order-view-wrap">
        <div>
          <div class="b1">
            <div class="b11">
              <p>
                <strong>订单编号：</strong><span>{{ order.outTradeNo }}</span>
              </p>
            </div>
            <div class="b11">
              <p>
                <strong>订单状态：</strong
                ><span>
                  {{ order.status | ordersMode }}
                </span>
              </p>
            </div>
          </div>
          <div class="ui_line"></div>
          <div class="b1">
            <div class="b12">
              <ul>
                <li class="done">
                  <div class="mark"><p>下单</p></div>
                  <div class="time">
                    <p>{{ order.createdAt | dateFormat }}</p>
                  </div>
                </li>
                <li class="done">
                  <div class="mark"><p>付款</p></div>
                  <div class="time">
                    <p>{{ order.paidAt | dateFormat }}</p>
                  </div>
                </li>
                <li class="done">
                  <div class="mark"><p>配货</p></div>
                  <div class="time">
                    <p>{{ order.createdAt | dateFormat }}</p>
                  </div>
                </li>
                <li class="done">
                  <div class="mark"><p>出库</p></div>
                  <div class="time">
                    <p>{{ order.createdAt | dateFormat }}</p>
                  </div>
                </li>
                <li class="done">
                  <div class="mark"><p>交易成功</p></div>
                  <div class="time">
                    <p>{{ order.createdAt | dateFormat }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--          <div class="b8">-->
          <!--            <div>-->
          <!--              <div class="b81">-->
          <!--                <p>-->
          <!--                  <strong>物流信息：</strong><span>{{ express.name }}</span-->
          <!--                  ><span>{{ express.num }}</span>-->
          <!--                </p>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="ui_line"></div>
          <div class="b3">
            <ul>
              <li v-for="product in products" :key="product.id">
                <div class="ui-box">
                  <div class="img">
                    <img :src="product.image" />
                  </div>
                  <div class="ui-box-flex">
                    <div class="name">
                      <p>{{ product.name }}</p>
                    </div>
                    <div class="price">
                      <p>
                        <strong>{{ product.price * product.num }}元</strong>
                        <span>售价：</span>
                        <span>{{ product.price }}元</span>
                        <span>x{{ product.num }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="ui_line"></div>
        </div>
        <div>
          <div class="b4">
            <ul>
              <li>
                <strong>下单日期：</strong><span>{{ order.paidAt }}</span>
              </li>
              <li class="address">
                <div><strong>收货地址：</strong></div>
                <div class="info">
                  <span>{{ address.province }}</span
                  ><span>{{ address.city }}</span
                  ><span>{{ address.area }}</span
                  ><span>{{ address.detail }}</span>
                </div>
              </li>
              <li>
                <strong>收货人名：</strong><span>{{ address.name }} </span
                ><span class="tel">{{ address.tel }}</span>
              </li>
              <li><strong>发票抬头：</strong><span>个人</span></li>
            </ul>
          </div>
          <div class="ui_line"></div>
          <div class="b5">
            <div class="b51">
              <p>
                <strong>商品价格：</strong
                ><strong>{{ order.totalPrice }}元</strong>
              </p>
            </div>
            <div class="b51">
              <p><strong>配送费用：</strong><strong>0元</strong></p>
            </div>
            <div class="b52">
              <p>
                <strong>应付总额：</strong
                ><strong>{{ order.totalPrice }}元</strong>
              </p>
            </div>
          </div>
          <div class="b7">
            <div class="ui-box">
              <div class="ui-box-flex price">
                <p>
                  <span>应付总额：</span><br />
                  <strong>{{ order.totalPrice }}元</strong>
                </p>
              </div>
              <div class="ui-box-flex">
                <a href="javascript:;" class="ui-button ui-button-gray"
                  ><span>取消订单</span></a
                >
              </div>
              <div class="ui-box-flex">
                <a href="javascript:;" class="ui-button"
                  ><span>立即支付</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { orderPay } from "@/api/order";

export default {
  data() {
    return {
      order: {},
      address: {},
      products: {},
      express: {},
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await orderPay(this.$route.params.id);
      this.order = res.data.order;
      this.address = res.data.order.address;
      this.products = res.data.order.products;
      this.express = res.data.order.express;
    },
  },
  filters: {
    ordersMode(value) {
      //switch 写法
      let result;
      switch (value) {
        case 1:
          result = "待付款";
          break;
        case 2:
          result = "待发货";
          break;
        case 3:
          result = "配货中";
          break;
        case 4:
          result = "待收货";
          break;
        default:
          result = "已完成";
      }
      return result;

      // const mode = ["待付款", "待发货", "配货中", "待收货", "已完成"];
      // return mode[value - 1];
    },
  },
};
</script>
<style scoped lang="scss">
.not-straus {
  background: gray;
}
</style>
