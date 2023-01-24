const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '', 
      goals: [] 
    };
  },
  methods: {
    clickAddButton(){
      this.goals.push(this.enteredGoalValue)
      this.enteredGoalValue = ''
    },
    clickRemoveButton(idx){
      this.goals.splice(idx, 1)
    },
  },
});

app.mount('#user-goals');
