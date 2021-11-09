<template>
  <div class="m-4">
    <b-table
      :data="data"
      :debounce-search="200"
      :default-sort="['id', 'desc']"
      :mobile-cards="true"
      :striped="true"
      paginated
      :per-page="5"
    >
      <b-table-column cell-class="align-middle" field="id" label="ID" sortable searchable >
        <div slot="default" slot-scope="props">
          {{ props.row.id }}
        </div>
      </b-table-column>

      <b-table-column
        cell-class="align-middle"
        field="username"
        label="Username"
        sortable
        searchable 
      >
        <div slot="default" slot-scope="props">
          {{ props.row.username }}
        </div>
      </b-table-column>

      <b-table-column cell-class="align-middle" field="email" label="Email" searchable >
        <div slot="default" slot-scope="props">
          {{ props.row.email }}
        </div>
      </b-table-column>

      <b-table-column cell-class="align-middle" field="" label="Actions" sortable>
        <div slot="default" slot-scope="props">
          <router-link :to="`/workingtimes/${props.row.id}`" class="btn btn-sm btn-icon btn-outline-info rounded-circle mr-4">
            <i class="fas fa-eye"></i>
          </router-link>
          <router-link
            :to="`/user/edit/${props.row.id}`"
            class="btn btn-sm btn-icon btn-outline-primary rounded-circle mr-4"
          >
            <i class="fas fa-edit"></i>
          </router-link>
          <a
            class="btn btn-sm btn-icon btn-outline-danger rounded-circle mr-4"
            href="#"
            @click.prevent="delUser(props.row.id)"
          >
            <i class="fas fa-times"></i>
          </a>
        </div>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UsersTable",
  props: ["users"],
  watch: {
    users: function (newValue) {
      this.data = newValue;
    },
  },
  data: function () {
    return {
      data: null,
    };
  },
  computed: {
      ...mapState("user", {
      user: (state) => state.user,
    }),
  },
  created() {
    this.data = this.users;
  },
  methods: {
    ...mapActions("user", ["deleteUser"]),
    delUser(id) {
      this.deleteUser(id);
    },
  },
};
</script>
