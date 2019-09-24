<template>
  <main class="main__wine">
    <div class="wine__image">
      <img :src="wine.image.url" :alt="wine.name" />
    </div>
    <div class="wine__info">
      <span>
        <strong>Name</strong>
        {{ wine.name }}
      </span>
      <span>
        <strong>Country</strong>
        {{ wine.country }}
      </span>
      <span>
        <strong>Vineyard</strong>
        {{ wine.vineyard }}
      </span>
      <span>
        <strong>Year</strong>
        {{ wine.year }}
      </span>
      <h2>Sommelier Comment:</h2>
      <span>{{ wine.description }}</span>
    </div>
    <div class="wine__comments">
      <h2>Users Comments</h2>
      <p v-if="wine.comments.length === 0">This wine does not have comments yet</p>
      <Comment v-for="comment in wine.comments" :key="comment.id" :comment="comment" />
    </div>

    <CommentRegister v-if="user" :wine="{id}" @loadWine="loadWine" />
  </main>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { baseApiUrl, showError } from "../../config/global";

import Comment from "../comment/Comment";
import CommentRegister from "../comment/CommentRegister";

export default {
  name: "WineById",
  props: ["id"],
  components: { Comment, CommentRegister },
  data: function() {
    return {
      wine: {
        id: "",
        name: "",
        country: "",
        vineyard: "",
        year: "",
        description: "",
        image: {
          url: "",
          id: "",
          path: ""
        },
        comments: []
      },
      comment: {}
    };
  },
  computed: mapState(["user"]),
  methods: {
    loadWine() {
      axios
        .get(`${baseApiUrl}/wines/${this.id}`)
        .then(res => (this.wine = res.data))
        .catch(err => showError(err.reponse.data.error));
    }
  },
  mounted() {
    this.loadWine();
  }
};
</script>

<style>
.main__wine {
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #433082;
}

.main__wine .wine__image {
  width: 40%;
}

.main__wine .wine__image img {
  height: 500px;
  transform: rotate(15deg);
}

.main__wine .wine__info {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #eee;
  padding: 30px;
  border-radius: 4px;
  font-size: 1.4rem;
  line-height: 1.6;
}

.main__wine .wine__info span {
  margin-bottom: 10px;
}

.main__wine .wine__comments {
  width: 100%;
  background-color: #eee;
  padding: 15px 30px;
  border-radius: 4px;
  margin-top: 20px;
}

.main__wine .add-comment {
  width: 100%;
  padding: 15px;
}
</style>  