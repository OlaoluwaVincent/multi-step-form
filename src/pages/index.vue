<template>
    <PersonalDetails v-show="store.levels === 1" />
</template>

<script setup>
import { useAppStore } from "@/stores/app";
const store = useAppStore();
</script>
