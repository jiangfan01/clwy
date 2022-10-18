<template>
  <div id="wrapper">
    <div class="page-index" id="home" data-log="首页">
      <Search />

      <!--焦点图-->
      <Side :slides="slides" />
      <!--banner模块-->
      <Banner :banners="banners" />
      <!--推荐商品-->
      <Recomend :products="recommends" />
      <Footer />
    </div>
  </div>
</template>

<script>
import { fetchHomeList } from "@/api/home";
import FooterComponents from "@/components/FooterComponents";
import SideComponents from "@/components/home/SideComponents";
import RecomendComponents from "@/components/home/RecomendComponents";
import BannersComponents from "@/components/home/BannersComponents";
import SearchComponents from "@/components/SearchComponents";
export default {
  components: {
    Footer: FooterComponents,
    Side: SideComponents,
    Recomend: RecomendComponents,
    Banner: BannersComponents,
    Search: SearchComponents,
  },
  data() {
    return {
      slides: [],
      banners: [],
      recommends: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await fetchHomeList();
      this.slides = res.data.slides;
      this.banners = res.data.banners;
      this.recommends = res.data.recommends;
    },
  },
};
</script>
