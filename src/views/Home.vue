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
            <div class="w-100 h-100 bg-primary"></div>
          </div>
        </div>
      </div>
    </main>

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
import Contact from '@/views/Contact.vue'
import Content from '@/views/ContentView.vue'
import Culture from '@/views/Culture.vue'
import Team from '@/views/Team.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    About,
    Team,
    Culture,
    Content,
    Contact,
    Footer,
  }
}
</script>
