<template>
  <div class="destination container">
    <!--  Dist slid components  -->
    <dest-slid />
    <!--  Dist Tours components  -->
    <dest-tours />
  </div>
</template>

<script>
// import axios from "axios";
import DestSlid from "@/components/destSlid";
import DestTours from "@/components/destTours";

export default {
  name: "DestinationPage",
  components: { DestTours, DestSlid },
  // data() {
  //   return {
  //     tours: [],
  //   };
  // },
  // created() {
  //   axios.get("http://localhost:8080/api/v1/tours").then((res) => {
  //     this.tours = res.data.data.data;
  //     console.log(this.tours);
  //   });
  // },
};
</script>
