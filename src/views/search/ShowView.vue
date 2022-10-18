<template>
  <div id="wrapper">
    <div class="page-list" data-log="商品列表">
      <ol class="version">
        <li v-for="item in products" :key="item.id">
          <a class="version-item" href="/1/#/product/view?product_id=3280">
            <div class="version-item-img">
              <img :src="item.image" />
            </div>
            <div class="version-item-intro">
              <div class="version-item-name">
                <p>{{ item.name }}</p>
              </div>
              <div class="version-item-intro-price">
                <span>{{ item.price }}元</span>
              </div>
            </div>
          </a>
        </li>
      </ol>
    </div>
    <Footer />
  </div>
</template>
<script>
import FooterComponents from "@/components/FooterComponents";
import { search } from "@/api/search";

export default {
  components: {
    Footer: FooterComponents,
  },
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
      const res = await search({ name: this.$route.query.searchParams });
      this.products = res.data.products;
    },
  },
};
</script>
