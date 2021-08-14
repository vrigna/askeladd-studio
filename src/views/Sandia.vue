<template>
  <div class="vh-100 bg-dark font">
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="rectangulo backg border-radius rounded w-100 align-items-center mt-5">
        <div class="row m-5 ">
            <div class="col d-lg-block d-none">
              <img 
                  :src="require('@/assets/Sandias.png')"
                  class="flotante"
                  style="height: 70vh; margin: -12rem 0"
              >
            </div>
            <div class="col">
              <div class="flotante w-75">
                <div class="bg-dark text-white button-top p-2 text-center pb-0 w-75 d-flex flex-row align-items-center">
                  <div class="icono bg-secondary ml-2 mr-3 text-dark">
                    <font-awesome-icon :icon="[ 'fas', 'lightbulb' ]" class="fa-3x px-2 mx-3"/>
                  </div>
                  <p class="mb-0">activa la creatividad</p>
                </div>
              </div>
              <h1 class="text-white text-right">Digitaliza tu sandia</h1>
              <h2 class="text-primary text-right">la explicación</h2>
              <p class="mt-4 text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur, consectetur. Expedita, aperiam quisquam sapiente qui 
                nostrum et ut tempora magnam repudiandae! Enim culpa atque quas 
                neque! Dolorum eveniet commodi impedit.</p>
              <div class="flotante d-flex justify-content-end container ">
                <div class="bg-secondary button-bottom p-2 text-center w-75 d-flex flex-row align-items-center">
                  <div class="icono bg-dark ml-2 mr-3 text-secondary">
                    <font-awesome-icon :icon="[ 'fas', 'lightbulb' ]" class="fa-3x px-2 mx-3"/>
                  </div>
                  <p class="mb-0">activa la creatividad</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

  .icono {
    border-radius: 2em;
  }
  .font{
    font-family: 'Poppins';
  }
  .flotante {
    position: absolute;
  }
  .button-top {
    border-radius: 2em;
    margin-top: -6rem;
    box-shadow: 2px 2px 5px rgb(14, 14, 14);
  }
  .button-bottom {
    border-radius: 2em;
    margin-top: 2rem;
    box-shadow: 2px 2px  5px rgb(14, 14, 14);
  }
  .backg{
    background-color: #3C3B3F;
    min-height: 350px;
  }
</style>