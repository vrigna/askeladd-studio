<template>
  <div :style="askeladdBackground" class="d-flex flex-column justify-content-center bg-light" id="culture">
      <div class="container bg-light">
        <h2 class="font-weight-bold text-primary display-4 text-center" style="font-family: Poppins">Nuestra cultura</h2>
        <h4 class="text-center" style="font-family: Poppins">Contada por nuestro propio equipo</h4>
        <br><br>

            
            <div class="">
                <div class="row">
                    <figure class="col-lg-4 col-md-12 text-center">
                        <div :style="carlosProfile" class="bg-primary rounded-circle img-profile">
                            <div class="w-100 h-100 bg-primary rounded-circle" style="opacity: 0.5"></div>
                        </div>
                    </figure>
                    <div class="col-lg-1 d-lg-block d-none"/>
                    <div class="col-lg-7 col-md-12">
                        <h4 class="font-weight-bold text-primary display-5 " style="font-family: Poppins">PER<strong>S</strong>EVERANCIA</h4>
                        <p>Los unicos capaces de marcar una diferencia significativa somos nosotros, perseguimos la superación personal y cuando creemos que la alcanzamos encontramos una nueva razón para no detenernos. En Askeladd buscamos el perfeccionamiento mediante la empatia, el respeto y la formación continua de cada uno de nuestros integrantes.</p>
                        <span class="d-block font-weight-bold" style="font-family: Poppins">Carlos Brignardello</span>
                        <p class="text-primary d-block font-weight-bold"> Lider Tecnico</p>
                    </div>
                </div>
            </div>

            <br>
            <div class="">
                <div class="row">
                    <figure class="col-lg-4 col-md-12 text-center">
                        <div :style="jazzProfile" class="bg-primary rounded-circle img-profile">
                                <div class="w-100 h-100 bg-primary rounded-circle" style="opacity: 0.5"></div>
                        </div>
                    </figure>
                    <div class="col-lg-1 d-lg-block d-none"/>
                    <div class="col-lg-7 col-md-12">
                        <h4 class="font-weight-bold text-primary display-5 " style="font-family: Poppins">KEEP LE<strong>A</strong>RN</h4>
                        <p>En el mundo TI es fundamental reinventarse conforme a los avances y nuevas tecnologías que surgen, es por eso que en Askeladd creemos que la mejor manera de apuntar a la excelencia y la innovación, es, mantenerse curioso y aprendiendo constantemente. Apoyamos la idea de compartir conocimiento y avanzar en conjunto.</p>
                        <span class="d-block font-weight-bold" style="font-family: Poppins">Jazmin Trujillo</span>
                        <p class="text-primary d-block font-weight-bold">Desarrolladora</p>
                    </div>
                </div>
            </div>
            <br>

            <div class="">
                <div class="row">
                    <figure class="col-lg-4 col-md-12 text-center">
                        <div :style="davidProfile" class="bg-primary rounded-circle img-profile">
                            <div class="w-100 h-100 bg-primary rounded-circle" style="opacity: 0.5"></div>
                        </div>
                    </figure>
                    <div class="col-lg-1 d-lg-block d-none"/>
                    <div class="col-lg-7 col-md-12">
                        <h4 class="font-weight-bold text-primary display-5 " style="font-family: Poppins">CO<strong>N</strong>FIANZA</h4>
                        <p>Puedes tener seguridad de que todo resultará tal y mejor de lo que se espera cuando trabajas con las personas correctas. En Askeladd respaldamos apasionadamente nuestros proyectos; vive la experiencia de un ambiente sin igual, con resultados únicos impulsados por la cultura de nuestro equipo.</p>
                        <span class="d-block font-weight-bold" style="font-family: Poppins">David Carrizo</span>
                        <p class="text-primary d-block font-weight-bold">Cientifico de Datos</p>
                    </div>
                </div>
            </div>
            <br>

            <div class="">
                <div class="row">
                    <figure class="col-lg-4 col-md-12 text-center">
                        <div :style="juanProfile" class="bg-primary rounded-circle img-profile">
                            <div class="w-100 h-100 bg-primary rounded-circle" style="opacity: 0.5"></div>
                        </div>
                    </figure>
                    <div class="col-lg-1 d-lg-block d-none"/>
                    <div class="col-lg-7 col-md-12">
                        <h4 class="font-weight-bold text-primary display-5 " style="font-family: Poppins">CREATIVI<strong>D</strong>AD</h4>
                        <p>La curiosidad, la incertidumbre de no saber que vendra por delante y poder descubrir como mejorar los procesos para planificar soluciones que generen nuevas oportunidades, nos permite consolidar nuestra creatividad. En Askeladd podemos crecer y madurar conocimiento por medio del trabajo en equipo.</p>
                        <span class="d-block font-weight-bold" style="font-family: Poppins">Juan Vasquez</span>
                        <p class="text-primary d-block font-weight-bold">Desarrollador</p>
                    </div>
                </div>
            </div>
            <br>

            <div class="">
                <div class="row">
                    <figure class="col-lg-4 col-md-12 text-center">
                        <div :style="germanProfile" class="bg-primary rounded-circle img-profile">
                            <div class="w-100 h-100 bg-primary rounded-circle" style="opacity: 0.5"></div>
                        </div>
                    </figure>
                    <div class="col-lg-1 d-lg-block d-none"/>
                    <div class="col-lg-7 col-md-12">
                        <h4 class="font-weight-bold text-primary display-5 " style="font-family: Poppins">PRODUCT<strong>I</strong>VIDAD</h4>
                        <p>Para ser productivo hay que tener el compromiso de formular cambios, generarlos y luego pulirlos, apuntando siempre a la excelencia en base a la disciplina. Askeladd permite llegar a la verdad mediante investigación, utilizando procesos logicos, ordenados y claros. Buscando siempre retro alimentar a los demás.</p>
                        <span class="d-block font-weight-bold" style="font-family: Poppins">German Tabilo</span>
                        <p class="text-primary d-block font-weight-bold">Desarrollador</p>
                    </div>
                </div>
            </div>
            <br>

            <div class="">
                <div class="row">
                    <figure class="col-lg-4 col-md-12 text-center">
                        <div :style="edisonProfile" class="bg-primary rounded-circle img-profile">
                            <div class="w-100 h-100 bg-primary rounded-circle" style="opacity: 0.5"></div>
                        </div>
                    </figure>
                    <div class="col-lg-1 d-lg-block d-none"/>
                    <div class="col-lg-7 col-md-12">
                        <h4 class="font-weight-bold text-primary display-5 " style="font-family: Poppins">INNOV<strong>A</strong>CIÓN</h4>
                        <p>La creatividad, el conocimiento y la inspiración son las herramientas que nos permiten construir el camino hacia el futuro que queremos crear. En Askeladd tenemos el talento para transformar tu negocio en lo que buscas. Si tú puedes imaginarlo, nosotros podemos crearlo.                                                                                                             - “No tengo talentos especiales, yo sólo soy apasionadamente curioso”.</p>
                        <span class="d-block font-weight-bold" style="font-family: Poppins">Edison Vasquez</span>
                        <p class="text-primary d-block font-weight-bold">Jefe industrial</p>
                    </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
import carlosProfile from '@/assets/profile/carlos2.png'
import jazzProfile from '@/assets/profile/jazz.png'
import davidProfile from '@/assets/profile/josh.png'
import juanProfile from '@/assets/profile/juan2.png'
import germanProfile from '@/assets/profile/german.png'
import edisonProfile from '@/assets/profile/edison.png'
import askeladdBackground from '@/assets/background/askeladd-background.png'

export default {
    name: 'Culture',

    data(){
        return{
            carlosProfile: `background-image: url(${carlosProfile})`,
            jazzProfile: `background-image: url(${jazzProfile})`,
            davidProfile: `background-image: url(${davidProfile})`,
            juanProfile: `background-image: url(${juanProfile})`,
            germanProfile: `background-image: url(${germanProfile})`,
            edisonProfile: `background-image: url(${edisonProfile})`,
            askeladdBackground: `background-image: url(${askeladdBackground})`,
        }
    },

    components: {
    },
    
}
</script>

<style scoped>
    .img-profile{
        background-position: center; background-size: cover; width: 250px; height: 250px;
        display: block;
        margin: 0 auto;
    }
    strong{
        color: #D1BCFE;
    }
</style>