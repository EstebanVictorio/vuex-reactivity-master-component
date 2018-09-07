<template>
<component 
:is='component'
:msg="'Welcome!'">
</component>
</template>


<script>
import { mapActions, mapState } from "vuex";
import { Base } from "./../utils/ModuleNamespace";

export default {
  name: "withSiteStore",
  props: ["component"],
  computed: mapState(Base, ["isLoading", "feed"]),
  methods: mapActions(Base, {
    fetchBaseDataAsync: "fetchBaseDataAsync"
  }),
  mounted() {
    this.fetchBaseDataAsync();
  },
  updated() {
    console.log(`Updated Loading ${this.isLoading}`);
  }
};
</script>

<style scoped>
</style>
