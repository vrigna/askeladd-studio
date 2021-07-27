<template>
  <div class="p-5 bg-white shadow">
      <h3>{{ title }}</h3>
      <p>{{ desc }}</p>
  </div>
</template>

<script>
import AboutCard from '@/components/AboutCard.vue'


export default {
  name: 'Home',
  components: {
    AboutCard,
  },
  props: {
      desc: String,
      title: String,
      icon: String,
  }
}
</script>


<style>

</style>