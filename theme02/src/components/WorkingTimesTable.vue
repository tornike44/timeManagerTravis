<template>
  <div>
    <h1 style="font-size: 2em;">My WorkingTimes</h1>
    <div v-if="workingtimes.length == 0 ">
      <h1>L'utilisateur n'a pas encore d'heures de travail</h1>
    </div>
    <div v-else class="m-4">
    <b-table
      :data="data"
      :debounce-search="200"
      :default-sort="['id', 'desc']"
      :mobile-cards="true"
      :striped="true"
      paginated
      :per-page="5"
    >
      <b-table-column cell-class="align-middle" field="id" label="ID" sortable>
        <div slot="default" slot-scope="props">
          {{ props.row.id }}
        </div>
      </b-table-column>

      <b-table-column
        cell-class="align-middle"
        field="start"
        label="Start"
        sortable
      >
        <div slot="default" slot-scope="props">
          {{ moment(props.row.start).format('LTS - L') }}
        </div>
      </b-table-column>

      <b-table-column cell-class="align-middle" field="end" label="End" sortable>
        <div slot="default" slot-scope="props">
          {{ moment(props.row.end).format('LTS - L') }}
        </div>
      </b-table-column>
      <b-table-column cell-class="align-middle" field="" label="Actions" sortable>
        <div slot="default" slot-scope="props">
          <router-link
            :to="`/workingtimes/edit/${$route.params.userId}/${props.row.id}`"
            class="btn btn-sm btn-icon btn-outline-primary rounded-circle mr-4"
          >
            <i class="fas fa-edit"></i>
          </router-link>
          <a
            class="btn btn-sm btn-icon btn-outline-danger rounded-circle mr-4"
            href="#"
            @click.prevent="delWorkingTime(props.row.id)"
          >
            <i class="fas fa-times"></i>
          </a>
        </div>
      </b-table-column>
      
    </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "WorkingTimes",
  props: ["workingtimes", "userId"],
  watch: {
    workingtimes: function (newValue) {
      this.data = newValue;
    },
  },
  data: function () {
    return {
      data: null,
    };
  },
  created() {
    this.data = this.workingtimes;
  },
  methods: {
    ...mapActions("workingtime", ["deleteWorkingTime"]),
    delWorkingTime(id) {
      this.deleteWorkingTime([id, this.userId]);
    },
  },
  computed: {
      ...mapState("workingtime", {
      workingtime: (state) => state.workingtime,
    }),
  },
};
</script>
