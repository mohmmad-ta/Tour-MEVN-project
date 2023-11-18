<template>
  <div class="col-lg-12 m-auto hea-slide">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner hea-slide">
        <div class="overlay2"></div>

        <div class="carousel-item active hea-slide">
          <img src="../assets/a.jpg" class="img-slid" alt="..." />
          <div class="text-slid w-100">
            <h5>First slide label</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              perspiciatis, consequuntur voluptas facilis temporibus
            </p>
            <div class="btn-b">
              <router-link to="/">Booking Now</router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item hea-slide">
          <img src="../assets/d.jpg" class="img-slid" alt="..." />
          <div class="text-slid w-100">
            <h5>Second slide label</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              perspiciatis, consequuntur voluptas facilis temporibus
            </p>
            <div class="btn-b">
              <router-link to="/">Booking Now</router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item hea-slide">
          <img src="../assets/z.jpg" class="img-slid" alt="..." />
          <div class="text-slid w-100">
            <h5>Third slide label</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              perspiciatis, consequuntur voluptas facilis temporibus
            </p>
            <div class="btn-b">
              <router-link to="/">Booking Now</router-link>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev carousel"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
