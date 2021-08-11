<template>
  <div class="bg-light d-flex align-items-center min-vh-100" id="content">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <br><br>
          <div class="contenedor-img">
            <!-- 

            <img 
                :src="require('@/assets/contentimg.jpeg')" 
                :alt="name" 
                class="h-60 w-100 mb-4 rounded img-content" 
            >
            -->
            
            <div :style="notionContent" style="height: 350px;background-size: contain; background-repeat: round;">
              <div class="bg-dark h-100" style="opacity: .5;">
                <div class="h-50 bg-dark">

                </div>
                <div class="px-5 text-light">
                  <h3 >Contenido</h3>
                  <p >Repositorio de contenido, con aportes de cada miembro de Askeladd. Aprende con nosotros!</p>
                  
                  <p class="font-weight-bold">Accede al contenido en Notion</p>

                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="col-lg-6 col-md-12">
          <br><br>
          <h3 class="mb-3 text-primary d-block font-weight-bold" style="font-family: Poppins"> Desde Askeladd hacia la comunidad</h3>
          <p>En Askeladd nos preocupamos por documentar procesos, crear apuntes guía, y crear contenido en forma de post o video, que sirva tanto a nuesto equipo interno como a cualquier persona que lo necesite.</p>
          <p>Es por eso que habilitamos un <b>Notion</b> abierto, en el que podrás encontrar una sección de contenido con apuntes y  paso a pasos. Una biblioteca con libros del mejor nivel y sobre muchos géneros. Y por último, encontraras recursos utiles para la etapa de desarrollo y diseño. Esperamos que lo disfrutes! </p>
          <div class="row">
              <div class="col-md-6 col-12">
                <hr>
                <h4 class="mb-3 text-primary d-block font-weight-bold" style="font-family: Poppins"> Apuntes </h4>
                <h3 class="mb-3 d-block font-weight-bold" style="font-family: Poppins"> 24</h3>
                <br>
                <hr>
                <h4 class="mb-3 text-primary d-block font-weight-bold" style="font-family: Poppins"> Post </h4>
                <h3 class="mb-3 d-block font-weight-bold" style="font-family: Poppins"> 36</h3>
              </div>
              <div class="col-6">
                <hr>
                <h4 class="mb-3 text-primary d-block font-weight-bold" style="font-family: Poppins"> Trabajadores </h4>
                <h3 class="mb-3 d-block font-weight-bold" style="font-family: Poppins"> 6 </h3>
                <br>
                <hr>
                <h4 class="mb-3 text-primary d-block font-weight-bold" style="font-family: Poppins"> Proyectos </h4>
                <h3 class="mb-3 d-block font-weight-bold" style="font-family: Poppins"> 2</h3>
              </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import notionContent from '@/assets/background/contentimg.jpeg'

export default {
  data() {
    return {
      notionContent: `background-image: url(${notionContent})`,
    }
  },
}
</script>

<style scooped>
hr {
  color: #333;
  background-color: #333; 
}
</style>