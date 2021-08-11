<template>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-4">
      <img :src="people.profilepic" />
    </div>
    <div class="col-12 col-sm-12 col-md-8">
      <h4>{{ people.name }} {{ people.surname }}</h4>
      <h6>{{ people.age }}</h6>
      <h6>{{ people.gender }}</h6>
      <h6>{{ people.hometown }}</h6>
      <h6>{{ people.status }}</h6>
    </div>
  </div>
</template>
<script>
export default {
  props: ['people'],
  inject: ['Vaccination']
}
</script>