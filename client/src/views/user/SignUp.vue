<template>
  <div id="registr" class="registrPage">
    <img src="../../assets/a.jpg" class="over" />
    <div class="form-box">
      <h3 class="title">sign up</h3>
      <form class="input-group" @submit.prevent="senddata">
        <input
          v-model="user.name"
          type="text"
          class="input-field"
          placeholder="Name"
          required
        />
        <input
          v-model="user.email"
          type="email"
          class="input-field"
          placeholder="Email id"
          required
        />
        <input
          v-model="user.password"
          type="password"
          class="input-field"
          placeholder="Enter password"
          required
        />
        <input
          v-model="user.passwordConfirm"
          type="password"
          class="input-field"
          placeholder="Password Confirm"
          required
        />
        <div class="d-flex my-3 w-100">
          <input type="checkbox" />
          <span class="title-check-box">
            I agree to the terms & conditions
          </span>
        </div>
        <div class="w-100 d-flex justify-content-center">
          <button type="submit" class="submitBtn">Register</button>
        </div>
        <router-link class="another" to="/login">I have account</router-link>
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
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    };
  },
  methods: {
    async senddata() {
      await axios.post("users/signup", this.user);
      this.$router.push("/login");
    },
  },
};
</script>

<!--<template>-->
<!--  <div id="registr" class="registrPage">-->
<!--    <sign-up-comp />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->
<!--import signUpComp from "@/components/signUpComp";-->

<!--export default {-->
<!--  name: "SignUp",-->
<!--  components: {-->
<!--    signUpComp,-->
<!--  },-->
<!--};-->
<!--</script>-->
<!--<style scoped></style>-->
