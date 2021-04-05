<template>
  <v-card
    height="150px"
    @click="$router.push(`/projects/${project.id}`)"
    >
    <v-card-title>
      {{project.title}}
    </v-card-title>
    <v-card-subtitle>
      {{project.description}}
    </v-card-subtitle>
    <v-card-text>
      <p :class="project.status" class="caption ma-0 px-2">{{project.stLabel}}</p>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: Object,
  }
}
</script>

<style>
  .in-progress:first-child {
    background: #666 !important;
    color: white;
    display: inline-block;
    border-radius: 20px;
  }
</style>