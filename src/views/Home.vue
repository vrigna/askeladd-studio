<template>
  <div class="home">

    <main>
      <div class="bg-light">
        <div class="row vh-100">
          <div class="col-6 d-flex align-items-center">
            <div class="mx-auto w-50">
              <h1>Digitaliza tu sandia</h1>
              <p>Somos un estudio de desarrollo digital basado en las nuevas tecnologías, conformado de un equipo de expertos apasionados por el diseño, la programación y la creatividad preparados para construir tú idea.</p>
              <p>En <strong>Askeladd Studio</strong> desarrollamos soluciones unicas e innovadoras combinando la ingeniería del desarrollo y la creatividad del diseño con una cultura unica de libertad creativa y continuo aprendizaje.</p>
              <div class="d-flex justify-content-between">
                <a href="" class="bg-primary text-white p-4 rounded">Sobre Nosotros</a>
                <a href="" class="bg-secondary text-white p-4">Contactanos</a>
              </div>

            </div>
          </div>
          <div class="col-6">
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
    <Contact />
    <Footer />
  </div>
</template>

<script>
import About from '@/views/About.vue'
import Sandia from '@/views/Sandia.vue'
import Content from '@/views/ContentView.vue'
import Team from '@/views/Team.vue'
import Culture from '@/views/Culture.vue'
import Contact from '@/views/Contact.vue'
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
    Contact,
    Footer,
  },
  data() {
    return {
      bgMainImage: `background-image: url(${MainImage})`,
    }
  },
}
</script>
