<template>
  <nav id="sidebar" class="bg-dark">
    <ul class="components d-flex flex-column">
        <User />
        <ClockManager class="mx-auto"/>
        <li class="mt-5">
            <router-link :class="activeLink == 2 ? 'text-warning' : 'text-white'" to="/"><i class="mr-2 fas fa-user-clock"></i><span>My Working Times</span></router-link>
        </li>
        <li>
            <router-link :class="activeLink == 1 ? 'text-warning' : 'text-white'" to="/users"><i class="mr-4 fas fa-user"></i><span>Manage Users</span></router-link>
        </li>
        <li>
            <router-link :class="activeLink == 3 ? 'text-warning' : 'text-white'" to="/user/edit/1"><i class="mr-4 fas fa-pen"></i><span>Edit Profil</span></router-link>
        </li>
    </ul>
</nav>
</template>

<script>
import User from "@/components/User.vue";
import ClockManager from "@/components/ClockManager.vue";

export default {
  name: "Navbar",
  components: {
    User,
    ClockManager
  },
  data: function() {
      return {
      }
  },
  computed: {
      activeLink() {
          if (this.$route.fullPath == "/users") {
              return 1;
          }
          else if (this.$route.fullPath == "/") {
              return 2;
          }
          else if (this.$route.fullPath == "/user/edit/1") {
              return 3;
          }
          else {
              return 0;
          }
      }
  }
};
</script>

<style>
.wrapper {
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    position: fixed;
    height: 100%;
}

#sidebar ul.components {
    padding: 20px 0;
}

#sidebar ul li {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}

.user {
    font-size: 1.7em;
}

</style>