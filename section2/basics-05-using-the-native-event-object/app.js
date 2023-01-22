const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname:'',
      // fullname: '',
    };
  },
  watch: {
    // counter(value){
    //   if(value > 50){
    //     this.counter = 0
    //   }
    // }
  },
  computed: {
    validCounter(){
      if(this.counter > 50){
        this.counter = 0
      }
      return this.counter
    },

    fullname() {
      console.log('computed fullname')
      if (this.name === '' || this.lastname === '')
        return '';
      return this.name + ' ' +this.lastname
    }
  },
  methods: {
    outputFullname(){
      console.log('outputFullname')
      if (this.name === '')
        return '';
      return this.name + ' park'
    },
    setName(event) {
      console.log('setName')

      this.name = event.target.value;
    },
    add(num) {
      console.log('add')

      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log('reduce')

      this.counter = this.counter - num;
      // this.counter--;
    },
  }
});

app.mount('#events');
