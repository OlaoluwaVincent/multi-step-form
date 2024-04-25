<template>
  <div class="wrapper" v-if="dataToShow !== null">
    <v-combobox v-model="dataCert" :items="dataToShow.education" hint="Select Certifications or Stack" label="Select"
      color="success" bg-color="" persistent-hint density="comfortable" item-title="name" item-value="name" multiple
      chips></v-combobox>
    <v-combobox v-model="dataSkills" :items="dataToShow.skills" hint="Select Skills or Platforms" label="Select"
      color="success" bg-color="" persistent-hint density="comfortable" item-title="name" item-value="name" multiple
      chips></v-combobox>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, computed } from 'vue';
import {
  cloudEngineer,
  webDeveloper,
  networkEngineer,
  dataAnalyst,
} from "@/assets/utils/select-values";

const props = defineProps({
  profession: String,
})
const prof = computed(() => props.profession)

const dataToShow = ref(null)


const dataCert = ref([]);
const dataSkills = ref([]);

const emits = defineEmits(["skill:select", "cert:select"]);

watch(prof, (newValue) => {
  dataCert.value = []
  dataSkills.value = []
  switch (newValue) {
    case 'Cloud Engineer':
      dataToShow.value = cloudEngineer;
      break;
    case 'Web Developer':
      dataToShow.value = webDeveloper;
      break;
    case 'Network Engineer':
      dataToShow.value = networkEngineer;
      break;
    case 'Data Analyst':
      dataToShow.value = dataAnalyst;
      break;
    default:
      dataToShow.value = null;
  }
});
watch(dataCert, (newValue) => {
  emits("cert:select", newValue);
});

watch(dataSkills, (newValue) => {
  emits("skill:select", newValue);
});
</script>

<style scoped>
.wrapper {
  display: grid;
  gap: 20px;
}

@media (min-width: 540px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
