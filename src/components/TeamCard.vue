<template>
    <div class="">
        <img :src="require('@/assets/' + faceName + '')" alt="" class="w-100" style="height: 100px;">
        <h3>{{ name }}</h3>
        <span class="text-secondary">{{ rol }}</span>
        <a class="d-block p-3 bg-primary text-light" :href="url">Contactar</a>
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