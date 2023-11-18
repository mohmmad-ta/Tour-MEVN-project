<template>
  <div @submit.prevent="getdata" class="registrPage">
    <img src="../../assets/a.jpg" class="over" />
    <div class="form-box">
      <h3 class="title">Log in</h3>
      <form class="input-group">
        <input
          v-model="user.email"
          type="text"
          class="input-field"
          placeholder="User id"
          required
        />
        <input
          v-model="user.password"
          type="password"
          class="input-field"
          placeholder="Enter password"
          required
        />
        <div class="d-flex my-3 w-100">
          <input type="checkbox" />
          <span class="title-check-box"> Remember password </span>
        </div>
        <div class="w-100 d-flex justify-content-center">
          <button type="submit" class="submitBtn">Log In</button>
        </div>
        <router-link class="another" to="/signup">
          Create an account
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async getdata() {
      const response = await axios.post("users/login", this.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.data.user._id);
      this.$router.push("/");
    },
  },
};
</script>

<!--<template>-->
<!--  <log-in />-->
<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->
<!--import logIn from "@/components/logInComp";-->

<!--export default {-->
<!--  name: "LogInPage",-->
<!--  components: {-->
<!--    logIn,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      userLogin: {-->
<!--        email: "",-->
<!--        password: "",-->
<!--      },-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    dataLogin() {-->
<!--      axios.post("http://localhost:8080/api/v1/users/login", this.userLogin);-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->
