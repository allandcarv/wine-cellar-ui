<template>
  <div class="new-comment">
    <textarea maxlength="500" rows="5" placeholder="Add your comment" v-model="comment"></textarea>
    <small>{{ comment.length }} / 500</small>
    <button type="button" @click="addComment">Add Comment</button>
  </div>
</template>

<script>
import axios from "axios";

import { baseApiUrl, showError } from "../../config/global";

export default {
  name: "CommentRegister",
  props: ["wine"],
  data: function() {
    return {
      comment: ""
    };
  },
  methods: {
    addComment() {
      const comment = {
        comment: this.comment,
        wine_id: parseInt(this.wine.id)
      };

      axios
        .post(`${baseApiUrl}/wines/comment`, comment)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.comment = "";
          this.$emit("loadWine");
        })
        .catch(err => showError(err.response.data.error));
    }
  }
};
</script>

<style>
.new-comment {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;
}

.new-comment button {
  margin-top: 10px;
  width: 150px;
}
</style>