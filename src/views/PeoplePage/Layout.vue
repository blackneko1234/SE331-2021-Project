<template>
  <div v-if="Vaccination.people">
    <div style="margin-left: 8%; margin-right: 5%">
      <div class="row ChangeColor">
        <div class="text-h4" style="margin-bottom: 3%">
          <router-link :to="{ name: 'PeopleDetail' }">
            <b> Profile </b>
          </router-link>

          <b> | </b>

          <router-link :to="{ name: 'VaccineDetail' }">
            <b> Vaccine </b>
          </router-link>
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
<style scope>
.ChangeColor a.router-link-exact-active {
  color: #1976d3;
}
</style>
