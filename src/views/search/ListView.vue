<template>
  <div id="wrapper">
    <div class="page-search" data-log="搜索页">
      <div class="header">
        <div class="left">
          <router-link :to="{ name: 'home' }" class="home">
            <span class="icon-home icon"></span>
          </router-link>
        </div>
        <div class="tit">
          <div class="searchword">
            <input autofocus="autofocus" v-model="searchParams.name" />
          </div>
        </div>
        <div class="searchlabel" @click="init">
          <a>
            <span class="icon icon-search"></span>
          </a>
        </div>
      </div>
      <div>
        <ul class="list-default">
          <li class="top"><span>长乐未央手机5</span></li>
          <li class="top"><span>曲面电视</span></li>
          <li class="top"><span>智能电饭煲</span></li>
          <li><span>平衡车</span></li>
          <li><span>红米3 高配版</span></li>
          <li><span>长乐未央Note</span></li>
          <li><span>长乐未央4c</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { search } from "@/api/search";
export default {
  data() {
    return {
      searchParams: {
        name: "",
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const res = await search(this.searchParams);
      if (res.code !== 20000) {
        alert(res.message);
      }
      if (this.searchParams.name !== "") {
        this.$router.push({
          name: "searchList",
          query: { searchParams: this.searchParams.name },
        });
      }
    },
  },
};
</script>
