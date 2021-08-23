<template>
  <div class="min-vh-100 bg-light" style="padding-top: 100px;">
    <div class="px-5">
      <div class="row">
        <div class="col-3 p-0 h-100 text-center rounded">
          <nav class="bg-dark">
            <ul class="list-unstyled m-0">
              <li class="text-uppercase lista p-3 font-weight-bold">
                <a href="">publicaciones</a>
              </li>
              <li class="text-uppercase lista p-3 font-weight-bold">
                <a href="">apuntes</a>
              </li>
              <li class="text-uppercase lista p-3 font-weight-bold">
                <a href="">buenas practicas</a>
              </li>
              <li class="text-uppercase lista p-3 font-weight-bold">
                <a href="">notas rapidas</a>
              </li>
            </ul>
          </nav>

          <div class="mt-5 pt-4 bg-dark">
            <h2 class="text-light pb-5 text-capitalize font-weight-bold" style="font-family: Poppins" >categorias</h2>
          <div class="row">
            <div class="col-6 mb-4">
              <div class="ml-4 p-2 font-weight-bold" style="background-color: #28ffbf; border-radius: 100px;">
                <span>Front End</span>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="mr-4 p-2 font-weight-bold" style="background-color: #BCFFB9; border-radius: 100px;">
                <span>Back End</span>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="ml-4 p-2 font-weight-bold" style="background-color: #F7E6AD; border-radius: 100px;">
                <span>IA</span>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="mr-4 p-2 font-weight-bold" style="background-color: #F8A1D1; border-radius: 100px;">
                <span>CRIPTO</span>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="ml-4 p-2 font-weight-bold" style="background-color: #822659; border-radius: 100px;">
                <span>Crecimiento</span>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="mr-4 p-2 font-weight-bold" style="background-color: #B34180; border-radius: 100px;">
                <span>Podcast</span>
              </div>
            </div>
           </div>
          </div>
        </div>
        <div class="col-9">


          <!-- <div class="mt-4 p-5 filters bg-primary w-100">
            <h2>Filtrar</h2>

          </div> -->

          <div class="row m-0">
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
.lista:hover{
  background-color: #734EDC;
}
</style>