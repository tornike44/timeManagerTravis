<template>
  <div class="container">
    <h1 style="font-size: 2em;" class="mt-3 ml-5">New User</h1>
    <div class="m-5 d-flex flex-column justify-content-center">
        <div class="align-self-center mt-4 mb-4 w-50">
          <label class="mt-4 mb-4" for="email">Email address</label>
          <input  type="email" class="mb-4 form-control" :class="emailIsValid ? '' : 'is-invalid'" id="email" v-model="email">
           <div class="invalid-feedback">
            Please enter a valid email.
          </div>
        </div>
        <div class="align-self-center mt-4 mb-4 w-50">
          <label for="username" class="mb-4 mt-4">Username</label>
          <input  type="username" class="form-control" id="username" v-model="username">
        </div>
        <button @click="editUser()" class="w-25 align-self-center mt-5 btn btn-dark">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "CreateUser",
  data: function () {
    var username;
    var email;
    return {
      username,
      email,
      emailIsValid: true,
    };
  },
  computed: {
    ...mapState("user", {
      user: (state) => state.user,
    }),
  },
  created() {},
  methods: {
    ...mapActions("user", ["postUser"]),
    editUser () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.email)) {
        this.postUser({
          user : {
            username: this.username,
            email: this.email
          }
        }).then(() => {
          this.emailIsValid = true;
        })
      }
      else {
        this.emailIsValid = false;
      }
    }
  },
};
</script>
