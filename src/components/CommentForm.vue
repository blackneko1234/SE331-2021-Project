<template>
  <form class="review-form q-gutter-lg" @submit.prevent="onSubmit">
    <q-input id="DoctorName" rounded v-model="DoctorName" label="Doctor Name" />

    <q-input
      id="DoctorSurname"
      rounded
      v-model="DoctorSurname"
      label="Doctor Surname"
    />
    <q-editor id="Description" v-model="Description" min-height="10 rem" />
    <div class="row flex flex-center justify-center">
      <q-btn
        unelevated
        rounded
        color="primary"
        label="Submit"
        class="button full-width"
        type="submit"
      />
    </div>
  </form>
</template>

<script>
export default {
  inject: ['Vaccination'],
  data() {
    return {
      DoctorName: '',
      DoctorSurname: '',
      Description: ''
    }
  },
  methods: {
    onSubmit() {
      if (
        this.DoctorName === '' ||
        this.DoctorSurname === '' ||
        this.Description === ''
      ) {
        this.Vaccination.DoctorNotify = 'Please input the data completely'
        setTimeout(() => {
          this.Vaccination.DoctorNotify = ''
        }, 2000)

        return
      } else {
        let DoctorComment = {
          DoctorName: this.DoctorName,
          DoctorSurname: this.DoctorSurname,
          Description: this.Description
        }
        this.$emit('comment-submitted', DoctorComment)

        this.DoctorName = ''
        this.DoctorSurname = ''
        this.Description = ''

        this.Vaccination.DoctorNotify = 'Add comment successfully!!!'
        setTimeout(() => {
          this.Vaccination.DoctorNotify = ''
        }, 2000)
      }
    }
  }
}
</script>
