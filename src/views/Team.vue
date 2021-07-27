<template>
  <div class="bg-light vh-100 d-flex align-items-center">
    <div class="container">
      <div class="">
        <h2>Conoce a nuestro Team</h2>
        <p>Nuestra experiencia se ha construido con curiosidad, entusiasmo y perseverancia.</p>
      </div>
      <div class="row">
        <div class="col-4">
          <TeamCard faceName="logo.png" name="Carlos Brignardello" rol="Full Stack Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="logo.png" name="Carlos Brignardello" rol="Full Stack Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="logo.png" name="Carlos Brignardello" rol="Full Stack Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="logo.png" name="Carlos Brignardello" rol="Full Stack Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="logo.png" name="Carlos Brignardello" rol="Full Stack Developer"/>
        </div>
        <div class="col-4">
          <TeamCard faceName="logo.png" name="Carlos Brignardello" rol="Full Stack Developer"/>
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
