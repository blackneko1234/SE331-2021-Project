<template>
  <div class="row">
    <div class="col"></div>
    <div class="col-10">
      <div
        class="row"
        style="
          background-color: #1976d3;
          color: white;
          padding-top: 2%;
          padding-bottom: 2%;
        "
      >
        <div class="text-h1 self-end" style="margin-left: 2%"><b>404</b></div>
        <div class="text-h5 self-end">&nbsp;&nbsp;Not found</div>
      </div>

      <h3>
        The
        <b class="text-h1" style="color: #1976d3">{{ resource }}</b>
        you're looking for is not here.
      </h3>
      <q-btn
        push
        color="white"
        text-color="primary"
        label="Back to the home page"
        :to="{ name: 'Home' }"
      />
    </div>
    <div class="col"></div>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>