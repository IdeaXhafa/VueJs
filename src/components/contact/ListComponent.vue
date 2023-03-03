<template>
  <div class="row" style="margin: 0 -5px">
    <div class="column" style="width: 80%; display: flex">
      <div
        class="card"
        style="
          width: 18rem;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          text-align: center;
          background-color: #f1f1f1;
          margin-right: 1rem;
        "
        v-for="contact in Contact"
        :key="contact._id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ contact.name }}</h5>
          <p class="card-text">{{ contact.subject }}</p>
          <p class="card-text">{{ contact.email }}</p>
          <p class="card-text">{{ contact.message }}</p>
        </div>
      </div>
    </div>
    <router-link
      to="/send-message"
      class="btn btn-primary"
      style="width: 70px; height: 40px"
      >Add
    </router-link>
  </div>
</template>
    
    <script>
import axios from "axios";

export default {
  data() {
    return {
      Contact: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/get-messages";
    axios
      .get(apiURL)
      .then((res) => {
        this.Contact = res.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
    