<template>
  <div class="list">
    <div class="section" v-for="product in products" :key="product.id">
      <div>
        <div class="item">
          <router-link
            :to="{ name: 'productShow', params: { productId: product.id } }"
          >
            <div class="img">
              <img class="ico" :src="product.image" />
              <img
                class="tag"
                src="http://c1.mifile.cn/f/i/f/mishop/iic/xp.png"
              />
            </div>
          </router-link>
          <div class="info">
            <div class="name">
              <p>{{ product.name }}</p>
            </div>
            <div class="brief">
              <p></p>
            </div>
            <div class="price">
              <p>{{ product.price }}元 起</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products"],
};
</script>
