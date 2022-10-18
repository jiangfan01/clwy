<template>
  <div id="wrapper">
    <div class="page-category" data-log="商品分类">
      <div class="page-category-wrap">
        <div
          class="list-wrap"
          id="m0"
          v-for="product in products"
          :key="product.id"
        >
          <h3 class="list_title">{{ product.name }}</h3>
          <ol class="list_category">
            <li v-for="item in product.children" :key="item.id">
              <router-link
                :to="{ name: 'productList', params: { id: item.id } }"
              >
                <div class="img">
                  <img :src="item.image" />
                </div>
              </router-link>
              <div class="name">
                <span>{{ item.name }}</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products"],
};
</script>
