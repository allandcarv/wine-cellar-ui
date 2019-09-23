<template>
  <main class="main">
    <Wine v-for="wine in wines" :key="wine.id" :wine="wine" />
  </main>
</template>

<script>
import axios from "axios";

import { baseApiUrl } from "../../config/global";

import Wine from "../wine/Wine";

export default {
  name: "Home",
  components: { Wine },
  data: function() {
    return {
      wines: {}
    };
  },
  methods: {
    async loadWines() {
      const wines = await axios.get(`${baseApiUrl}/wines`);

      this.wines = wines.data;
    }
  },
  mounted() {
    this.loadWines();
  }
};
</script>

<style>
.main {
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>