<template>
  <header class="header">
    <h1 class="header__title">
      <router-link to="/">My Wine Cellar</router-link>
    </h1>
    <UserDropDown />
  </header>
</template>

<script>
import UserDropDown from "../user/UserDropDown";

export default {
  name: "Header",
  components: { UserDropDown }
};
</script>

<style>
.header {
  grid-area: header;
  background-color: #7159c1;
  padding: 0 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header a {
  text-decoration: none;
  color: #fff;
}
</style>