<template>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bestseller in Bestsellers" :key="bestseller._id">
              <td>{{ bestseller.title }}</td>
              <td>{{ bestseller.author }}</td>
              <td>{{ bestseller.price }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit', params: { id: bestseller._id } }"
                  class="btn btn-success"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deleteStudent(bestseller._id)"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        Bestsellers: [],
      };
    },
    created() {
      let apiURL = "http://localhost:4000/api";
      axios
        .get(apiURL)
        .then((res) => {
          this.Bestsellers = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      deleteStudent(id) {
        let apiURL = `http://localhost:4000/api/delete-bestseller/${id}`;
        let indexOfArrayItem = this.Bestsellers.findIndex((i) => i._id === id);
  
        if (window.confirm("Do you really want to delete?")) {
          axios
            .delete(apiURL)
            .then(() => {
              this.Bestsellers.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
    },
  };
  </script>
  
  <style>
  .btn-success {
    margin-right: 10px;
  }
  </style>
  