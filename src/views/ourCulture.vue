<template>
  <div class="container">
      <h2>Nuestra cultura</h2>
      <h4>Contada por nuestro propio equipo (Terrible Joya)</h4>
      <personalInformation :imagen="imagen_carlos" :title="title_carlos" :contents="contents_carlos" :name="name_carlos" :job="job_carlos" />
      <personalInformation :imagen="imagen_jazzmin" :title="title_jazzmin" :contents="contents_jazzmin" :name="name_jazzmin" :job="job_jazzmin"/>
      <personalInformation :imagen="imagen_josh" :title="title_josh" :contents="contents_josh" :name="name_josh" :job="job_josh"/>
      <personalInformation :imagen="imagen_juan" :title="title_juan" :contents="contents_juan" :name="name_juan" :job="job_juan"/>
      <personalInformation :imagen="imagen_german" :title="title_german" :contents="contents_german" :name="name_german" :job="job_german"/>
      <personalInformation :imagen="imagen_edison" :title="title_edison" :contents="contents_edison" :name="name_edison" :job="job_edison"/>

  </div>
</template>

<script>

import personalInformation from '@/components/personalInformation.vue'
import axios from 'axios'

export default {
    name: 'ourCulture',
    data(){
        return{
            title_carlos: null,
            contents_carlos: null,
            name_carlos: null,
            job_carlos: null,
            imagen_carlos: null,

            title_jazzmin: null,
            contents_jazzmin: null,
            name_jazzmin: null,
            job_jazzmin: null,
            imagen_jazzmin: null,

            title_josh: null,
            contents_josh: null,
            name_josh: null,
            job_josh: null,
            imagen_josh: null,

            title_juan: null,
            contents_juan: null,
            name_juan: null,
            job_juan: null,
            imagen_juan: null,

            title_german: null,
            contents_german: null,
            name_german: null,
            job_german: null,
            imagen_german: null,

            title_edison: null,
            contents_edison: null,
            name_edison: null,
            job_edison: null,
            imagen_edison: null
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
        this.imagen_carlos = datos.personal[0].imagen

        this.title_jazzim = datos.personal[1].title
        this.contents_jazzim = datos.personal[1].contents
        this.name_jazzim = datos.personal[1].name
        this.job_jazzim = datos.personal[1].job
        this.imagen_jazzim = datos.personal[1].imagen

        this.title_josh = datos.personal[2].title
        this.contents_josh = datos.personal[2].contents
        this.name_josh = datos.personal[2].name
        this.job_josh = datos.personal[2].job
        this.imagen_josh = datos.personal[2].imagen

        this.title_juan = datos.personal[3].title
        this.contents_juan = datos.personal[3].contents
        this.name_juan = datos.personal[3].name
        this.job_juan = datos.personal[3].job
        this.imagen_juan = datos.personal[3].imagen

        this.title_german = datos.personal[4].title
        this.contents_german = datos.personal[4].contents
        this.name_german = datos.personal[4].name
        this.job_german = datos.personal[4].job
        this.imagen_german = datos.personal[4].imagen

        this.title_edison = datos.personal[5].title
        this.contents_edison = datos.personal[5].contents
        this.name_edison = datos.personal[5].name
        this.job_edison = datos.personal[5].job
        this.imagen_edison = datos.personal[5].imagen

    }


}
</script>

<style>

</style>