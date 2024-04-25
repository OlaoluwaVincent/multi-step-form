<template>
    <v-select v-model="selectedItem" :items="select" item-title="name" item-value="value" return-object single-line
        :rules="rules.select" :label="props.label" />
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
    select: {
        type: Array,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});

const rules = {
    select: [(v) => !!v || "This field is required"],
}

const emits = defineEmits(["update:select"]);

const selectedItem = ref(null);

watch(selectedItem, (newValue) => {
    emits("update:select", newValue);
});
</script>
