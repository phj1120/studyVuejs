const app = Vue.createApp({
    data() {
        return {
            tasks:[],
            inputTaskValue:'',
            listLisibleState:true,
        }
    },
    methods: {
        clickAddTaskButton(){
            this.tasks.push(this.inputTaskValue)
        },
        changeListVisibleState(){
            console.log('changeListVisibleState');
            this.listLisibleState = !this.listLisibleState
        }
    },
    computed: {
        getVisibleButtonName(){
            console.log('getVisibleButtonName');
            return this.listLisibleState? 'Hide' : 'Show List'
        }
    },

})

app.mount('#assignment')