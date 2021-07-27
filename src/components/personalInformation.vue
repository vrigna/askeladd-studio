<template>
    <div class="row container">
        <img src="" class="img-thumbnail img col-3" alt="..."/>
        <div class="col-2"/>
        <div class="col-7">
            <h4>{{ title }}</h4>
            <p>{{ contents }}</p>
            <p>{{ name }}</p>
            <p>{{ job }}</p>
        </div>
    </div>

</template>

<script>
export default {
    name:"personalInformation",
    props: {
        title: String,
        contents: String,
        name: String,
        job: String
    }

}
</script>

<style>

</style>