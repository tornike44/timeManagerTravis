<template>
  <div v-if="isLoad" class="mx-auto d-flex flex-column">
    <a class="btn btn-lg btn-icon rounded-circle waves-effect waves-themed mb-4 mt-4" @click="postClock(1)" :class="clock.status ? 'btn-outline-success' : 'btn-outline-danger'"><i class="fas fa-clock"></i></a>
    <a :class="clock.status ? 'text-success' : 'text-danger'">{{ moment(clock.time).calendar() }}</a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "ClockManager",
  data: function () {
    return {
      isLoad: false
    };
  },
   methods: {
    ...mapActions("clock", ["getClock", "postClock"]),
  },
  created() {
    this.getClock(1).then(() => {
      this.isLoad = true;
    });
  },
  computed: {
    ...mapState("clock", {
      clock: (state) => state.clock,
    }),
  },
};
</script>

<style scoped>
  .fa-clock {
    font-size: 5em;
  }
</style>