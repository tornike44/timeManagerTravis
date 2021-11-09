<template>
  <div>
    <div class="ml-5">
      <BtnCreateUser />
    </div>
    <UsersTable v-if="isLoad" :users="users" />
  </div>
</template>

<script>
import UsersTable from "@/components/UsersTable";
import { mapActions, mapState } from "vuex";
import BtnCreateUser from "@/components/BtnCreateUser";

export default {
  name: "Users",
  components: {
    UsersTable,
    BtnCreateUser,
  },
  data: function () {
    return {
      isLoad: false
    };
  },
  computed: {
    ...mapState("user", {
      users: (state) => state.users,
    }),
  },
  created() {
    this.getUsersList().then(() => {
      this.isLoad = true;
    });
  },
  methods: {
    ...mapActions("user", ["getUsersList"]),
  },
};
</script>
