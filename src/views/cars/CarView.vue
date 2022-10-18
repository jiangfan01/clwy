<template>
  <div>
    <Loading v-if="loading" />
    <div id="wrapper" v-else>
      <div class="cart-index">
        <Not v-if="carts.length === 0" />
        <div class="cart-index-wrap" v-else>
          <List />
          <!-- Navbar -->
          <Total />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListComponents from "@/components/car/ListComponents";
import TotalComponents from "@/components/car/TotalComponents";
import NotComponents from "@/components/car/NotComponents";
import LoadingComponents from "@/components/LoadingComponents";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    List: ListComponents,
    Total: TotalComponents,
    Not: NotComponents,
    Loading: LoadingComponents,
  },
  computed: mapState({
    carts: (state) => state.carts.all,
  }),
  data() {
    return {
      loading: true,
    };
  },
  async created() {
    this.loading = true;
    await this.init();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  methods: {
    ...mapActions("carts", ["init"]),
  },
};
</script>
