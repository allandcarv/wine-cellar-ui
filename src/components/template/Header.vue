<template>
  <header class="header">
    <h1 class="header__title">My Wine Cellar</h1>
    <div class="header__user">
      <i class="fa fa-user-circle" />
      <span>Hello Visitor!!</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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

  color: #fff;
}

.header .header__user {
  height: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;

  font-size: 1.4rem;
}

.header .header__user:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.header__user i {
  margin-right: 10px;
}
</style>