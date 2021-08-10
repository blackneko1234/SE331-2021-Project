<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Comment</h3>
    <label for="DoctorName">Doctor name:</label>
    <input id="DoctorName" v-model="DoctorName" />
    <label for="DoctorSurname">Doctor surname:</label>
    <input id="DoctorSurname" v-model="DoctorSurname" />
    <label for="Description">Description:</label>
    <textarea id="Description" v-model="Description"></textarea>

    <input class="button" type="submit" value="submit" />
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
        Description: this.Description,
      }
      this.$emit('review-submitted', DoctorComment)

      this.DoctorName = ''
      this.DoctorSurname = ''
      this.Description = ''
    }
  }
}
</script>
