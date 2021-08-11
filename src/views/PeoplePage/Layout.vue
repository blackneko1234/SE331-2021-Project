<template>
  <div v-if="Vaccination.people">
    <div style="margin-left: 5%; margin-right: 5%">
      <div class="row">
        <div class="text-h3" style="margin-bottom: 1%">
          <b style="text-shadow: 4px 4px lightgray"> Profile </b>
        </div>
        <div class="text-h3" style="margin-bottom: 1%">
          <b style="text-shadow: 4px 4px lightgray"> Vaccine </b>
        </div>
      </div>
      <router-view :people="Vaccination.people" />
    </div>
  </div>
</template>
<script>
export default {
  inject: ['Vaccination']
}
</script>