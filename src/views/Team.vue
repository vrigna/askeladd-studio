<template>
  <div class="bg-light d-flex align-items-center text-dark py-5">
    <div class="container">
      <div class="">
        <h2 class="font-weight-bold text-primary display-4 text-center" style="font-family: Poppins">Conoce a nuestro Team</h2>
        <p class="text-center h4" style="font-family: Poppins">Nuestra experiencia se ha construido con curiosidad, entusiasmo y perseverancia.</p>
      </div>
      <div class="row">
        <div class="col-4">
          <TeamCard faceName="carlos.png" name="Carlos Brignardello" rol="Full Stack Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="edison.png" name="Edison Vasquez" rol="Director de Gestión"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="josh2.png" name="David Carrizo" rol="Back End Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="juan.png" name="Juan Vasquez" rol="Front End Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="german2.png" name="German Tabilo" rol="Back End Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="jazz2.png" name="Jasmín Trujillo" rol="Full Stack Developer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from "../components/TeamCard.vue"



export default {
  name: 'Home',
  components: {
    TeamCard,
  }
}
</script>
