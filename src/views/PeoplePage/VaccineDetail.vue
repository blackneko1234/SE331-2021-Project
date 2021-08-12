<template>
  <VaccineProfile :people="people" />
</template>

<script>
import VaccineProfile from '@/components/VaccineProfile.vue'
export default {
  components: {
    VaccineProfile
  },
  props: ['people'],
  inject: ['Vaccination']
}
</script>
