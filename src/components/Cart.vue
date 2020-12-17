<template>
<div class="wrapper">
  <div class="cart">
      <h1 class="cartTitle">Cart</h1>
    <div class="products">
        <h2 v-if="this.$root.$data.cart.length == 0">The Cart is empty.</h2>
        <div class="product" v-for="product in this.$root.$data.cart" :key="product.id">
         <div class="info">
          <h1>{{product.name}}</h1>
         <p>{{product.country}}</p>
        </div>
        <div class="image">
         <img :src="'/images/products/'+product.image">
        </div>
        <div class="price">
            <h2>{{product.price}}</h2>
            <button class="auto" @click="removeItemFromCart(product.id)">Remove from Cart</button>
        </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    products: Array
  },
  methods:{
      removeItemFromCart: function(productID){
          var indexToDelete = 0;
          for(var i = 0; i < this.$root.$data.cart.length; ++i){
              if(this.$root.$data.cart[i].id == productID){
                  indexToDelete = i;
              }
          }
          this.$root.$data.cart.splice(indexToDelete, 1);
      }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: LightSkyBlue;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: Salmon;
  color: black;
  font-weight: bold;
  border: none;
}

.auto {
  margin-left: auto;
}

.cartTitle{
     text-align: center;
     font-size: 50px;
     font-family: "Times New Roman", Times, serif;
     margin: 0px 0px 0px 0px;
}

</style>