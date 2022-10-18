<template>
  <div class="cart-index-wrap">
    <div class="empt">
      <div class="b3">
        <a href="/1/#/product/category" class="ui-button ui-button-disable">
          <span>全部商品</span>
        </a>
        <a href="/1/#/index/recommend" class="ui-button">
          <span>精选商品</span>
        </a>
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
