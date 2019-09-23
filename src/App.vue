<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from "./components/template/Content";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";

export default {
  name: "app",
  components: {
    Content,
    Header,
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

  font-family: "Oswald", sans-serif;
}

html,
body {
  min-height: 100%;
}

button {
  cursor: pointer;
}

#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr 40px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";

  background-color: #eee;
}
</style>
