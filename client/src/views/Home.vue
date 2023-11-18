<template>
  <div class="homePage">
    <img class="bgA" src="../assets/z.jpg" alt="" />
    <img class="bgb" src="../assets/c.png" />
    <div class="over"></div>
    <div class="textHeader">
      <h1>
        <strong>Ancient</strong> Bristlecone<br />Pine Forest
        <i class="fa-solid fa-fire"></i>
      </h1>
    </div>
  </div>
  <div class="homePage2">
    <div class="container">
      <div class="row">
        <div class="textBox col-12 col-lg-5">
          <h2>In publishing and graphic design</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </p>
        </div>
        <div class="col-12 col-lg-7">
          <div class="btnListCard">
            <router-link to="/destination"> Destination </router-link>
          </div>
          <div class="options">
            <div @click="toggleBox" class="option active i1">
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">
                  <i class="fas fa-walking"></i>
                </div>
                <div class="info">
                  <div class="main">Blonkisoaz</div>
                  <div class="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
            <div @click="toggleBox" class="option i2">
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">
                  <i class="fas fa-snowflake"></i>
                </div>
                <div class="info">
                  <div class="main">Oretemauw</div>
                  <div class="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
            <div @click="toggleBox" class="option i3">
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">
                  <i class="fas fa-tree"></i>
                </div>
                <div class="info">
                  <div class="main">Iteresuselle</div>
                  <div class="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
            <div @click="toggleBox" class="option i4">
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">
                  <i class="fas fa-tint"></i>
                </div>
                <div class="info">
                  <div class="main">Idiefe</div>
                  <div class="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
            <div @click="toggleBox" class="option i5">
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">
                  <i class="fas fa-sun"></i>
                </div>
                <div class="info">
                  <div class="main">Inatethi</div>
                  <div class="sub">Omuke trughte a otufta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="homePage2">
    <div class="container">
      <div class="row mt-5">
        <div class="col col-md-6">
          <div class="videoBtn">
            <img src="../assets/a.jpg" />
            <div @click="toggleVideo" class="icon">
              <i class="fa-solid fa-play icona"></i>
            </div>
          </div>
        </div>
        <div class="textBox col-12 col-md-6">
          <h2>In publishing and graphic design</h2>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </p>
        </div>
      </div>
    </div>
    <div id="videoBox" class="videoPuperBox d-none">
      <video controls class="videoPuper" poster="../assets/a.jpg">
        <source src="../assets/video.mp4" type="video/mp4" />
      </video>
      <div @click="toggleVideo" class="overVideo"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "homePage",
  methods: {
    toggleBox() {
      $(".option").click(function () {
        $(".option").removeClass("active");
        $(this).addClass("active");
      });
    },
    toggleVideo() {
      let vid = document.getElementById("videoBox");
      vid.classList.toggle("d-none");
    },
  },
};
</script>

<style>
.i1 {
  background: url("../assets/ci2.jpg") !important;
  background-size: cover !important;
}
.i2 {
  background: url("../assets/ci1.jpg") !important;
  background-size: cover !important;
}
.i3 {
  background: url("../assets/z.jpg") !important;
  background-size: cover !important;
}
.i4 {
  background: url("../assets/ci2.jpg") !important;
  background-size: cover !important;
}
.i5 {
  background: url("../assets/d.jpg") !important;
  background-size: cover !important;
}
</style>
