<template>
  <div class="min-vh-100 bg-light" style="padding-top: 100px;">
    <div class="container">
      <div class="bg-primary rounded-top" style="height: 20px;"></div>
      <div class="p-4 border rounded-bottom" style="background-color: white;">
        <h2 class="m-0 font-weight-bold text-primary" style="font-family: Poppins;">Contenido para la comunidad</h2>
      </div>
      <ContentCard 
        author="Carlos Brignardello" 
        title="How to read Member-only Medium Stories for free without being a member?" 
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolorum cupiditate aliquam dolore perspiciatis provident, adipisci repellat animi! Nam, ullam quos! Ut provident quis fuga ex dolores magnam possimus fugit."
        url=""
        tag="Vue"
        color="#41B883"
      />
    </div>
  </div>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'

export default {
  components: {
    ContentCard,
  }
}
</script>

<style>

</style>