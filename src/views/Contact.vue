<template>

  <div class="vh-100 justify-content-center bg-light">

    <div class="container">
      <br>
      <h2 class="font-weight-bold text-primary display-4 " style="font-family: Poppins">Contacto</h2>
      <br><br>
      <div class="row">

        

        <contacto class="col-5 "
          :titleContact="titulo1"
          :infoContact="descripcion1"
          :contactNumber="numero1" 
          :primerDia="primerDia1"
          :ultimoDia="ultimoDia1"
          :horaInicio="horaInicio1"
          :horaFinal="horaFinal1"
          :contactEmail="mail1" 
        />

        <div class="col-2"></div>

        <contacto class="col-5 "
          :titleContact="titulo2"
          :infoContact="descripcion2"
          :contactNumber="numero2" 
          :primerDia="primerDia2"
          :ultimoDia="ultimoDia2"
          :horaInicio="horaInicio2"
          :horaFinal="horaFinal2"
          :contactEmail="mail2" 
        />

      </div>
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
        mail1: null,
        primerDia1: null,
        ultimoDia1: null,
        horaInicio1: null,
        horaFinal1: null,

        titulo2: null,
        descripcion2: null,
        numero2: null,
        mail2: null,
        primerDia2: null,
        ultimoDia2: null,
        horaInicio2: null,
        horaFinal2: null,

      }
    },

    components:{
      contacto
    },

    async mounted() {
        let datos = await axios.get('api/infoContacto.json')
        datos = datos.data

        console.log(datos.data)

        this.titulo1 = datos.info[0].subtitle
        this.descripcion1 = datos.info[0].contents
        this.numero1 = datos.info[0].numero
        this.mail1 = datos.info[0].mail
        this.primerDia1 = datos.info[0].diaInicio
        this.ultimoDia1 = datos.info[0].diaFinal
        this.horaInicio1 = datos.info[0].horaInicio
        this.horaFinal1 = datos.info[0].horaFinal

        this.titulo2 = datos.info[1].subtitle
        this.descripcion2 = datos.info[1].contents
        this.numero2 = datos.info[1].numero
        this.mail2 = datos.info[1].mail
        this.primerDia2 = datos.info[1].diaInicio
        this.ultimoDia2 = datos.info[1].diaFinal
        this.horaInicio2 = datos.info[1].horaInicio
        this.horaFinal2 = datos.info[1].horaFinal
    }
}
</script>

<style>

</style>