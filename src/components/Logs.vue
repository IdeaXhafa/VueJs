<template>
  <h2>Content Tracking</h2>
  <table class="table table-bordered" style="width:50%; margin-left: auto;margin-right: auto;">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Data</th>
        <th scope="col">Type</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="Logs in Logs" v-bind:key="Logs._id">
        <th scope="row">{{ Logs._id }}</th>
        <td>{{ Logs.data }}</td>
        <td>{{ Logs.type }}</td>
        <td>{{ Logs.description }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      Logs: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/get-logs";
    axios
      .get(apiURL)
      .then((res) => {
        this.Logs = res.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },

  setup() {},
};
</script>
