<template>
  <div id="app">
    <Navbar />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
@import "./styles/bootstrap.css";
</style>
