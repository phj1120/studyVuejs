const app = Vue.createApp({
    data(){
        return{
            counter:0,
        }
    },
    computed: {
        result(){
            if ( this.counter === 37){
                return this.counter
            }
            if(this.counter > 37){
                return 'Too much!'
            }
            return 'Not there yet'
        }
    },
    watch: {
        result(){
            const that = this
            setTimeout(()=>{
                that.counter = 0
            }, 5000)
        }
    },
    methods: {
        changeCounter(amount){
            this.counter += amount
            console.log(this.counter);
        }
    },
})

app.mount('#assignment')