<template>
  <q-card flat bordered>
    <q-card-section horizontal>
      <q-card-section class="col-12 col-sm-12 col-md-4 flex flex-center">
        <img :src="people.profilepic" style="height: 100%" />
      </q-card-section>
      <q-card-section
        class="col-12 col-sm-12 col-md-8"
        style="border-left: 1px solid lightgrey"
      >
        <div class="row border-radius-inherit">
          <div>
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
          </div>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: ['people'],
  inject: ['Vaccination']
}
</script>