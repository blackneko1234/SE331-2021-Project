<template>
  <div style="margin-left: 1%; margin-right: 1%">
    <div class="text-h2 flex flex-center" style="margin-bottom: 1%">
      <b> VACCINATED PEOPLE </b>
    </div>
    <div class="text-h4 flex flex-center" style="margin-bottom: 5%">
      List of people who has been vaccinated for COVID-19
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-2"></div>
      <div class="col-12 col-sm-12 col-md-5 text-h6">Total people: 20</div>
      <div class="col-12 col-sm-12 col-md-2 flex flex-center">
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

      <div class="col-12 col-sm-12 col-md-1 flex flex-center">
        <q-btn-dropdown
          split
          rounded
          class="glossy"
          color="accent"
          label="Sort by"
          @click="onMainClick"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section> All </q-item-section>
            </q-item>

            <q-item-section>
              <q-expansion-item expand-separator caption="Vaccine Type">
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section> AstraZeneca </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section> Sinovac </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section> Pfizer </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section> Moderna </q-item-section>
                </q-item>
              </q-expansion-item>
            </q-item-section>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="col-md-2"></div>
    </div>
    <br />
  </div>
  <q-page-container class="flex flex-center q-pa-md row q-gutter-lg">
    <PeopleCard />
  </q-page-container>
  <div class="q-pa-lg flex flex-center">
    <q-pagination v-model="current" :max="5" input />
  </div>
</template>
<style scope>
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: lightgreen;
  border-radius: 10px;
}
</style>
<script>
// @ is an alias to /src
import PeopleCard from '@/components/PeopleCard.vue'
import { ref } from 'vue'

export default {
  name: 'PeopleList',
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
