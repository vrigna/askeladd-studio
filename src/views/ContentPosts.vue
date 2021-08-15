<template>
  <div class="min-vh-100 bg-light" style="padding-top: 100px;">
    <div class="px-5">
      <div class="row">
        <div class="col-3 bg-primary p-0 h-100 text-center rounded">
          <div class="bg-dark rounded-top" style="height: 20px;">
          </div>
          <nav>
            <ul class="list-unstyled">
              <li class="text-uppercase p-3 font-weight-bold">
                <a href="">publicaciones</a>
              </li>
              <li class="text-uppercase p-3 font-weight-bold">
                <a href="">apuntes</a>
              </li>
              <li class="text-uppercase p-3 font-weight-bold">
                <a href="">buenas practicas</a>
              </li>
              <li class="text-uppercase p-3 font-weight-bold">
                <a href="">notas rapidas</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-9">
          <div class="">
            <div class="bg-primary rounded-top" style="height: 20px;"></div>
            <div class="p-4 border rounded-bottom" style="background-color: white;">
              <h2 class="m-0 font-weight-bold text-primary" style="font-family: Poppins;">Estas son nuestras publicaciones</h2>
            </div>
          </div>

          <!-- <div class="mt-4 p-5 filters bg-primary w-100">
            <h2>Filtrar</h2>

          </div> -->

          <div class="row m-0 mt-3">
            <ContentCard 
              author="Carlos Brignardello" 
              title="How to read Member-only Medium Stories for free without being a member?" 
              desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolorum cupiditate aliquam dolore perspiciatis provident, adipisci repellat animi! Nam, ullam quos! Ut provident quis fuga ex dolores magnam possimus fugit."
              url=""
              tag="Vue"
              color="#41B883"
              class="col-6"
            />
            <ContentCard 
              author="Carlos Brignardello" 
              title="How to read Member-only Medium Stories for free without being a member?" 
              desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolorum cupiditate aliquam dolore perspiciatis provident, adipisci repellat animi! Nam, ullam quos! Ut provident quis fuga ex dolores magnam possimus fugit."
              url=""
              tag="Vue"
              color="#41B883"
              class="col-6"
            />

          </div>
        </div>
      </div>
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