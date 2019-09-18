<template>
  <div >
    <top></top>
    <tu></tu>
    <huodong></huodong>
    <tuij></tuij>
    <books></books>
    <di></di>
  </div>
</template>

<script>
import top from "../components/top.vue";
import tu from "../components/tu.vue";
import huodong from "../components/huodong.vue";
import tuij from "../components/tuij.vue";
import books from "../components/books.vue";
import di from "../components/di.vue";
export default {
    // name: "collect",
  components: {
    top,
    tu,
    huodong,
    tuij,
    books,
    di
  },
};
</script>