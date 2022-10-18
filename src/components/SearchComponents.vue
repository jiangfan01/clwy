<template>
  <div class="index-header">
    <div class="search_bar">
      <router-link :to="{ name: 'search' }">
        <span class="icon icon-search"></span>
        <span class="text">搜索商品名称</span>
      </router-link>
    </div>
    <div class="search_bottom"></div>
  </div>
</template>
