<template>
  <div class="section">
    <div class="mcells_auto_fill">
      <div class="body">
        <div v-for="banner in banners" :key="banner.id">
          <div class="items">
            <img :src="banner.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["banners"],
};
</script>
