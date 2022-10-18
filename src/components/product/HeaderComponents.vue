<template>
  <div>
    <div class="b1">
      <img :src="product.image" />
    </div>
    <div class="b2">
      <div class="b21">
        <div class="b211">
          <div class="name">
            <p>{{ product.name }}</p>
          </div>
          <div class="price">
            <strong>{{ product.price }}元</strong>
          </div>
        </div>
        <div class="b212">
          <div class="icon-fenxiang"></div>
        </div>
      </div>
      <div class="b22"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
