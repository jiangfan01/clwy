<template>
  <div class="product-view">
    <div class="ui-b7">
      <h3>为您推荐</h3>
      <div class="ui-carousel-container">
        <div class="ui-carousel-viewport">
          <router-link
            v-for="recommend in recommends"
            :key="recommend.id"
            :to="{ name: 'productShow', params: { productId: recommend.id } }"
          >
            <img :src="recommend.image" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["recommends"],
};
</script>
