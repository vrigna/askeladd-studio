<template>
    <div class="text-dark my-5 px-4">
        <img 
            :src="require('@/assets/' + faceName + '')" 
            :alt="name" 
            class="h-100 w-100 rounded-circle mb-4" 
            style="height: 100px;"
        >
        <h3 class="text-center mb-3" style="font-family: Poppins">{{ name }}</h3>
        <span class="text-secondary text-center d-block font-weight-bold" style="font-family: Poppins">{{ rol }}</span>
        <!-- 
            <a class="p-1 bg-primary text-light" :href="url">Contactar</a>
         -->
    </div>
</template>

<script>
export default {
    props: {
        faceName: String,
        name: String,
        rol: String,
        url: String,
    }
}
</script>

<style>

</style>