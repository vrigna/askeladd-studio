<template>
  <div class="home">

    <main id="#">
      <div class="bg-light">
        <div class="row min-vh-100 container-fluid m-0 p-0">
          <div class="col-lg-6 col-md-12 d-flex align-items-center">
            <div class="mx-auto main__container">
              <h1 class="font-weight-bold" style="font-family: Poppins">Digitaliza tu <span class=" text-primary">sandia</span></h1>
              <p>Somos un estudio de desarrollo digital basado en las nuevas tecnologías, conformado de un equipo de expertos apasionados por el diseño, la programación y la creatividad preparados para construir tú idea.</p>
              <p>En <strong>Askeladd Studio</strong> desarrollamos soluciones unicas e innovadoras combinando la ingeniería del desarrollo y la creatividad del diseño con una cultura unica de libertad creativa y continuo aprendizaje.</p>
              <div class="d-md-flex justify-content-between">
                <a href="" class="bg-primary text-white p-4 btn_rounded text-decoration-none h4-md d-block text-center">Sobre Nosotros</a>
                <a href="" class="bg-secondary text-white p-4 btn_rounded text-decoration-none h4-md d-block text-center my-md-0 my-3">Contactanos</a>
              </div>

            </div>
          </div>
          <div class="col-lg-6 d-none d-lg-block p-0">
            <div :style="bgMainImage" style="background-position: center; background-size: cover;" class="w-100 h-100 bg-primary">
              <div class="w-100 h-100 bg-primary" style="opacity: 0.5"></div>
            </div>
            <!-- 
              <img :src="require('@/assets/main.jpg')" style="background-image: url('@/assets/main.jpg')" class="w-100 h-100 bg-primary"/>
             -->
          </div>
        </div>
      </div>
    </main>
    <Sandia />
    <About />
    <Team />
    <Culture />
    <Content />
    <Footer />
  </div>
</template>

<script>
import About from '@/views/About.vue'
import Sandia from '@/views/Sandia.vue'
import Content from '@/views/ContentView.vue'
import Team from '@/views/Team.vue'
import Culture from '@/views/Culture.vue'
import Footer from '@/components/Footer.vue'
import MainImage from '@/assets/main.jpg'

export default {
  name: 'Home',
  components: {
    About,
    Sandia,
    Team,
    Culture,
    Content,
    Footer,
  },
  data() {
    return {
      bgMainImage: `background-image: url(${MainImage})`,
    }
  },
}
</script>
<style scoped>
.main__container{
  width: 55%;
}

@media only screen and (max-width: 1440px) {
   .main__container{
     width: 75%;
   }
}
@media only screen and (max-width: 1024px) {
   .main__container{
     width: 90%;
   }
}
@media only screen and (max-width: 768px) {
   .main__container{
   }
}
@media only screen and (max-width: 425px) {
   .main__container{
   }
}
@media only screen and (max-width: 320px) {
   .main__container{
   }
}

.btn_rounded{
  border-radius: 100px;
}

</style>