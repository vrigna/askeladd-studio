<template>
    <div>
        <h4> {{ titleContact }} </h4>
        <p> {{ infoContact }} </p>
        <div>
            <span> 
                <a href="#">
                <font-awesome-icon :icon="[ 'fab', 'phone-alt' ]" class="fa-4x px-2"/>
                </a>
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
                <font-awesome-icon :icon="[ 'fab', 'envelope' ]" class="fa-4x px-2"/>
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