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
              <q-expansion-item expand-separator caption="Received vaccine">
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section> One dose </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section> Two dose </q-item-section>
                </q-item>
              </q-expansion-item>

              <q-expansion-item expand-separator caption="Vaccine brand">
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
    <PeopleCard
      v-for="peoples in people"
      :key="peoples.id"
      :peoples="peoples"
    />
  </q-page-container>
  <div class="q-pa-lg flex flex-center">
    <q-pagination v-model="current" :max="5" input />
  </div>
</template>
<style scope>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: lightgreen;
  border-radius: 10px;
}
</style>
<script>
import PeopleCard from '@/components/PeopleCard.vue'
import PeopleService from '@/services/PeopleService.js'
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
  },
  data() {
    return {
      people: null,
      totalpeople: 0
    }
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    PeopleService.getAllPeople(
      parseInt(routeTo.query.perPage) || 4,
      parseInt(routeTo.query.page) || 1
    ).then((response) => {
      next((comp) => {
        comp.people = response.data
        comp.totalpeople = response.headers['x-total-count']
      })
    })
    /*  .catch(() => {
        next({ name: 'NetworkError' })
      }) */
  },
  beforeRouteUpdate(routeTo) {
    PeopleService.getAllPeople(
      parseInt(routeTo.query.perPage) || 4,
      parseInt(routeTo.query.page) || 1
    ).then((response) => {
      this.people = response.data
      this.totalpeople = response.headers['x-total-count']
    })
    /*  .catch(() => {
        return { name: 'NetworkError' }
      }) */
  }
}
</script>
