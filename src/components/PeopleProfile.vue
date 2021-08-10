<template>
    <router-link class="event-link" :to="{ name: 'PeopleProfile', params: { id: people.id } }">
        <img src="{{ people.profilepic }}">
        <h4>{{ people.name }} {{ people.surname }}</h4>
        <h6>{{ people.age }}</h6>
        <h6>{{ people.gender }}</h6>
        <h6>{{ people.hometown }}</h6>
        <h6>{{ people.status }}</h6>
    </router-link>
</template>

<script>
export default {
  name: 'PeopleProfile',
  props: {
    people: {
      type: Object,
      required: true
    }
  }
}
</script>
