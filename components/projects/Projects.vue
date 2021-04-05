<template>
  <div>
    <div v-for="project in projects" :key="project.id">
      <Project :project="project" class="mb-5"/>
    </div>
  </div>
</template>

<script>
import Project from './Project'

export default {
  components: {
    Project
  },
  props: {
    projects: {
      type: Array,
      required: true
    },
  }
}
</script>

<style>

</style>