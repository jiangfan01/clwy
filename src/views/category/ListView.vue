<template>
  <div>
    <Category :products="categories" />
    <Footer />
  </div>
</template>
<script>
import FooterComponents from "@/components/FooterComponents";
import CategoryComponents from "@/components/category/CategoryComponents";
import { fetchCategoryList } from "@/api/category";
export default {
  components: {
    Footer: FooterComponents,
    Category: CategoryComponents,
  },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await fetchCategoryList();
      this.categories = res.data.categories;
    },
  },
};
</script>
