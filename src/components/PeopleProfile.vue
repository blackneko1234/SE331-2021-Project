<template>
  <q-card style="margin-right: 6%">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-4">
        <q-card-section class="flex flex-center">
          <img :src="people.profilepic" style="height: 100%" />
        </q-card-section>
      </div>
      <div class="col-12 col-sm-12 col-md-8">
        <q-card-section style="border-left: 1px solid lightgrey">
          <div class="text-h2">
            <b style="text-shadow: 4px 4px lightgray"
              >{{ people.name }} {{ people.surname }}</b
            >
          </div>
          <br />
          <div class="text-subtitle1">
            <b> ID:</b> {{ people.id }}
            <br />
            <b>Name:</b> {{ people.name }}
            <br />
            <b> Surname:</b> {{ people.surname }}
            <br />
            <b>Age:</b> {{ people.age }}
            <br />
            <b>Gender:</b> {{ people.gender }}
            <br />
            <b> Hometown:</b> {{ people.hometown }}
            <br />
            <b>Status:</b> {{ people.status }}
          </div>
        </q-card-section>
      </div>
    </div>
  </q-card>
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
