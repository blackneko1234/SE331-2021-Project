<template>
  <q-layout view="lHh Lpr lFf">
    <div class="flex flex-end q-pa-md row justify-end q-gutter-xl">
      <q-fab color="green-7" text-color="white" icon="menu" direction="down">
        <router-link :to="{ name: 'About' }">
          <q-fab-action
            color="green-7"
            text-color="white"
            @click="onClick"
            icon="information"
          />
          <q-tooltip transition-show="scale" transition-hide="scale">
            About us
          </q-tooltip>
        </router-link>

        <router-link :to="{ name: 'Home' }">
          <q-fab-action
            color="green-7"
            text-color="white"
            @click="onClick"
            icon="home"
          />
          <q-tooltip transition-show="scale" transition-hide="scale">
            Home
          </q-tooltip>
        </router-link>
      </q-fab>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {}
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>