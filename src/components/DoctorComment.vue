<template>
  <div class="text-h6" style="margin-bottom: 2%">&nbsp;&nbsp;Comment</div>

  <q-scroll-area style="height: 340px; border: 1px solid lightgrey">
    <div v-for="(comment, index) in comments" :key="index">
      <q-chat-message
        style="margin: 2% 4% 0% 4%; padding-bottom: 4%"
        :name="'Dr. ' + comment.DoctorName + ' ' + comment.DoctorSurname"
        avatar="https://image.flaticon.com/icons/png/512/387/387561.png"
        :text="[comment.Description]"
        text-color="white"
        bg-color="primary"
        text-html
      />
    </div>
  </q-scroll-area>
</template>
<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
