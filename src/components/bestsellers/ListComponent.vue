<template>
  <div class="row" style="margin: 0 -5px;">
    <div class="column" style="width: 80%;display: flex;">
      <div class="card" style="width: 18rem;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);text-align: center;background-color: #f1f1f1;margin-right: 1rem;" v-for="bestseller in Bestsellers" :key="bestseller._id">
        <img class="card-img-top" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ bestseller.title }}</h5>
          <p class="card-text">{{ bestseller.author }}</p>
          <p class="card-text">{{ bestseller.price }}</p>
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
        </div>
      </div>
    </div>
                  <router-link
                    to="/create-bestseller"
                    class="btn btn-primary"
                    style="width:70px;height:40px;"
                    >Add
                  </router-link>
  </div>
    <!-- <div class="row">
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
    </div> -->
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
  .row:after {
  content: "";
  display: table;
  clear: both;
  }
  @media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  } 
  
  </style>
  