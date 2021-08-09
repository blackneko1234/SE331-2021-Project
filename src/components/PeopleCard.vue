<template>
  <q-card
    class="my-card shadow-10"
    v-for="index in 20"
    :key="index"
    :root="listEl"
    transition="scale"
  >
    <q-card-section horizontal>
      <q-img
        class="col-5"
        style="margin: 2%"
        src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFroBand&accessoriesType=Wayfarers&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=PastelOrange&eyeType=Hearts&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Tanned"
      />

      <q-card-section
        style="word-wrap: break-word margin: 0.7%"
        class="col-7 q-mt-sm q-mb-xs"
      >
        <div class="text-h6">Somsasdasri</div>
        <div class="text-h6">Kinkaidasdasd</div>
        <q-separator />
        <p class="text-subitle1"><b>Status:</b> Already get first dose</p>
      </q-card-section>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <q-space />
      <q-btn
        color="grey"
        flat
        dense
        label="Show more detail"
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>
    <q-slide-transition>
      <div v-show="expanded" expand-separator>
        <q-separator />
        <q-card-section class="text-subitle2">
          <p class="text-body2"><b>First dose:</b> Aztra Yaranaika</p>
          <p class="text-body2"><b>Second dose:</b> n</p>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<style scope>
.my-card:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale(1.04);
}
.my-card {
  width: 100%;
  max-width: 450px;
}
</style>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    return {
      expanded: ref(false)
    }
  }
}
</script>