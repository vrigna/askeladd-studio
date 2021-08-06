<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 bg-body rounded">
    <div class="container fluid justify-content-evenly">
        <img alt="Askeladd logo" src="../assets/logo.png" width="220px">
        
    <div class="d-none d-lg-block " id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item font-weight-bold">
                <a class="nav-link text-primary" href="#">Home</a>
            </li>
            <li class="nav-item font-weight-bold">
                <a class="nav-link " href="#about">About</a>
            </li>
            <li class="nav-item font-weight-bold">
                <a class="nav-link" href="#team">Team</a>
            </li>
            <li class="nav-item font-weight-bold">
                <a class="nav-link" href="#culture">Culture</a>
            </li>
            <li class="nav-item font-weight-bold">
                <a class="nav-link" href="#content">Content</a>
            </li>
            <li class="nav-item font-weight-bold">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

  .navbar {
    font-family: 'Poppins';
  }
</style>