<template>
    <h3 class="text-h4 text-center">{{ store.stepTitle }}</h3>
    <PersonalDetails v-show="store.levels === 1" />
    <ContactDetails v-show="store.levels === 2" />
</template>

<script setup>
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>
