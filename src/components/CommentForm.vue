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
        Alert('Review is incomplete. Please fill out every field.')
        return
      }
      let DoctorComment = {
        DoctorName: this.DoctorName,
        DoctorSurname: this.DoctorSurname,
        Description: this.Description
      }
      this.$emit('comment-submitted', DoctorComment)

      this.DoctorName = ''
      this.DoctorSurname = ''
      this.Description = ''
    }
  }
}
</script>
