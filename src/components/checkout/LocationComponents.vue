<template>
  <div class="b1 icon_arrow">
    <div class="b11">
      <router-link :to="{ name: 'addressList' }">
        <p>
          <span>{{ location.name }}</span
          ><span>{{ location.tel }}</span>
        </p>
      </router-link>
    </div>
    <div class="b13">
      <p>
        {{ location.province }} {{ location.city }} {{ location.area }}
        {{ location.detail }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["location"],
};
</script>
