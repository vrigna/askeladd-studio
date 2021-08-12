<template>
  <div class="bg-white border mt-4">
    <div class="bg-primary rounded-top" style="height: 200px;">

    </div>
    <div class="p-4">
      <div>
        <span class="small font-weight-bold text-secondary">{{ author }}</span>
      </div>
      <div>
        <h3 class="font-weight-bold" style="font-family: Poppins;">{{ title }}</h3>
      </div>
      <div class="mt-3 mb-5">
        <p class="font-weight-light">{{ desc }}</p>
      </div>
      <div>
        <span class="py-2 px-4 mr-3 font-weight-bold" :style="colorTag" style="border-radius: 100px;">{{ tag }}</span>
      </div>

    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      colorTag: `background-color: ${this.color};`
    }
  },
  props: {
    author: String, 
    title: String, 
    desc: String,
    url: String,
    tag: String,
    color: String,
  }
}
</script>

<style>

</style>