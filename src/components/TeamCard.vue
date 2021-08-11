<template>
    <div class="text-dark my-5 px-4">
        <a :href="github ? `https://www.github.com/${github}` : 'https://github.com'" target="_blank">
            <img 
                :src="require('@/assets/profile/' + faceName + '')" 
                :alt="name" 
                class="h-100 w-100 rounded-circle mb-4" 
                style="height: 100px;"
            >
        </a>
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
        github: String,
    }
}
</script>

<style>

</style>