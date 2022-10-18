import { CarList, CarEdit, CarDelete } from "@/api/car";

const state = () => ({
  all: [],
  total: {},
});

const getters = {};

const mutations = {
  allCarts(state, payload) {
    state.all = payload.carts;
    state.total = payload.total;
  },
};

const actions = {
  //列表
  async init({ commit }) {
    const res = await CarList();
    commit("allCarts", res.data);
  },
  //添加，减少
  async changeNum({ dispatch }, payload) {
    await CarEdit(payload.id, { type: payload.type });
    await dispatch("init");
  },
  //删除
  async product_delete({ dispatch }, payload) {
    const res = await CarDelete(payload.id);
    if (res.code !== 20000) {
      alert(res.message);
    }
    alert("删除成功");
    await dispatch("init");
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
