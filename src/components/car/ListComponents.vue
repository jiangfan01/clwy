<template>
  <div class="cart-list">
    <ul>
      <li class="item" v-for="item in carts" :key="item.id">
        <div class="ui-box">
          <div class="imgProduct">
            <router-link
              :to="{
                name: 'productShow',
                params: { productId: item.product.id },
              }"
            >
              <img :src="item.product.image"
            /></router-link>
          </div>
          <div class="info ui-box-flex">
            <div class="name">
              <span>{{ item.product.name }}</span>
            </div>
            <div class="price">
              <p>
                <span>售价：</span><span>{{ item.product.price }}元</span>
                <span>合计：</span
                ><span>{{ item.product.price * item.num }}元</span>
              </p>
            </div>
            <div class="num">
              <div class="xm-input-number">
                <div
                  class="input-sub"
                  @click="changeNum({ id: item.id, type: 'dec' })"
                ></div>
                <div class="input-num">
                  <span>{{ item.num }}</span>
                </div>
                <div
                  class="input-add active"
                  @click="changeNum({ id: item.id, type: 'inc' })"
                ></div>
              </div>
              <div class="delete">
                <a href="javascript:;">
                  <span
                    class="icon-iconfontshanchu"
                    @click="product_delete({ id: item.id })"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="append"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: mapState({
    carts: (state) => state.carts.all,
  }),
  methods: {
    ...mapActions("carts", ["changeNum", "product_delete"]),
  },
};
</script>
