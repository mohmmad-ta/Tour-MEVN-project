<template>
  <nav-bar />
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/navBar";
import Footer from "@/components/footer";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    navBar,
    Footer,
  },
  async created() {
    // const id = localStorage.getItem("id");
    const resp = await axios.get(`users/me`);
    console.log(resp);
  },
};
</script>
