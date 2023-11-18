<template>
  <nav class="navbar navbar-expand-lg navbar-dark nav-po">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="fa-solid fa-fire in"></i> SAFRA
      </router-link>
      <button
        class="navbar-toggler iconNav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i class="fa-solid fa-bars-staggered"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse navText" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/destination">
              Destination
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="!user" class="nav-link" to="/signup">
              Registr
            </router-link>
            <router-link v-else class="nav-link" to="/profile">
              Profile
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    axios.get(`users/me`).then((res) => {
      this.user = res.data.data.data.name;
      console.log(this.user);
    });
  },
};
</script>
