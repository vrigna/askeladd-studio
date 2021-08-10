<template>

  <div class="d-flex min-vh-100 align-items-center bg-light pb-5" id="contact">

    <div class="container">
      <br>
      <h2 class="font-weight-bold text-primary display-4 " style="font-family: Poppins">Contacto</h2>
      <br><br>
      <div class="row">

        <div class="col-md-6">
          <h4> Contrátanos </h4>
          <p> Si quieres información, asesoramiento sobre nuestros servicios o algún proyecto que busques digitalizar. </p>
          <div>
              <span> 
                  <a href="#">
                  <font-awesome-icon :icon="[ 'fab', 'phone-alt' ]" class="fa-4x px-2"/>
                  </a>
                  + 56 9 75146568
                  
              </span>
              <p> 
                  <b>Lunes</b> 
                  a 
                  <b> Viernes </b> 
                  de 
                  <span class="text-secondary font-weight-bold" style="font-family: Poppins"> 09:00 hrs</span>
                  a 
                  <span class="text-secondary font-weight-bold" style="font-family: Poppins"> 18:00 hrs </span>
              </p>
              <span> 
                  <font-awesome-icon :icon="[ 'fab', 'envelope' ]" class="fa-4x px-2"/>
                    contact@askeladd.com
              </span>
          </div>
        </div>
        <div class="col-md-6">
          <h4> Asistencia técnica </h4>
          <p> Si ya estas trabajando con nosotros puedes contactar con el equipo de soporte o con el equipo de desarrollo.</p>
          <div>
              <span> 
                  <a href="#">
                  <font-awesome-icon :icon="[ 'fab', 'phone-alt' ]" class="fa-4x px-2"/>
                  </a>
                  + 56 9 74563823
                  
              </span>
              <p> 
                  <b>Lunes</b> 
                  a 
                  <b> Domingo </b> 
                  de 
                  <span class="text-secondary font-weight-bold" style="font-family: Poppins"> 09:00 hrs</span>
                  a 
                  <span class="text-secondary font-weight-bold" style="font-family: Poppins"> 20:00 hrs </span>
              </p>
              <span> 
                  <font-awesome-icon :icon="[ 'fab', 'envelope' ]" class="fa-4x px-2"/>
                    support@askeladd.com
              </span>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>

export default {
    name:"Contact",

    data(){
      return{

      }
    },
    components:{
    },

}
</script>

<style>

</style>