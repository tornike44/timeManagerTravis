<template>
  <li v-if="isLoad" class="d-flex flex-column">
      <router-link class="mx-auto text-white user" to="#">{{ user.username }}</router-link>
      <span class="mt-4 mx-auto text-light">Manager</span>
      <span class="mt-4 mx-auto text-light">{{ user.email }}</span>
  </li>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "User",
  data: function () {
    return {
      isLoad: false
    };
  },
  methods: {
    ...mapActions("user", ["getUser"]),
  },
  created() {
    this.getUser(1).then(() => {
      this.isLoad = true;
    });
  },
  computed: {
    ...mapState("user", {
      user: (state) => state.user,
    }),
  },
};
</script>
