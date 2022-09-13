const app = Vue.createApp({
    data() {
        return {
            'title': 'the death of the dead',
            books: [
                { title: "the death of the dead ", author: 'RobAqua', img: 'assets/1.jpeg' , isFav: true},
                { title: "Atomic Habits", author: 'James clear' , img: 'assets/2.jpeg', isFav: false },
                { title: "How to win Friends and influence people", author: 'Dale Carnegie', img: 'assets/3.jpeg' ,isFav: true},
            ],
            count: 0,
            showbooks: true,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(count) {
            console.log("thec lickk",count)
            if (count % 2 == 0) { this.title = 'count is even' }
            else { this.title = 'count is odd' }
            
        },
        togglebooks() {
          this.showbooks = !this.showbooks  
        },
        mouseevent(e) {
            console.log(e)
        },
        mouseover(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

})

app.mount('#app')