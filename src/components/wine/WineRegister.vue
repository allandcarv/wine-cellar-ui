<template>
  <div class="register__form">
    <label for="file">Wine Image</label>
    <input type="file" id="file" ref="file" @change="handleFileUpload" />
    <label for="name">Wine Name</label>
    <input id="name" type="text" v-model="wine.name" placeholder="Enter Wine Name..." />
    <label for="country">Wine Country</label>
    <input id="country" type="text" v-model="wine.country" placeholder="Enter Wine Country..." />
    <label for="vineyard">Wine Vineyard</label>
    <input id="vineyard" type="text" v-model="wine.vineyard" placeholder="Enter Wine Vineyard..." />
    <label for="year">Wine Year</label>
    <input id="year" type="text" v-model="wine.year" placeholder="Enter Wine Year..." />
    <label for="description">Wine Description</label>
    <textarea
      id="description"
      rows="5"
      maxlength="500"
      v-model="wine.description"
      placeholder="Enter Wine Description..."
    />
    <small>{{ wine.description.length }} / 500</small>
    <div class="buttons">
      <button type="button" @click="register">Register</button>
      <button type="button" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { showError, baseApiUrl } from "../../config/global";

export default {
  name: "WineRegister",
  data: function() {
    return {
      wine: {
        name: "",
        country: "",
        vineyard: "",
        year: "",
        description: "",
        image_id: null
      },
      file: {}
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    async register() {
      let formData = new FormData();
      formData.append("file", this.file);

      const imageId = await axios
        .post(`${baseApiUrl}/files`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .catch(err => showError(err.response.data.error));

      this.wine.image_id = imageId.data.id;

      axios
        .post(`${baseApiUrl}/wines`, this.wine)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(err => showError(err.response.data.error));
    },
    reset() {
      this.wine = {
        name: "",
        country: "",
        vineyard: "",
        year: "",
        description: "",
        image_id: null
      };

      this.file = {};
      document.getElementById("file").value = "";
    }
  }
};
</script>

<style>
.register__form {
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #433082;
}

.register__form input,
.register__form textarea {
  margin-top: 5px;
}

.register__form label:not(:nth-of-type(1)),
.register__form button {
  margin-top: 15px;
}

.register__form button {
  width: 80px;
  margin-right: 5px;
}
</style>