<template>
    <h3 class="text-h4 text-center">{{ store.stepTitle }}</h3>
    <PersonalDetails v-show="store.levels === 1" />
    <ContactDetails v-show="store.levels === 2" />
    <ProfessionalDetails v-show="store.levels === 3" />

    <v-btn v-if="store.levels > 3" class="mx-auto mt-10" color="teal-darken-3" width="300" @click="store.resetStore()">
        Return
        Home</v-btn>
</template>

<script setup>
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>
