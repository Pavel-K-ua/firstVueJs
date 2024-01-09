const app = Vue.createApp({
  data() {
    return {
      title: "Mr",
      firstName: "John",
      lastName: "Doe",
      email: "John@gmail.com",
      phone: "000000",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/12.jpg",
    };
  },
  methods: {
    async getUser() {
      const result = await fetch("https://randomuser.me/api/");
      const { results } = await result.json();
      const resObj = results[0];
      console.log(results[0]);

      this.title = resObj.name.title;
      this.firstName = resObj.name.first;
      this.lastName = resObj.name.last;
      this.email = resObj.email;
      this.phone = resObj.phone;
      this.gender = resObj.gender;
      this.picture = resObj.picture.large;
    },
  },
});

app.mount("#app");
