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
  background-color: #ddd;
  color: #333;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>