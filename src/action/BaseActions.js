import fetchBaseData from "./../utils/fetchBaseData";

function fetchBaseDataAsync({ state, commit }) {
  commit({ type: "toggleLoader" });
  setTimeout(() => {
    fetchBaseData()
      .then(payload => {
        commit("fetchSiteData", payload);
        commit({ type: "toggleLoader" });
        console.log(state.feed);
      })
      .catch(reason => console.log(reason.message));
  }, 3000);
}

export default { fetchBaseDataAsync };
