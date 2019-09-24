<template>
  <main class="main">
    <div class="sort">
      <span>Sort by:</span>
      <button v-on:click="() => loadWines('name')">Name</button>
      <button v-on:click="() => loadWines('country')">Country</button>
      <button v-on:click="() => loadWines('vineyard')">Vineyard</button>
      <button v-on:click="() => loadWines('year')">Year</button>
    </div>
    <div class="wine__cards">
      <Wine v-for="wine in wines" :key="wine.id" :wine="wine" />
      <Wine v-if="user && user.admin" wine="add" />
    </div>
    <div class="load-button">
      <button type="button" v-on:click="loadMore" class="button" :disabled="this.disabled">Load More</button>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

import { baseApiUrl } from "../../config/global";

import Wine from "../wine/Wine";

export default {
  name: "Home",
  components: { Wine },
  data: function() {
    return {
      wines: [],
      sort: "",
      order: "asc",
      page: 1,
      disabled: false,
      showSignup: false
    };
  },
  computed: mapState(["user"]),
  methods: {
    async loadWines(sort = "name") {
      if (sort !== this.sort) {
        this.order = "asc";
      } else {
        this.order = this.order === "asc" ? "desc" : "asc";
      }

      this.sort = sort;
      this.page = 1;
      this.disabled = false;

      const params = { sort, order: this.order, page: this.page };
      const wines = await axios.get(`${baseApiUrl}/wines`, { params });

      this.wines = wines.data;
    },
    async loadMore() {
      const params = {
        sort: this.sort,
        order: this.order,
        page: this.page + 1
      };
      const wines = await axios.get(`${baseApiUrl}/wines`, { params });

      if (wines.data.length === 0) {
        this.disabled = true;
      } else {
        this.page = params.page;
        this.wines = [...this.wines, ...wines.data];
      }
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

  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #433082;
}

.main .sort {
  padding: 15px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
}

.main .sort button {
  margin-left: 10px;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: inherit;
}

.main .wine__cards {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.main .load-button {
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 15px;
}

.main .load-button button {
  width: 100px;
  margin-top: 20px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #7159c1;
  background-color: transparent;
  background-image: none;
  border: 2px solid #7159c1;
  transition: all 0.4s ease 0s;
}

.main .load-button button:hover {
  color: #fff;
  background-color: #7159c1;
  transition: all 0.4s ease 0s;
}

.main .load-button button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>