const app = new Vue({
    el: '#app',
    data: {
        classes: classes,
        cart: []
    },

    computed: {
        cartItemCount: function() {
            return this.cart.length || '';
        },
    },

    methods: {
        
        canAddToCart(lecture) {
            return lecture.spaces > this.cartCount(lecture);
        },
        addToCart (lecture) {
            this.cart.push(lecture);
            // console.log(lecture.id)
        },
        cartCount(lecture) {
            let count = 0;
            for(var i = 0; i < this.cart.length; i++) {                        
              if (this.cart[i] === lecture) {
                count++;
              }
            }
            return count;
          }
    },
    
    filters: {

    },
});