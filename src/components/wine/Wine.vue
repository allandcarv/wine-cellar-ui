<template>
  <div class="wine__card">
    <div class="wine__img">
      <img :src="wine.image.url" :alt="wine.name" />
    </div>
    <div class="wine__info">
      <span>Name: {{wine.name}}</span>
      <span>Country: {{wine.country}}</span>
      <span>Vineyard: {{wine.vineyard}}</span>
      <span>Year: {{wine.year}}</span>
      <a href="#" class="button">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wine",
  props: { wine: Object }
};
</script>

<style>
.wine__card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
}

@media (min-width: 992px) {
  .wine__card {
    width: 33%;
    justify-content: baseline;
  }
}

.wine__card .wine__img img {
  height: 238px;
}

.wine__card .wine__info {
  display: flex;
  flex-direction: column;
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