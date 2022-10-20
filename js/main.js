const app = new Vue({
    el: '#eLearingApp',
    data: {
        classes: classes,
        cart: [], 
        sorting: "", //this is to sort by price, subject, location or availability/spaces
        order: "", // to order alpabetically in ascending or descending order
        search: "",// to search by subject and location
        HomePage: true
    },

    computed: {
        //searches by subject and location
        searchSortLecture: function(){
            tempLecture = this.classes;
            
            if(this.search != "" && this.search){
                tempLecture = tempLecture.filter((lecture) => {
                    return(lecture.subject.toLowerCase().match(this.search.toLowerCase()) || lecture.location.toLowerCase().match(this.search.toLowerCase()));
                })
            }
            
            tempLecture = tempLecture.sort((a, b) => {
                if(this.order == "ascending"){
                    if (this.sorting == "subject"){
                        if (a.subject.toLowerCase() < b.subject.toLowerCase()){
                            return -1
                        }
                        if (a.subject.toLowerCase() > b.subject.toLowerCase()){
                            return 1
                        }
                        return 0
                    }
                    if (this.sorting == "location"){
                        if (a.location.toLowerCase() < b.location.toLowerCase()){
                            return -1
                        }
                        if (a.location.toLowerCase() > b.location.toLowerCase()){
                            return 1
                        }
                        return 0
                    }
                    if(this.sorting == "price"){
                        return a.price - b.price;
                    }
                    if (this.sorting == "spaces"){
                        return a.spaces - b.spaces;
                    }
                }else if(this.order == "descending"){
                    if (this.sorting == "subject"){
                        if (a.subject.toLowerCase() < b.subject.toLowerCase()){
                            return 1
                        }
                        if (a.subject.toLowerCase() > b.subject.toLowerCase()){
                            return -1
                        }
                        return 0
                    }
                    if (this.sorting == "location"){
                        if (a.location.toLowerCase() < b.location.toLowerCase()){
                            return 1
                        }
                        if (a.location.toLowerCase() > b.location.toLowerCase()){
                            return -1
                        }
                        return 0
                    }
                    if(this.sorting == "price"){
                        return b.price - a.price;
                    }
                    if (this.sorting == "spaces"){
                        if (spaces <= 5){
                            return b.spaces.cartCount(lecture) - a.spaces.cartCount(lecture);
                        }
                    }
                }
            });
            
            return tempLecture;
        },
        //shows the number of items(spaces) of each subject being added to cart
        cartItemCount: function() {
            return this.cart.length || '';
        },
    },

    methods: {
        //don't understand this part
        //number of spaces should be greater than cartCount(lecture)
        canAddToCart(lecture) {
            return lecture.spaces > this.cartCount(lecture);
        },
        //adds or pushes items to cart
        addToCart (lecture) {
            this.cart.push(lecture);
            // console.log(lecture.id)
        },
        //calculating the number of items(spaces) being added to cart
        cartCount(lecture) {
            let count = 0;
            for(var i = 0; i < this.cart.length; i++) {                        
              if (this.cart[i] === lecture) {
                count++;
              }
            }
            return count;
          },
        //don't understand this part
        //this is just saying they are = to each other 
        
        togglePage(){
            this.HomePage = !this.HomePage;
        },
        //removes items from cart and adds back the number of space
        removeFromCart(){
            this.cart.splice(this.cart.lecture, 1)

            //when the cart is empty goes back to home page
            if(this.cart.length <= 0){
                this.togglePage();
            }
        }
    },
    
    filters: {

    },
});