<template>

    <div class="">
    <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light shadow p-3 bg-body rounded">
        <div class="container fluid justify-content-evenly">
            <img alt="Askeladd logo" src="../assets/logo.png" height="40px">
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-none d-lg-block " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item font-weight-bold">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item font-weight-bold">
                        <router-link to="/services" class="nav-link">Servicios</router-link>
                    </li>
                    <!-- <li class="nav-item font-weight-bold">
                        <router-link to="/works" class="nav-link">Trabajos</router-link>
                    </li> -->
                    <li class="nav-item font-weight-bold">
                        <router-link to="/culture" class="nav-link">Cultura</router-link>
                    </li>
                    <li class="nav-item font-weight-bold">
                        <router-link to="/content" class="nav-link">Contenido</router-link>
                    </li>
                    <li class="nav-item font-weight-bold">
                        <router-link to="/contact" class="nav-link">Contacto</router-link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>


    </div>
</template>

<script>
export default {

}
</script>

<style>
   
</style>