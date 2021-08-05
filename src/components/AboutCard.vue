<template>
  <div class="">
    <font-awesome-icon :icon="[ iconType, icon ]" class="text-light fa-5x p-2 icon bg-primary rounded"/>
    <div class="ellipsis d-flex flex-column justify-content-center bg-white shadow mb-5
     p-5">
      <div class="title">
        <h5 class="">{{ title }}</h5>
      </div>
      <div class="detail">
        <small class="">{{ desc }}</small>
      </div>
    </div>
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
      iconType: String,
  }
}
</script>


<style>
.ellipsis{
  height: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon{
  margin: -2rem;
}
</style>