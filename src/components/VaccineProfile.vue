<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col"></div>
      <div class="col-9 col-md-11 col-sm-12 col-xs-12">
        <div class="row">
          <div class="col-3 col-md-3 col-sm-12 col-xs-12">
            <q-chip
              square
              color="primary"
              dense
              size="xl"
              text-color="white"
              style="width: 100%"
            >
              &nbsp;
              <q-avatar>
                <q-icon name="vaccines" />
              </q-avatar>
              &nbsp; 1st Dose
            </q-chip>
          </div>
          <div class="col-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card-section>
                <div class="row">
                  <div
                    class="col-6 col-md-6 col-sm-12 col-xs-12 flex flex-center"
                  >
                    <q-card-section>
                      <img :src="people.vaccine[0].vpic" style="width: 300px" />
                    </q-card-section>
                  </div>
                  <div class="col" style="border-left: 1px solid lightgrey">
                    <q-card-section>
                      <div
                        class="text-h2"
                        style="text-shadow: 4px 4px lightgray"
                      >
                        <b>{{ people.vaccine[0].vname }}</b>
                      </div>
                      <br />
                      <div class="text-subtitle1">
                        <b> ID:</b> {{ people.vaccine[0].vid }}
                        <br />
                        <b>Type:</b> {{ people.vaccine[0].vtype }}
                      </div>
                    </q-card-section>
                  </div>
                </div>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat round icon="event" />
                <div class="text-subtitle1">
                  <b> Vaccinated date: &nbsp;</b> {{ people.vaccine[0].vdate }}
                </div>
              </q-card-actions>
            </q-card>
          </div>
        </div>

        <br />

        <div class="row" v-if="people.vaccine.length == 2">
          <div class="col-3 col-md-3 col-sm-12 col-xs-12">
            <q-chip
              square
              color="primary"
              dense
              size="xl"
              text-color="white"
              style="width: 100%"
            >
              &nbsp;
              <q-avatar>
                <q-icon name="vaccines" />
              </q-avatar>
              &nbsp; 2nd Dose
            </q-chip>
          </div>
          <div class="col-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card-section>
                <div class="row">
                  <div
                    class="col-6 col-md-6 col-sm-12 col-xs-12 flex flex-center"
                  >
                    <q-card-section>
                      <img
                        :src="people.vaccine[1].vpic"
                        style="width: 300px; height: auto"
                      />
                    </q-card-section>
                  </div>
                  <div class="col" style="border-left: 1px solid lightgrey">
                    <q-card-section>
                      <div
                        class="text-h2"
                        style="text-shadow: 4px 4px lightgray"
                      >
                        <b>{{ people.vaccine[1].vname }}</b>
                      </div>
                      <br />
                      <div class="text-subtitle1">
                        <b> ID:</b> {{ people.vaccine[1].vid }}
                        <br />
                        <b>Type:</b> {{ people.vaccine[1].vtype }}
                      </div>
                    </q-card-section>
                  </div>
                </div>
              </q-card-section>

              <q-separator />

              <q-card-actions>
                <q-btn flat round icon="event" />
                <div class="text-subtitle1">
                  <b> Vaccinated date: &nbsp;</b> {{ people.vaccine[1].vdate }}
                </div>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>

  <br />
</template>

<script>
export default {
  name: 'VaccineProfile',
  props: {
    people: {
      type: Object,
      required: true
    }
  }
}
</script>
