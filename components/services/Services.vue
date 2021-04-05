<template>
  <div>
    <div v-for="service in services" :key="service.id">
      <Service :service="service"/>
    </div>
  </div>
</template>

<script>
import Service from './Service'

export default {
  components: {
    Service
  },
  props: {
    services: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>