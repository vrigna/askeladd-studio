<template>
  <div class="bg-light min-vh-100 d-flex flex-column justify-content-center" id="about">
    <div class="container">
      <div class="w-75 m-auto">
        <span class="d-block text-center font-weight-bold text-secondary">DESARROLLO MODERNO</span>
        <h2 class="text-center text-primary font-weight-bold" style="font-family: Poppins">Todo lo que necesitas para llevar adelante tu idea</h2>
        <p class="font-weight-light h4">Creemos que muchas veces el universo y la vida une a las personas en determinado momento y al conocernos en un breve tiempo vimos el potencia lde cada uno admirando el sueño en común de tener una organización unica, moderna, flexible y de alto rendimiento. Askeladd es la consecuencia de un grupo unido, apasionado con un objetivo claro de hacer la diferencia y destacar en el mercado.</p>
      </div>
      <div class="row w-75 m-auto text-center">
        <div class="col-lg-6 col-md-12 w-100">
          <AboutCard
            icon="js"
            icon-type="fab"
            title="Front End Development"
            desc="Nos especializamos en el diseño minimalista, versátil y amigable. La primera impresión solo se logra una vez"
          />
        </div>
        <div class="col-lg-6 col-md-12 w-100">
          <AboutCard 
            icon="database"
            icon-type="fas"
            title="Back End Development"
            desc="Contamos con diversos lenguajes de programación, herramientas, software y flujo de información para desarrollar proyectos según la necesidad que se presenta"
          />
        </div>
        <div class="col-lg-6 col-md-12 w-100">
          <AboutCard
            icon="google"
            icon-type="fab"
            title="Google Workspace Platforms"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisis vel convallis mattis ullamcorper semper platea pretium."
          />
        </div>
        <div class="col-lg-6 col-md-12 w-100">
          <AboutCard
            icon="tools"
            icon-type="fas"
            title="Soporte técnico"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisis vel convallis mattis ullamcorper semper platea pretium."
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AboutCard from "../components/AboutCard.vue"



export default {
  name: 'Home',
  components: {
    AboutCard,
  }
}
</script>
