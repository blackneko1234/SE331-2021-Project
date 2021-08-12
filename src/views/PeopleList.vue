<template>
  <div style="margin-left: 1%; margin-right: 1%">
    <div class="text-h2 flex flex-center" style="margin-bottom: 1%">
      <b style="text-shadow: 4px 4px lightgray"> VACCINATED PEOPLE </b>
    </div>
    <div class="text-h4 flex flex-center" style="margin-bottom: 5%">
      List of people who has been vaccinated for COVID-19
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-2"></div>
      <div class="col-12 col-sm-12 col-md-5 text-h6">
        Total people: {{ totalpeople }}
      </div>
      <div class="col-12 col-sm-12 col-md-3 flex flex-end justify-end">
        <q-btn-dropdown split rounded class="glossy" color="primary">
          <template v-slot:label>
            <div class="row items-center no-wrap">
              <div class="text-center">Data per page: {{ people.length }}</div>
            </div>
          </template>

          <q-item clickable v-for="index in parseInt(totalpeople)" :key="index">
            <q-item-section>
              <router-link
                :to="{ name: 'Home', query: { page: 1, perPage: index } }"
              >
                {{ index }}
              </router-link>
            </q-item-section>
          </q-item>
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
    <q-space />
    <q-space />
    <q-space />
    <q-space />
    <q-space />
    <div v-if="this.page != 1">
      <router-link :to="{ name: 'Home', query: { page: 1, perPage } }">
        <q-icon
          v-for="size in ['md']"
          :key="size"
          :size="size"
          name="first_page"
        />
      </router-link>
      <router-link :to="{ name: 'Home', query: { page: page - 1, perPage } }">
        <q-icon
          v-for="size in ['md']"
          :key="size"
          :size="size"
          name="navigate_before"
        />
      </router-link>
    </div>

    <q-space />

    <div v-if="HasNext">
      <router-link :to="{ name: 'Home', query: { page: page + 1, perPage } }">
        <q-icon
          v-for="size in ['md']"
          :key="size"
          :size="size"
          name="navigate_next"
        />
      </router-link>
      <router-link
        :to="{ name: 'Home', query: { page: LastPage, perPage } }"
        v-if="page != 0"
      >
        <q-icon
          v-for="size in ['md']"
          :key="size"
          :size="size"
          name="last_page"
        />
      </router-link>
    </div>

    <q-space />
    <q-space />
    <q-space />
    <q-space />
    <q-space />
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
  background: #1976d3;
  border-radius: 10px;
}
</style>
<script>
import PeopleCard from '@/components/PeopleCard.vue'
import PeopleService from '@/services/PeopleService.js'

export default {
  name: 'PeopleList',
  components: {
    PeopleCard
  },
  data() {
    return {
      people: 0,
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
  computed: {
    HasNext() {
      let totalpage = Math.ceil(this.totalpeople / this.perPage)
      return this.page < totalpage
    },
    LastPage() {
      let totalpage = Math.ceil(this.totalpeople / this.perPage)
      return totalpage
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    PeopleService.getAllPeople(
      parseInt(routeTo.query.perPage) || 4,
      parseInt(routeTo.query.page) || 1
    )
      .then((response) => {
        next((comp) => {
          comp.people = response.data
          comp.totalpeople = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    PeopleService.getAllPeople(
      parseInt(routeTo.query.perPage) || 4,
      parseInt(routeTo.query.page) || 1
    )
      .then((response) => {
        this.people = response.data
        this.totalpeople = response.headers['x-total-count']
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  }
}
</script>
