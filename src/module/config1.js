import BaseMutations from "./../mutation/BaseMutations";
import BaseActions from "./../action/BaseActions";

let config1 = {
  namespaced: true,
  state: {
    isLoading: false,
    feed: {}
  },
  mutations: BaseMutations,
  actions: BaseActions
};

export { config1 };
