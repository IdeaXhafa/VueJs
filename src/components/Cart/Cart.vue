<template>
  <section class="h-100 gradient-custom">
    <div class="container py-5">
      <div class="row d-flex justify-content-center my-4">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Cart items</h5>
            </div>
            <div
              class="card-body"
              v-for="Bestsellers in Bestsellers"
              v-bind:key="Bestsellers._id"
            >
              <div class="row">
                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  <div
                    class="bg-image hover-overlay hover-zoom ripple rounded"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      v-bind:src="Bestsellers.photoUrl"
                      style="
                        height: 200px;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        width: 80%;
                      "
                    />
                  </div>
                </div>

                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  <p>
                    <strong>{{ Bestsellers.title }}</strong>
                  </p>
                  <p>{{ Bestsellers.author }}</p>
                  <p><strong>{{ Bestsellers.price }} $</strong></p>
                </div>

                <button @click="deleteItem(Bestsellers._id)" class="btn btn-danger" style="height:50px;">Remove from Cart</button>

              </div>
            </div>
            <!-- <div
              class="card-body"
              v-for="Books in Books"
              v-bind:key="Books._id"
            >
              <div class="row">
                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  <div
                    class="bg-image hover-overlay hover-zoom ripple rounded"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      v-bind:src="Books.photoUrl"
                      style="
                        height: 200px;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                        width: 80%;
                      "
                    />
                  </div>
                </div>

                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  <p>
                    <strong>{{ Books.title }}</strong>
                  </p>
                  <p>{{ Books.author }}</p>
                </div>

                <button class="btn btn-danger" style="height:50px;">Remove from Cart</button>

              </div> 
            </div>-->
          </div>
          <div class="card mb-4 mb-lg-0">
            <div class="card-body">
              <p><strong>We accept</strong></p>
              <img src="../../assets/Cards/visa.svg" class="image1" />
              <img src="../../assets/Cards/procredit.jpg" class="image1" />
              <img src="../../assets/Cards/raiffeisen.png" class="image2" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0
                    px-0
                    pb-0
                  "
                >
                  Products
                  <span>{{ totalPrice }} $</span>
                </li>
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    px-0
                  "
                >
                  Shipping
                  <span>Gratis</span>
                </li>
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    border-0
                    px-0
                    mb-3
                  "
                >
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span><strong>{{ totalPrice }} $</strong></span>
                </li>
              </ul>

              <button type="button" class="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { getAuth } from "@firebase/auth";
import getUser from "@/getUser";

export default {
  name: "cart",
  data() {
    return {
      cartItems: [],
      Bestsellers: []
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/get-cart/";
    axios
      .get(apiURL + this.id)
      .then((res) => {
        console.log(res.data)
        this.Bestsellers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteItem(id){
      let apiURL = `http://localhost:4000/api/delete-cart/${id}`;
      let indexOfArrayItem = this.Bestsellers.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to remove this from your cart?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Bestsellers.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  },
  computed: {
    totalPrice() {
      // let price = 0;

      // this.Bestsellers.forEach((it) => {
      //   price += it.price;
      //   console.log(it.price)
      // })
      // return price;
      return this.Bestsellers.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
  setup() {
    const { user } = getUser();

    const id = user.value.uid;

    return { id };
  },
};
</script>

<style scoped>
.image1 {
  height: 40px;
  width: 70px;
}
.image2 {
  height: 40px;
  width: 130px;
}
</style> 



<!-- <template>
  <div class="cart">
      <h5 class="cart-heading bg-color">Your Cart 
        <span class="empty-cart pull-right" title="empty cart">
          <span class="glyphicon glyphicon-trash" @click="emptyCart"></span>
        </span>
      </h5>
      <div class="row cart-container">
          <div class="col-md-12">
              <ul class="list-group">
                  <li class="list-group-item" v-for="item in cart" :key="item.id">
                    <span class="col-md-7 food-name">{{item.details.name}}</span>
                    <span class="col-md-2 quantity-wrapper">
                      X <span class="pull-right">{{item.quantity}}</span>
                    </span>  
                    <span class="sub-total col-md-3">
                      <span class="rs-sign">$</span>
                      {{getSubTotal(item.details.price, item.quantity)}}
                    </span>
                  </li>
              </ul>
          </div>
      </div>   
      <div class="row">
          <div class="col-md-12 total-price-wrapper">
              <h3>Total: <span class="total-price pull-right"> <span class="rs-sign">$</span> {{getTotal}}</span></h3>
          </div>
      </div>   
      <div class="row">
          <div class="col-md-10 col-md-offset-1 checkout">
            <button type="button" class=" btn btn-custom btn-lg" @click="checkoutButton()">Checkout</button>
          </div>
      </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
props:['cart'],
data() {
  return {
    total:0
  };
},
mounted(){
  this.$root.$on('addToCart', (Bestsellers) => {

    this.total += Bestsellers.price;
  })
},
methods:{
  getSubTotal: function(price,quantity){
    var subTotal = price*quantity;
    return subTotal;
  },
  emptyCart:function(){
    this.total = 0;
    this.$emit('emptyCart');
  },
  checkoutButton(){
    // axios.post('/standup', {
    //   title     : this.q1,
    //   number    : this.q2,
    //   details   : this.q3,
    //   location  : this.q3,
    //   telephone : this.q3,
    // })
    //     .then(response => console.log(response))
    //
    //     .catch(e => {
    //       console.log(e);
    //     })
    // this.$emit('doPayment');
    // this.$parent.$attrs.doingPayment =true;
    if(this.getTotal != 0){
      this.$parent.doingPayment = true;
      this.$parent.total = this.getTotal;
    }
  }
},
computed:{
  getTotal:function(){
    var sum = 0;
    this.cart.forEach(function(Bestsellers) {
      var subTotal = Bestsellers.details.price * Bestsellers.quantity;
      sum +=subTotal;
    });
    return sum;
  }
}
};
</script>

<style scoped>
.cart {
min-height: 300px;
border: 1px solid transparent;
border-color: #e7e7e7;
border-radius: 4px;
}
.cart-container{
min-height: 200px;
}
.cart-heading {
margin-top: 0;
padding: 15px 15px;
}

.empty-cart {
cursor: pointer;
}

.checkout {
height: 50px;
position: relative;
bottom: 13px;
padding: 0;
}

.checkout > button {
position: relative;
width: 100%;
margin: 0 auto;
align-self: center !important;
text-transform: uppercase;
}

.quantity-wrapper {
color: #ccc;
}
.quantity {
margin-left: 20px;
margin-right: 10px;
}
.sub-total {
text-align: right;
}

.cart ul > li.list-group-item {
border: none;
padding: 20px 0;
}

.cart ul > li:last-child {
border-radius: 0;
border-bottom: 1px solid #ddd;
padding-bottom: 30px;
}

.total-price-wrapper {
margin-top: -20px;
margin-bottom: 20px;
}

.total-price-wrapper > h3 {
padding-left: 20px;
padding-right: 20px;
}
</style> -->


