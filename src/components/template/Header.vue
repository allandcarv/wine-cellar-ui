<template>
  <header class="header">
    <h1>My Wine Cellar</h1>
    <span>Hello Visitor!!</span>
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

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>