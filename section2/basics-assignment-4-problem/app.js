const app = Vue.createApp({
    data() {
        return {
            userCssClass:'',
            toggleStatus:false,
            backgroundColor:'',  
        }
    },
    computed: {
        isVisible() {
            if(this.toggleStatus){
                return 'hidden'
            }
            return 'visible'
        },
    },
    methods: {
        clickToggle(){
            this.toggleStatus = !this.toggleStatus
        }
    },
})

app.mount('#assignment')