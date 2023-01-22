const app = Vue.createApp({
    data() {
        return {
            text:'',
            keyDownText:'',
            enterText:''
        }
    },
    methods: {
        clickButton(){
            window.alert('Button Click')
        },
        pressEnter(event){
            this.enterText=event.target.value
        },
        pressKeyDown(event){
            this.keyDownText=event.target.value
        },
    },

})

app.mount('#assignment');
