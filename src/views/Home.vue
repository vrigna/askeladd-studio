<template>
  <div class="home">
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
