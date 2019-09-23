<template>
  <footer class="footer">
    <span>
      Developed by
      <a href="mailto: allandcarv@gmail.com">
        <strong>Allan Carvalho</strong>
      </a>
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #b0a2dd;
  color: #333;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 60px;
}

.footer span a {
  text-decoration: none;
  color: #333;
}
</style>