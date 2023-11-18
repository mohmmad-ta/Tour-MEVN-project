<template>
  <section class="get-in-touch container">
    <h2 class="title">Contact Us</h2>
    <form class="contact-form row">
      <div class="form-field col-lg-6">
        <input id="name" class="input-text js-input" type="text" required />
        <label class="label" for="name">Name</label>
      </div>
      <div class="form-field col-lg-6">
        <input id="email" class="input-text js-input" type="email" required />
        <label class="label" for="email">E-mail</label>
      </div>
      <div class="form-field col-lg-6">
        <input id="company" class="input-text js-input" type="text" required />
        <label class="label" for="company">Company Name</label>
      </div>
      <div class="form-field col-lg-6">
        <input id="phone" class="input-text js-input" type="text" required />
        <label class="label" for="phone">Contact Number</label>
      </div>
      <div class="form-field col-lg-12">
        <input id="message" class="input-text js-input" type="text" required />
        <label class="label" for="message">Message</label>
      </div>
      <div class="form-field col-lg-12 text-center">
        <input
          type="submit"
          class="btn btn-outline-light submit-btn"
          value="Submit"
        />
      </div>
    </form>
  </section>
</template>

<script>
import $ from "jquery";
export default {
  name: "contactPage",
  created() {
    $(".js-input").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });
  },
  unmounted() {
    $(".js-input").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
    });
  },
};
</script>
