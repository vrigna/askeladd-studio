<template>
    <div>
        <h4> {{ titleContact }} </h4>
        <p> {{ infoContact }} </p>
        <div>
            <span> 
                <i class="bi bi-telephone-fill"></i>
                {{ contactNumber }} 
                
            </span>
            <p> 
                <b>{{ primerDia }}</b> 
                a 
                <b> {{ultimoDia}} </b> 
                de 
                <span class="text-secondary font-weight-bold" style="font-family: Poppins"> {{horaInicio}}</span>
                a 
                <span class="text-secondary font-weight-bold" style="font-family: Poppins"> {{horaFinal}} </span>
            </p>
            <span> 
                <i class="bi bi-envelope-fill"></i>
                {{ contactEmail }} 
            </span>
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
        primerDia: String,
        ultimoDia: String,
        horaInicio: String,
        horaFinal: String,
        contactEmail: String
    }
}
</script>

<style>

</style>