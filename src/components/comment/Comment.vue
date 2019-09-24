<template>
  <div class="comment">
    <p class="user__name">{{ comment.user.name }}</p>
    <p class="user__comment">{{ comment.comment }}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"]
};
</script>

<style>
.comment {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.comment .user__name {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>