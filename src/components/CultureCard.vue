<template>
    <div class="container">
        <div class="row">
            <figure class="col-lg-4 col-md-12 text-center">
                <img 
                    :src="require('@/assets/' + imagen + '')" 
                    :alt="name" 
                    class="img col-3 rounded-circle mb-4" 
                />
            </figure>
            <div class="col-lg-1 d-lg-block d-none"/>
            <div class="col-lg-7 col-md-12">
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
    name:'CultureCard',
    props: {
        imagen: String,
        title: String,
        contents: String,
        name: String,
        job: String
    },
    data() {
        return {
        }
    },
    computed: {
        getBackgroundImage(){
            return `url('@/assets/${imagen}')` 
        }
    }
}
</script>

<style scooped>
.img{
    filter: grayscale(100%);
    max-width:15rem;
}
</style>>

