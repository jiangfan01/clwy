<template>
  <div id="wrapper">
    <div class="page-product-view" data-log="商品详情">
      <div class="product-view">
        <div class="mt20" style="display: none"></div>
        <ul class="b3" style="display: none">
          <li><span>通用</span></li>
        </ul>
        <div class="b5">
          <div class="b51"></div>
          <div class="b52">
            <div class="blc" v-html="Show.body"></div>
          </div>
        </div>
      </div>
      <div class="share-component"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["Show"],
};
</script>
