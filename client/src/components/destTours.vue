<template>
  <div class="d-flex search-box col-12 col-lg-9">
    <input
      class="in-search"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn-search" type="submit">
      <i class="fa fa-search"></i>
    </button>
  </div>
  <div class="filterDist row">
    <select id="pet-select">
      <option value="">All Tripe</option>
      <option value="dog">For Family</option>
      <option value="cat">For Youths</option>
      <option value="cat">Dangerous Tripe</option>
    </select>
    <select id="pet-select">
      <option value="">All Tripe</option>
      <option value="dog">For Family</option>
      <option value="cat">For Youths</option>
      <option value="cat">Dangerous Tripe</option>
    </select>
  </div>
  <!--  card list  -->
  <div class="row distList">
    <div class="card-dist" v-for="tour in tours" :key="tour.id">
      <router-link :to="{ path: 'ShowDist', query: { Id: tour.id } }">
        <div class="overlay"></div>
        <img
          :src="`http://localhost:3000/img/tours/${tour.imageCover}`"
          alt="..."
        />
        <div class="about-card">
          <span>{{ tour.startDates[0].slice(0, 10) }}</span>
          <p>{{ tour.ratingsAverage }} <i class="fa-solid fa-star"></i></p>
        </div>
        <div class="title-card">
          <h5 class="">{{ tour.name }}</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tours: [],
    };
  },
  created() {
    axios.get("http://localhost:8080/api/v1/tours").then((res) => {
      this.tours = res.data.data.data;
      // console.log(this.tours[0].id);
    });
  },
};
</script>
