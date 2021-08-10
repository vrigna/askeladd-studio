<template>

    <div class="">
    <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light shadow p-3 bg-body rounded">
        <div class="container fluid justify-content-evenly">
            <img alt="Askeladd logo" src="../assets/logo.png" width="220px">
            
            <div class="d-none d-lg-block " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item font-weight-bold">
                        <router-link to="/" class="nav-link text-primary">Home</router-link>
                    </li>
                    <li class="nav-item font-weight-bold">
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
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