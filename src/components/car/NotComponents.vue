<template>
  <div class="cart-index-wrap">
    <div class="empt">
      <div class="b3">
        <router-link :to="{ name: 'home' }" class="ui-button ui-button-disable">
          <span>全部商品</span>
        </router-link>
        <router-link :to="{ name: 'home' }" class="ui-button">
          <span>精选商品</span>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import FooterComponents from "@/components/FooterComponents";
export default {
  components: {
    Footer: FooterComponents,
  },
};
</script>
