<template>
  <div id="wrapper">
    <div class="page-address-edit" data-log="地址">
      <div class="edit-box">
        <ul class="ui-list">
          <li class="ui-list-item">
            <div class="label">收货人：</div>
            <div class="ui-input">
              <input
                placeholder="真实姓名"
                name="consignee"
                maxlength="15"
                type="text"
                v-model="address.name"
              />
            </div>
          </li>
          <li class="ui-list-item">
            <div class="label">手机号码：</div>
            <div class="ui-input">
              <input
                placeholder="手机号"
                name="tel"
                maxlength="13"
                type="tel"
                v-model="address.tel"
              />
            </div>
          </li>
          <li class="ui-list-item">
            <div class="label">所在地区：</div>
            <div class="ui-input">
              <input
                placeholder="省 市 区"
                name="pcd"
                maxlength="20"
                type="text"
                value=""
                v-model="address.pca"
                @click="showModal = true"
              />
            </div>
          </li>
          <li class="ui-list-item">
            <div class="label">街道地址：</div>
            <div class="ui-input">
              <input
                placeholder="详细地址"
                name="address"
                maxlength="120"
                type="text"
                v-model="address.detail"
              />
            </div>
          </li>
        </ul>
        <div class="save-button">
          <a href="javascript:;" class="ui-button" @click="init"
            ><span>保存地址</span></a
          >
        </div>
      </div>

      <div class="ui-mask" :class="{ show: showModal }"></div>
      <div class="ui-pop" :class="{ show: showModal }">
        <div class="ui-pop-content">
          <div class="region-list">
            <v-distpicker
              @selected="onSelect"
              type="mobile"
              style="height: 100%"
            ></v-distpicker>
          </div>
        </div>
        <div class="ui-pop-title">选择所在地区</div>
        <div class="ui-pop-close">
          <a
            ><span class="icon-10chahaokuang" @click="showModal = false"></span
          ></a>
        </div>
      </div>

      <div class="popup-risk-check"></div>
    </div>
  </div>
</template>

<script>
import { CreateAddresses } from "@/api/location";
import VDistpicker from "v-distpicker";
export default {
  components: {
    VDistpicker,
  },
  data() {
    return {
      showModal: false,
      address: {
        name: "",
        tel: "",
        pca: "",
        detail: "",
      },
    };
  },
  created() {},
  methods: {
    async init() {
      const res = await CreateAddresses(this.address);
      if (res.code !== 20000) {
        alert(res.message);
        return;
      }
      this.$router.push({ name: "addressList" });
    },
    onSelect(data) {
      this.address.pca = `${data.province.value} ${data.city.value} ${data.area.value}`;
      this.show = false;
    },
  },
};
</script>
<style scoped lang="scss">
.ui-mask {
  display: none;
}

.ui-pop {
  display: none;
}

.show {
  display: block;
}

.ui-pop-title {
  font-size: 0.24rem;
}

.ui-pop-close {
  margin-top: 5px;
  margin-right: 5px;
}

.region-list {
  font-size: 0.24rem;
}
</style>
