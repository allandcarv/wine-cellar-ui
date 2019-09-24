<template>
  <div v-if="wine === 'add'" class="wine__card-add">
    <router-link to="/newwine">
      <p>
        <i class="fa fa-plus-circle"></i>
      </p>
      <p>Add Wine</p>
    </router-link>
  </div>
  <div v-else class="wine__card">
    <div class="wine__img">
      <img :src="wine.image.url" :alt="wine.name" />
    </div>
    <div class="wine__info">
      <span>Name: {{wine.name}}</span>
      <span>Country: {{wine.country}}</span>
      <span>Vineyard: {{wine.vineyard}}</span>
      <span>Year: {{wine.year}}</span>
      <router-link :to="`/wine/${wine.id}`" class="button">Read More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wine",
  props: ["wine"]
};
</script>

<style>
.wine__card,
.wine__card-add {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
}

.wine__card-add {
  height: 275px;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
}

@media (min-width: 992px) {
  .wine__card {
    width: 33%;
    justify-content: baseline;
  }

  .wine__card-add {
    width: 33%;
  }
}

.wine__card-add a {
  text-decoration: none;
  text-align: center;
}

.wine__card .wine__img {
  width: 10%;
}

.wine__card .wine__img img {
  height: 238px;
}

.wine__card .wine__info {
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.wine__card .wine__info .button {
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

.wine__card .wine__info .button:hover {
  color: #fff;
  background-color: #7159c1;
  transition: all 0.4s ease 0s;
}
</style>