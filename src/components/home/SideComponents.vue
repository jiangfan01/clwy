<template>
  <div>
    <Swiper v-if="slides.length > 0">
      <Slide v-for="(item, index) in slides" :key="index">
        <section class="slider">
          <div class="flexslider">
            <ul class="slides">
              <li>
                <router-link :to="item.url">
                  <img :src="item.image" style="width: 100%" />
                </router-link>
              </li>
            </ul>
          </div>
        </section>
      </Slide>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, Slide } from "vue-swiper-component";
export default {
  props: ["slides"],
  components: {
    Swiper,
    Slide,
  },
};
</script>
