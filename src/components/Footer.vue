<template>

<footer class="text-center text-white bg-dark">
  <div class="container pt-5 pb-2 text-center" >
    <a href="https://www.youtube.com/watch?v=Jdf9PadGu_c"> 
      <font-awesome-icon :icon="[ 'fab', 'youtube' ]" class="fa-4x px-2"/>
    </a>
    <a href="https://github.com/vrigna/askeladd-studio">
      <font-awesome-icon :icon="[ 'fab', 'github' ]" class="fa-4x px-2"/>
    </a>
    <a href="#">
      <font-awesome-icon :icon="[ 'fab', 'twitter' ]" class="fa-4x px-2"/>
    </a>
    <a href="#">
      <font-awesome-icon :icon="[ 'fab', 'vuejs' ]" class="fa-4x px-2"/>
    </a>
  </div>
  <div class="text-center font text-light p-1 pb-5  font-size">
    2021
    <a class="text-white " href="https://askeladdStudio.com/">Askeladd, inc.</a>
    All Rights Reserved.
  </div>
</footer>
</template>

<script>

export default {
 
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

  .font{
    font-family: 'Poppins';
  }
  a{
    color: white;
  }
  a:hover{
    color: #D1BCFE;
  }

</style>