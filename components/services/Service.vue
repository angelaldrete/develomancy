<template>
  <v-card outlined class="px-7 py-5 service" align="center" justify="center">
    <div class="service-img mb-1">
      <img :src="service.imageUrl"/>
    </div>
    <div class="service-name">
      {{service.name}}
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    service: Object
  }
}
</script>

<style scoped>
.service-img img {
  width: 35px;
  height: 35px;
}
</style>