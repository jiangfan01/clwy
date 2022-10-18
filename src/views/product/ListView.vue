<template>
  <div id="wrapper">
    <Product :products="products" />
    <Footer />
  </div>
</template>
<script>
import FooterComponents from "@/components/FooterComponents";
import ProductComponents from "@/components/product/ProductComponents";
import { fetchCategory } from "@/api/category";

export default {
  components: { Footer: FooterComponents, Product: ProductComponents },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await fetchCategory(this.$route.params.id);
      this.products = res.data.products;
    },
  },
};
</script>
