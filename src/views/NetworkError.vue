<template>
  <div class="networkError row">
    <div class="col"></div>
    <div class="col-10">
      <div class="text-h1" style="margin-bottom: 4%">
        <b>Connection failed !!!</b>
      </div>

      <div class="text-h5">
        Network issue please
        <a href="#" @click="$router.go(-1)"
          ><b style="color: #1976d3">click here</b></a
        >
        to try again.
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>