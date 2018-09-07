function toggleLoader(state) {
  state.isLoading = !state.isLoading;
}

function fetchSiteData(state, feed) {
  state.feed = { ...feed };
}

export default { toggleLoader, fetchSiteData };
