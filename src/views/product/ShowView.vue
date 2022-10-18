<template>
  <div id="wrapper">
    <div class="page-product-view">
      <div class="product-view">
        <Header :product="product" />
        <Recommend :recommends="recommends" />
        <Show :Show="product" />
        <Buy />
      </div>
    </div>
  </div>
</template>
<script>
import ShowComponents from "@/components/product/ShowComponents";
import HeaderComponents from "@/components/product/HeaderComponents";
import RecommendComponents from "@/components/product/RecommendComponents";
import BuyComponents from "@/components/product/BuyComponents";
import { Product } from "@/api/product";

export default {
  components: {
    Show: ShowComponents,
    Header: HeaderComponents,
    Recommend: RecommendComponents,
    Buy: BuyComponents,
  },
  data() {
    return {
      product: {},
      recommends: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await Product(this.$route.params.productId);
      this.product = res.data.product;
      this.recommends = res.data.recommends;
    },
  },
  watch: {
    "$route.params.productId"() {
      this.init();
    },
  },
};
</script>
