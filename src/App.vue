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
  color: #fff;
  background-color: #7159c1;
  border-color: #7159c1;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:hover {
  background-color: #573ea8;
}

input,
textarea {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

textarea {
  resize: none;
}

#app {
  height: 100vh;
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
