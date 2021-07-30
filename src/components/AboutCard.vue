<template>
  <div class="p-5 bg-white shadow my-3">
      <h3>{{ title }}</h3>
      <p class="ellipsis">{{ desc }}</p>
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
.ellipsis{
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>