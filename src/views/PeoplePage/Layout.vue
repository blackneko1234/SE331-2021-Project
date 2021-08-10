<template>
  <router-view :people="Vaccination.people" />
</template>
<script>
export default {
  inject: ['Vaccination']
}
</script>