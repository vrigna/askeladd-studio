<template>
  <div class="d-flex flex-column justify-content-center bg-light">
      <div class="container">
        <h2 class="font-weight-bold text-primary display-4 text-center" style="font-family: Poppins">Nuestra cultura</h2>
        <h4 class="text-center" style="font-family: Poppins">Contada por nuestro propio equipo (Terrible Joya)</h4>
        <br><br>
        <personalInformation 
            :imagen="face_carlos2"
            :title="title_carlos"
            :contents="contents_carlos" 
            :name="name_carlos" 
            :job="job_carlos" />

        <br>

        <personalInformation 
            :imagen="face_jazzmin"
            :title="title_jazzmin" 
            :contents="contents_jazzmin" 
            :name="name_jazzmin" 
            :job="job_jazzmin"/>

        <br>

        <personalInformation 
            :imagen="face_josh"
            :title="title_josh" 
            :contents="contents_josh" 
            :name="name_josh" 
            :job="job_josh"/>

        <br>    

        <personalInformation 
            :imagen="face_juan2"
            :title="title_juan" 
            :contents="contents_juan" 
            :name="name_juan" 
            :job="job_juan"/>

        <br>

        <personalInformation 
            :imagen="face_german"
            :title="title_german" 
            :contents="contents_german" 
            :name="name_german" 
            :job="job_german"/>

        <br>
        
        <personalInformation 
            :imagen="face_edison"
            :title="title_edison" 
            :contents="contents_edison" 
            :name="name_edison" 
            :job="job_edison"/>
      </div>

  </div>
</template>

<script>

import personalInformation from '@/components/personalInformation.vue'
import axios from 'axios'

export default {
    name: 'Culture',

    data(){
        return{
            title_carlos: null,
            contents_carlos: null,
            name_carlos: null,
            job_carlos: null,
            imagen_carlos: null,
            faceName_carlos: null,

            title_jazzmin: null,
            contents_jazzmin: null,
            name_jazzmin: null,
            job_jazzmin: null,
            imagen_jazzmin: null,
            faceName_jazzmin: null,

            title_josh: null,
            contents_josh: null,
            name_josh: null,
            job_josh: null,
            imagen_josh: null,
            faceName_josh: null,

            title_juan: null,
            contents_juan: null,
            name_juan: null,
            job_juan: null,
            imagen_juan: null,
            faceName_juan: null,

            title_german: null,
            contents_german: null,
            name_german: null,
            job_german: null,
            imagen_german: null,
            faceName_german: null,

            title_edison: null,
            contents_edison: null,
            name_edison: null,
            job_edison: null,
            imagen_edison: null,
            faceName_edison: null
        }
    },

    components: {
        personalInformation
    },
    
    async mounted() {
        let datos = await axios.get('api/personal.json')
        datos = datos.data

        this.title_carlos = datos.personal[0].title
        this.contents_carlos = datos.personal[0].contents
        this.name_carlos = datos.personal[0].name
        this.job_carlos = datos.personal[0].job
        this.face_carlos = datos.personal[0].imagen
        this.face_carlos2 = datos.personal[0].imagen2

        this.title_jazzmin = datos.personal[1].title
        this.contents_jazzmin = datos.personal[1].contents
        this.name_jazzmin = datos.personal[1].name
        this.job_jazzmin = datos.personal[1].job
        this.face_jazzmin = datos.personal[1].imagen
        this.face_jazzmin2 = datos.personal[1].imagen2

        this.title_josh = datos.personal[2].title
        this.contents_josh = datos.personal[2].contents
        this.name_josh = datos.personal[2].name
        this.job_josh = datos.personal[2].job
        this.face_josh = datos.personal[2].imagen
        this.face_josh2 = datos.personal[2].imagen2

        this.title_juan = datos.personal[3].title
        this.contents_juan = datos.personal[3].contents
        this.name_juan = datos.personal[3].name
        this.job_juan = datos.personal[3].job
        this.face_juan = datos.personal[3].imagen
        this.face_juan2 = datos.personal[3].imagen2

        this.title_german = datos.personal[4].title
        this.contents_german = datos.personal[4].contents
        this.name_german = datos.personal[4].name
        this.job_german = datos.personal[4].job
        this.face_german = datos.personal[4].imagen
        this.face_german2 = datos.personal[4].imagen2

        this.title_edison = datos.personal[5].title
        this.contents_edison = datos.personal[5].contents
        this.name_edison = datos.personal[5].name
        this.job_edison = datos.personal[5].job
        this.face_edison = datos.personal[5].imagen

    }


}
</script>

<style>

</style>