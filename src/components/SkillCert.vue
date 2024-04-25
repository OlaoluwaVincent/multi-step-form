<template>
 <div class="wrapper">
  <v-combobox v-model="dataCert" :items="dataToShow.education" hint="Select Certifications Earned" label="Select"
   color="success" bg-color="" persistent-hint density="comfortable" item-title="name" item-value="name" multiple
   chips></v-combobox>
  <v-combobox v-model="dataSkills" :items="dataToShow.skills" hint="Select Skills" label="Select" color="success"
   bg-color="" persistent-hint density="comfortable" item-title="name" item-value="name" multiple chips></v-combobox>
 </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
 cloudEngineer,
 webDeveloper,
 networkEngineer,
 dataAnalyst,
} from "@/assets/utils/select-values";

const props = defineProps({
 profession: String,
})

const dataToShow = computed(() => {
 switch (props.profession) {
  case 'Cloud Engineer':
   return cloudEngineer;
  case 'Web Developer':
   return webDeveloper;
  case 'Network Engineer':
   return networkEngineer;
  case 'Data Analyst':
   return dataAnalyst;
  default:
   return {};
 }
})


const dataCert = ref([]);
const dataSkills = ref([]);

const emits = defineEmits(["skill:select", "cert:select"]);

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
