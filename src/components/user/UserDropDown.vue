<template>
  <div class="user__dropdown" :class="{active: isVisible}">
    <div class="dropdown__user" @click="isVisible = !isVisible">
      <i class="fa fa-bars" v-if="toggle"></i>
      <div v-else>
        <i class="fa fa-user-circle" />
        <span v-if="user">Hello {{ user.name }}</span>
        <span v-else>Hello Visitor!!</span>
      </div>
    </div>
    <div class="dropdown__content" :class="{visible: isVisible}">
      <div v-if="!user" class="dropdown__auth">
        <input type="text" placeholder="Enter name" v-model="usr.name" v-if="isSignup" />
        <input type="email" placeholder="Enter email..." v-model="usr.email" />
        <input type="password" placeholder="Enter password..." v-model="usr.password" />
        <input
          type="password"
          placeholder="Confirm password..."
          v-model="usr.confirmPassword"
          v-if="isSignup"
        />
        <button type="button" @click="signup" v-if="isSignup">Signup</button>
        <button type="button" @click="signin" v-else>Signin</button>
        <a
          @click.prevent="isSignup = !isSignup"
          v-if="!isSignup"
        >Don't have an account? Please signup.</a>
        <a
          @click.prevent="isSignup = !isSignup"
          v-else
        >Do you already have an account? Please signin.</a>
      </div>
      <div v-else class="dropdown__logout">
        <button type="button" @click="signout">Exit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

import { baseApiUrl, userKey, showError } from "../../config/global";

export default {
  name: "UserDropDown",
  computed: mapState(["user"]),
  data: function() {
    return {
      usr: {},
      isSignup: false,
      isVisible: false,
      toggle: false
    };
  },
  methods: {
    signin() {
      axios
        .post(`${baseApiUrl}/sessions`, this.usr)
        .then(res => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.usr = {};
          this.isVisible = false;
        })
        .catch(err => showError(err.response.data.error));
    },
    signup() {
      axios
        .post(`${baseApiUrl}/users`, this.usr)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          (this.usr = {}), (this.isSignup = false);
        })
        .catch(err => showError(err.response.data.error));
    },
    signout() {
      localStorage.removeItem(userKey);
      this.$store.commit("setUser", null);
      this.isVisible = false;
      if (window.location.pathname === "/newwine") {
        this.$router.push({ path: "/" });
      }
    }
  },
  mounted() {
    this.toggle = this.$mq === "xs" || this.$mq === "sm" ? true : false;
  }
};
</script>

<style>
.user__dropdown {
  height: 100%;
  padding: 0 40px;
  position: relative;

  display: flex;
  align-items: center;

  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
}

.user__dropdown.active {
  background-color: rgba(0, 0, 0, 0.2);
}

.user__dropdown i {
  margin-right: 10px;
}

.user__dropdown .dropdown__content {
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;

  background-color: #f9f9f9;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px 15.5px;
  z-index: 1;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user__dropdown .dropdown__content.visible {
  visibility: visible;
  opacity: 1;
}

.user__dropdown .dropdown__content .dropdown__auth {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.user__dropdown .dropdown__content .dropdown__logout {
  display: flex;
  align-items: center;
  justify-content: center;
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

.user__dropdown .dropdown__content .dropdown__logout button {
  width: 80%;
}
</style>