<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-pa-md row q-gutter-xl Fixed" style="z-index: 20">
      <q-fab color="primary" text-color="white" icon="menu" direction="down">
        <router-link :to="{ name: 'About' }">
          <q-fab-action color="primary" text-color="white" icon="information" />
          <q-tooltip
            anchor="center right"
            transition-show="scale"
            transition-hide="scale"
            self="center left"
            :offset="[10, 10]"
          >
            <strong> About us</strong>
          </q-tooltip>
        </router-link>

        <router-link :to="{ name: 'Home' }">
          <q-fab-action color="primary" text-color="white" icon="home" />
          <q-tooltip
            anchor="center right"
            transition-show="scale"
            transition-hide="scale"
            self="center left"
            :offset="[10, 10]"
          >
            <strong> Home </strong>
          </q-tooltip>
        </router-link>
      </q-fab>
    </div>
    <br />
    <br />
    <br />
    <br />
    <router-view />
  </q-layout>
</template>

<script>
export default {
  inject: ['Vaccination']
}
</script>
<style scope>
a {
  text-decoration: none;
  color: black;
}
.Fixed {
  position: fixed;
}
</style>