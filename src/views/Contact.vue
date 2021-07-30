<template>
  <div class="vh-100 d-flex flex-column justify-content-center bg-light">
    <div class="row container">
      <h1>Contact</h1>
      <contacto class="col-5 text-center"
        :titleContact="titulo1"
        :infoContact="descripcion1"
        :contactNumber="numero1" 
        :contactSchedule="horario1" 
        :contactEmail="mail1" 
        
      />
      <div class="col-2"></div>
      <contacto class="col-5 text-center"
        :titleContact="titulo2"
        :infoContact="descripcion2"
        :contactNumber="numero2" 
        :contactSchedule="horario2" 
        :contactEmail="mail2" 
      />
    </div>
    
  </div>
</template>

<script>
import contacto from '@/components/contacto.vue'
import axios from 'axios'

export default {
    name:"Contact",

    data(){
      return{
        titulo1: null,
        descripcion1: null,
        numero1: null,
        horario1: null,
        mail1: null,

        titulo2: null,
        descripcion2: null,
        numero2: null,
        horario2: null,
        mail2: null

      }
    },
    component:{
      contacto
    },
    async mounted() {
        let datos = await axios.get('api/infoContacto.json')
        datos = datos.data

        console.log(datos.data)

        this.titulo1 = datos.info[0].subtitle
        this.descripcion1 = datos.info[0].contents
        this.numero1 = datos.info[0].numero
        this.horario1 = datos.info[0].horario
        this.mail1 = datos.info[0].mail

        this.titulo2 = datos.info[1].subtitle
        this.descripcion2 = datos.info[1].contents
        this.numero2 = datos.info[1].numero
        this.horario2 = datos.info[1].horario
        this.mail2 = datos.info[1].mail
    }
}
</script>

<style>

</style>