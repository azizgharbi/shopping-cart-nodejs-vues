import jquery from 'jquery';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import axios from 'axios';


  let app = new Vue({
    el: "#app",
    data: {
      items: [],
      shop: []
    },

    filters:{
      toUSD: function (price) {
        return '$' + price ;
      },

      roundTwo: function (price) {
        return Math.round(price * 100) / 100 ;
      }
    },
    computed: {
      total() {
        let total = 0;
        for(let i = 0; i < this.items.length; i++) {
          total += this.items[i].price * this.items[i].quantity;
        }
        return total;
      },
      productsQuantity() {
        let productsQuantity = 0;
        for(let i = 0; i < this.items.length; i++) {
          productsQuantity += this.items[i].quantity;
        }
        return productsQuantity;
      }
    },
    methods: {
      subtotal(price,quantity){
          return price * quantity;
      },

      addTolocalStorage(array,key){
        localStorage.setItem(key,JSON.stringify(array))
      },
      addToCart(item) {

        item.quantity += 1;
        if(!this.items.includes(item)){
          this.items.push(item);
          this.addTolocalStorage(this.items,'Products'); 
        }
               
      },
      addQuantity(item) { 
          item.quantity += 1;          
          this.addTolocalStorage(this.items,'Products');        
        },
      moinQuantity(item) {
        if(item.quantity > 1){
          item.quantity -= 1;                  
        }else{
          this.removeFromCart(item);
          this.cartIsEmpty();       
        }
        this.addTolocalStorage(this.items,'Products');    
      },
      removeFromCart(item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.addTolocalStorage(this.items,'Products');        
      },
      emptyCart(){
        localStorage.removeItem('Products');
        this.items = [];
      }
    },
    created(){   
      let self = this;
      axios.get('/api/store')
      .then(function (response) {
        self.shop = response.data
      })
      .catch(function (error) {
        console.log(error);
      });

      if(localStorage.getItem('Products')){
        this.items = JSON.parse(localStorage.getItem('Products'));              
      }
    }
  });

