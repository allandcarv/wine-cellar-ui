<template>
  <div class="user__dropdown">
    <i class="fa fa-user-circle" />
    <span v-if="user">Hello {{ user }}</span>
    <span v-else>Hello Visitor!!</span>
    <div class="dropdown__content">
      <div class="dropdown__auth">
        <input type="text" placeholder="Enter email..." />
        <input type="password" placeholder="Enter password..." />
        <button type="button">Login</button>
        <a href>Don't have an account? Please register...</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserDropDown",
  computed: mapState(["user"])
};
</script>

<style>
.user__dropdown {
  height: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;

  font-size: 1.4rem;
  color: #fff;
}

.user__dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.user__dropdown i {
  margin-right: 10px;
}

.user__dropdown .dropdown__content {
  position: absolute;
  top: 80px;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px 15.5px;
  z-index: 1;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user__dropdown:hover .dropdown__content {
  visibility: visible;
  opacity: 1;
}

.user__dropdown .dropdown__content .dropdown__auth {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.user__dropdown .dropdown__content .dropdown__auth a {
  text-decoration: none;
  font-size: 0.9rem;
  color: #7159c1;
}

.user__dropdown .dropdown__content .dropdown__auth input,
.user__dropdown .dropdown__content .dropdown__auth button {
  margin-bottom: 5px;
}

.user__dropdown .dropdown__content .dropdown__auth input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.user__dropdown .dropdown__content .dropdown__auth button {
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
}

.user__dropdown .dropdown__content .dropdown__auth button:hover {
  background-color: #573ea8;
}
</style>