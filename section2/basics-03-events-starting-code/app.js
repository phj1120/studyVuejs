const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      fullName:'',
      confirmName:'',
      id: '',
      confirmId:'',
      pw: '',
      confirmPw:'',
    };
  },
  methods: {
    changeCounter(amount){
      this.counter+= amount
    },
    add(){
      this.counter++
    },
    reduce(){
      this.counter--
    },
    setName(event){
      this.name = event.target.value
    },
    setFullName(event, secondName){
      this.fullName = event.target.value + ' ' + secondName
    },
    submitForm(event){
      console.log('Submit: Sign Up')
    },
    setId(event){
      this.id = event.target.value
    },
    setPw(event){
      this.pw = event.target.value
    },
    confirmInput(){
      console.log('confirm')
      this.confirmName = this.fullName
    },
    login(){
      console.log('login')
      this.confirmId = this.id
      this.confirmPw = this.pw
    }
  },
});

app.mount('#events');
