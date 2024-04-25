<template>
    <v-form v-model="valid" @submit.prevent="submit">
        <v-container>
            <v-spacer tag="div" class="py-10" />
            <v-row>
                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                </v-col>

                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field v-model="phone" :rules="nameRules" label="Phone Number" required></v-text-field>
                </v-col>
                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field v-model="website" label="Website"></v-text-field>
                </v-col>
                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field v-model="linkedIn" label="LinkedIn"></v-text-field>
                </v-col>

                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field v-model="address" :rules="nameRules" label="Residential Address" hide-details
                        required></v-text-field>
                </v-col>
                <v-col cols="12" md="8" class="mx-auto text-center">
                    <v-btn type="submit" class="text-none text-white w-100" color="blue-darken-4">Proceed</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/stores/app";
const store = useAppStore();

const valid = ref(false);
const address = ref("");
const website = ref("");
const phone = ref("");
const linkedIn = ref("");
const email = ref("");

const nameRules = computed(() => [
    (value) => {
        if (value) return true;

        return "Name is required.";
    },
    (value) => {
        if (value?.length >= 5) return true;

        return "Name must be less than 10 characters.";
    },
]);

const emailRules = computed(() => [
    (value) => {
        if (value) return true;

        return "E-mail is required.";
    },
    (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
    },
]);

function submit() {
    if (valid.value) {
        const data = {
            address: address.value,
            website: website.value,
            phone: phone.value,
            linkedIn: linkedIn.value,
            email: email.value,
        };

        store.addDetails(data);
        store.updateLevels(3);
        return;
    }
}
</script>
