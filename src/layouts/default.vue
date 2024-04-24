<template>
    <v-spacer tag="div" class="py-10" />
    <h1 class="text-lg text-center">Multi-step Form</h1>
    <v-spacer tag="div" class="py-3" />

    <div class="content">
        <router-view />
    </div>
</template>

<style scoped>
.content {
    display: grid;
    align-content: center;
    width: 100%;
}
</style>
