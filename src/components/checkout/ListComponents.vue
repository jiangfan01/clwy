<template>
  <div class="b8">
    <div class="b8w" v-for="item in carts" :key="item.id">
      <div class="b81">
        <div class="img">
          <img :src="item.product.image" />
        </div>
      </div>
      <div class="b82">
        <div class="name">
          <p>
            <span>{{ item.product.name }}</span>
          </p>
        </div>
      </div>
      <div class="b83">
        <div class="price">
          <strong>{{ item.product.price }}元</strong>
        </div>
      </div>
    </div>
    <!--v-repeat-cart.list-->
  </div>
</template>
<script>
export default {
  props: ["carts"],
};
</script>
