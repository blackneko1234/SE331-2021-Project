<template>
  <q-card class="my-card shadow-10" :root="listEl" transition="scale">
    <q-card-section horizontal>
      <q-img class="col-5" style="margin: 2%" :src="peoples.profilepic" />

      <q-card-section
        style="word-wrap: break-word margin: 0.7%"
        class="col-7 q-mt-sm q-mb-xs"
      >
        <router-link
          class="hoverName"
          :to="{ name: 'PeopleDetail', params: { id: peoples.id } }"
        >
          <div class="text-h5">
            <b>
              {{ peoples.name }}
              <br />
              {{ peoples.surname }}
            </b>
          </div>
        </router-link>
        <q-separator />
        <p style="font-size: 18px"><b>Status:</b> {{ peoples.status }}</p>
      </q-card-section>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <q-space />
      <q-btn
        color="grey"
        flat
        dense
        label="Show more detail"
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>
    <q-slide-transition>
      <div v-show="expanded" expand-separator>
        <q-separator />
        <q-card-section class="text-subitle2">
          <p class="text-body2">
            <b>1st dose:</b> {{ peoples.vaccine[0].vname }}
          </p>
          <p class="text-body2" v-if="peoples.vaccine.length == 1">
            <b>2nd dose:</b> -
          </p>
          <p class="text-body2" v-if="peoples.vaccine.length == 2">
            <b>2nd dose:</b> {{ peoples.vaccine[1].vname }}
          </p>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<style scope>
.my-card:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale(1.04);
}
.my-card {
  width: 100%;
  max-width: 450px;
}

.hoverName :hover {
  color: #1976d3;
}
</style>

<script>
import { ref } from 'vue'
export default {
  name: 'PeopleCard',
  setup() {
    return {
      expanded: ref(false)
    }
  },
  props: {
    peoples: {
      type: Object,
      required: true
    }
  }
}
</script>