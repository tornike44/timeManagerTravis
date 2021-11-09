<template>
  <div class="m-5">
    <WorkingTimesTable class="mb-5" v-if="isLoad" :userId="userId" :workingtimes="workingtimes" />
    <ChartManager />
  </div>
</template>

<script>
import ChartManager from "@/components/ChartManager.vue";
import WorkingTimesTable from "@/components/WorkingTimesTable";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
      ChartManager,
      WorkingTimesTable
  },
 data: function () {
    var userId = 1;
    return {
      isLoad: false,
      userId
    };
  },
  computed: {
    ...mapState("workingtime", {
      workingtimes: (state) => state.workingtimes,
    }),
  },
  created() {
    this.getWorkingTimesList(this.userId).then(() => {
      this.isLoad = true;
    });
  },
  methods: {
    ...mapActions("workingtime", ["getWorkingTimesList"]),
  },
};
</script>
