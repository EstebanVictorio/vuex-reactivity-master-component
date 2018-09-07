<template>
  <div class="hello">
    <PulseLoader v-if='isLoading'/>
    <h1>{{msg}}</h1>
    <div v-if="!isLoading">
    <pre>{{feed}}</pre>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "HelloWorld",
  props: {
    isLoading: Boolean,
    feed: Object,
    msg: String
  },
  components: {
    PulseLoader
  },
  mounted() {
    console.log(`Loading:${this.isLoading}`);
    console.log("Feed:");
    console.log(this.feed);
  },
  updated() {
    console.log(`Loading:${this.isLoading}`);
    console.log("Feed:");
    console.log(this.feed);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
