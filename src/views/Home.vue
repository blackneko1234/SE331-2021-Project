<template>
  <div class="text-h4 flex flex-center">
    <b> List of people who has been vaccinated for COVID-19 </b>
  </div>
  <br />
  <br />
  <br />
  <div class="row">
    <div class="col-12 col-md-2"></div>
    <div class="col-12 col-md-5 text-h6">Total people: 20</div>
    <div class="col-12 col-md-2 flex flex-center justify-center">
      <q-btn-dropdown
        split
        rounded
        class="glossy"
        color="primary"
        label="Data per page: 20"
        @click="onMainClick"
      >
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="onItemClick"
            v-for="index in 20"
            :key="index"
          >
            <q-item-section>
              {{ index }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <div class="col-12 col-md-1 flex flex-end justify-end">
      <q-btn-dropdown
        split
        rounded
        class="glossy"
        color="accent"
        label="Sort by"
        @click="onMainClick"
      >
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="onItemClick"
            v-for="index in 20"
            :key="index"
          >
            <q-item-section>
              {{ index }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <div class="col-12 col-md-2"></div>
  </div>
  <br />
  <q-page-container class="flex flex-center q-pa-md row q-gutter-lg">
    <PeopleCard />
  </q-page-container>
  <div class="q-pa-lg flex flex-center">
    <q-pagination v-model="current" :max="5" input />
  </div>
</template>

<script>
// @ is an alias to /src
import PeopleCard from '@/components/PeopleCard.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    PeopleCard
  },
  setup() {
    return {
      current: ref(1)
    }
  }
}
</script>
