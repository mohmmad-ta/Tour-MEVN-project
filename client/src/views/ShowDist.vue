<template>
  <div class="p-5 bg-pro-box">
    <div class="row bg-box-product">
      <div class="col-lg-6 col-md-12">
        <div class="text-product">
          <h2>{{ tour.name }}</h2>
          <span class="text-light">description</span>
          <p>{{ tour.description }}</p>
          <p>difficulty : {{ tour.difficulty }}</p>
          <span>Locations :</span>
          <ul v-for="location in tour.locations" :key="location">
            <li>{{ location.description }} - Last {{ location.day }} Days</li>
          </ul>
          <span>Start Dates :</span>
          <ul v-for="startDate in tour.startDates" :key="startDate">
            <li>{{ startDate.slice(0, 10) }}</li>
          </ul>
          <div class="add-prod">
            <div class="col-6 pt-1">
              <span class="text-light m-2 mt-3">$ {{ tour.price }}</span>
            </div>
            <div class="col-6">
              <button class="btn btn-outline-light w-100">Booking Now</button>
            </div>
          </div>
        </div>
      </div>
      <!--  right side  -->
      <div class="col-lg-6 col-md-12 slid-product">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              :data-bs-slide-to="index"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              v-for="(image, index) in tour.images"
              :key="image"
            >
              <img
                :src="`http://localhost:3000/img/tours/${image}`"
                class="img-slid"
                alt="..."
              />
            </button>
          </div>
          <div class="carousel-inner">
            <div
              class="carousel-item active"
              v-for="image in tour.images"
              :key="image"
            >
              <img
                :src="`http://localhost:3000/img/tours/${image}`"
                class="img-slid"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowDist",
  data() {
    return {
      tour: [],
      guides: [],
    };
  },
  created() {
    axios.get(`tours/${this.$route.query.Id}`).then((res) => {
      this.tour = res.data.data.data;
      console.log(this.tour);
      console.log(this.$route.query.Id);
    });
  },
};
</script>
