const app = Vue.createApp({
    data(){
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected: false,
            boxESelected: false,
        };
    },
    computed: {
        boxDClasses(){
            return {activate: this.boxDSelected}
        },
        boxEClasses(){
            return {activate: this.boxESelected}
        }
    },
    methods: {        
        boxSelected(box){
            if(box === 'A'){
                this.boxASelected = !this.boxASelected
            }
            if(box === 'B'){
                this.boxBSelected = !this.boxBSelected
            }
            if(box === 'C'){
                this.boxCSelected = !this.boxCSelected
            }
            if(box === 'D'){
                this.boxDSelected = !this.boxDSelected
            }
            if(box === 'E'){
                this.boxESelected = !this.boxESelected
            }
        }
    },
});

app.mount('#styling')