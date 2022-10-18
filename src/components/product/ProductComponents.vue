<template>
  <div class="page-list" data-log="商品列表">
    <ol class="version">
      <li v-for="product in products" :key="product.id">
        <router-link
          :to="{ name: 'productShow', params: { productId: product.id } }"
          class="version-item"
        >
          <div class="version-item-img">
            <img :src="product.image" />
          </div>
          <div class="version-item-intro">
            <div class="version-item-name">
              <p>{{ product.name }}</p>
            </div>
            <div class="version-item-intro-price">
              <span>{{ product.price }}元</span>
            </div>
          </div>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>
