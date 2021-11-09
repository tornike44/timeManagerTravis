<template>
  <div style="margin-left: 30px; margin-top: 30px">
    <form class="row row-cols-lg-auto g-3 align-items-center mb-3">
      <div class="col-12">
        <input type="text" placeholder="Start date" v-model="startDateCreate" class="form-control"/>
      </div>
      <div class="col-12">
        <input type="text" placeholder="End date" v-model="endDateCreate" class="form-control"/>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" style="width: 100px" @click="createWorkingTime">Create</button>
      </div>
    </form>
    <form class="row row-cols-lg-auto g-3 align-items-center mb-3">
      <div class="col-12">
        <input type="text" placeholder="Start date" v-model="startDateUpdate" class="form-control"/>
      </div>
      <div class="col-12">
        <input type="text" placeholder="End date" v-model="endDateUpdate" class="form-control"/>
      </div>
      <div class="col-12">
        <button type="button" class="btn btn-primary" style="width: 100px" @click="updateWorkingTime">Edit</button>
      </div>
    </form>
    <div>
      <button type="button" class="btn btn-outline-primary" @click="deleteWorkingTime">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WorkingTime",
  data: function () {
    const userId = this.$route.params.userid;
    const workingTimeId = this.$route.params.workingtimeid;

    let startDateUpdate;
    let endDateUpdate;

    let startDateCreate;
    let endDateCreate;

    const urlBase = "http://localhost:4000/api/";

    return {
      startDateCreate,
      endDateCreate,
      startDateUpdate,
      endDateUpdate,
      urlBase,
      userId,
      workingTimeId,
    };
  },
  methods: {
    async createWorkingTime() {
      let date = {"start":this.startDateCreate, "end":this.endDateCreate};
      let response = await axios.post(`${this.urlBase}workingtimes/${this.userId}`, date);
      console.log(response);
    },
    async updateWorkingTime() {
      let date = { start: `${this.startDateUpdate}`, end: `${this.endDateUpdate}`}
      let response = await axios.put(`${this.urlBase}workingtimes/${this.userId}/${this.workingTimeId}`, date);
      console.log(response.data);
    },
    async deleteWorkingTime() {
      let response = await axios.delete(`${this.urlBase}workingtimes/${this.workingTimeId}`);
      console.log(response.data);
    },
  },
  created() {
  },
};
</script>
