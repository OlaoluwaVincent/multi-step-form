<template>
 <section>
  <v-snackbar v-model="snackbar" timeout="3000">
   Please select all fields
   <template v-slot:actions>
    <v-btn color="warning" variant="text" @click="snackbar = false">
     Close
    </v-btn>
   </template>
  </v-snackbar>
  <v-sheet class="vSheet mx-auto">
   <v-select v-model="profession" :items="professions" hint="Select Role" label="Select" color="warning"
    bg-color="green-lighten-5" persistent-hint density="compact"></v-select>
   <SkillCert :profession="profession" @skill:select="handleSkillSelect" @cert:select="handleCertSelect"
    @formState="handleFormState" />
   <v-btn type="button" class="text-none text-white w-100" color="green-darken-4" @click="handleSubmit">Submit</v-btn>
  </v-sheet>
 </section>
</template>



<script setup>
import { professions } from "@/assets/utils/select-values.js"
import { useAppStore } from "@/stores/app";
const store = useAppStore()
const formState = ref(false)
const snackbar = ref(false)


const profession = ref('');
const responseObj = ref()

function handleCertSelect(value) {
 responseObj.value = { ...responseObj.value, professionCert: value };
}
function handleSkillSelect(value) {
 responseObj.value = { ...responseObj.value, professionSkill: value };
}

function handleFormState(value) {
 formState.value = value
}

function handleSubmit() {
 if (!formState.value) {
  snackbar.value = true
 } else {
  const data = {
   title: profession.value,
   skillsOrPlatform: responseObj.value.professionSkill,
   certOrStack: responseObj.value.professionCert,
  }

  store.addDetails(data)
  store.updateLevels(4)
  return
 }


}
</script>

<style scoped>
.vSheet {
 width: 100%;
 padding: 20px;
 background: inherit;
 display: flex;
 flex-direction: column;
 gap: 20px;
 margin-top: 20px;
}

@media (width>540px) {
 .vSheet {
  margin-top: 30px;
  width: 80%;
 }
}

@media (width>1024px) {
 .vSheet {
  width: 60%;
 }
}
</style>
