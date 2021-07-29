<template>
    <div>
        <h4> {{ titleContact }}</h4>
        <p> {{ infoContact }}</p>
        <div>
            <span> {{ contactNumber }}</span>
            <span> {{ contactSchedule }} </span>
            <span> {{ contactEmail }}</span>
        </div>
   </div>
</template>

<script>
export default {
    name: 'contacto',
    props: {
        titleContact: String,
        infoContact: String,
        contactNumber: String,
        contactSchedule: String,
        contactEmail: String
    }
}
</script>

<style>

</style>