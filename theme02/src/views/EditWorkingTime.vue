<template>
  <div v-if="isLoad" class="container">
    <h1 style="font-size: 2em;" class="mt-3 ml-5">Edit {{ user.username }}'s WorkingTime</h1>
    <div class="m-5 d-flex flex-column justify-content-center">
        <div class="align-self-center mt-4 mb-4 w-50">
          <label class="mt-4 mb-4" for="email">Start</label>
          <input  type="start" class="mb-4 form-control" id="start" v-model="start">
        </div>
        <div class="align-self-center mt-4 mb-4 w-50">
          <label for="end" class="mb-4 mt-4">End</label>
          <input  type="end" class="form-control" id="end" v-model="end">
        </div>
        <button @click="editWorkingTime()" class="w-25 align-self-center mt-5 btn btn-dark">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "EditUser",
  data: function () {
    var end;
    var start;
    return {
      end,
      start,
      isLoad: false
    };
  },
  computed: {
    ...mapState("workingtime", {
      workingtime: (state) => state.workingtime,
    }),
    ...mapState("user", {
      user: (state) => state.user,
    })
  },
  created() {
    this.getWorkingTime([this.$route.params.userId, this.$route.params.workingtimeId]).then((response) => {
        this.isLoad = true;
        this.end = response.end;
        this.start = response.start;
    });
  },
  methods: {
    ...mapActions("workingtime", ["getWorkingTime", "updateWorkingTime"]),
    editWorkingTime () {
        this.updateWorkingTime([this.$route.params.workingtimeId, {
          workingtime : {
            start: this.start,
            end: this.end
          }
        }])
      }
    }
};
</script>
