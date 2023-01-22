const app = Vue.createApp({
    data() {
        return {
            name: 'PHJ',
            age: 26,
            imageUrl: "https://v2.vuejs.org/images/components.png",
            courseGoalA: 'Learn Vue',
            courseGoalB: 'Create App',
            htmlText: '<h2>HTML TEXT</h2>'
        }
    },
    methods: {
        randomNumber() {
            const number = Math.random();
            return number
        },
        outputGoal(){
            if(Math.random() > 0.5){
                return this.courseGoalA
            }
            return this.courseGoalB
        }
    },  
})

app.mount('#assignment')