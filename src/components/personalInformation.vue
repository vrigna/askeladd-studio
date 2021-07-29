<template>
    <div class="container">
        <div class="row">
            <img 
                :src="require('@/assets/' + imagen + '')" 
                :alt="name" 
                class="img col-3 rounded-circle mb-4" 
            />
            <div class="col-1"/>
            <div class="col-7">
                <h4 class="font-weight-bold text-primary display-5 " style="font-family: Poppins">{{ title }}</h4>
                <p>{{ contents }}</p>
                <span class="d-block font-weight-bold" style="font-family: Poppins">{{ name }}</span>
                <p class="text-primary d-block font-weight-bold"> {{ job }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'personalInformation',
    props: {
        imagen: String,
        title: String,
        contents: String,
        name: String,
        job: String
    }
}
</script>

<style scooped>
.img{
    /*Sombra morada --> filter: drop-shadow(16px 16px 20px rgb(64, 44, 139));
    background: rgb(64, 44, 139);
    filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);*/
    filter: drop-shadow(16px 16px 20px rgb(18, 14, 32));
    max-width:15rem;
}
</style>>

