<template>
    <v-select v-model="selectedItem" :items="select" item-title="name" item-value="value" return-object
        single-line></v-select>
</template>

<script setup>

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
const emits = defineEmits(["update:select"]);

const selectedItem = ref(props.label);

watch(selectedItem, (newValue) => {
    emits("update:select", newValue);
});
</script>
