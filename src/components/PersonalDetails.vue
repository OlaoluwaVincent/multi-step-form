<template>
    <v-form v-model="valid" @submit.prevent="submit">
        <v-container>
            <v-row>
                <v-col cols="12" md="8" class="mx-auto">
                    <v-file-input
                        id="file"
                        v-model="selectedImage"
                        accept="image/*"
                        @change="previewImage"
                        outlined
                        required
                        prepend-icon="mdi-camera"
                        class="d-none"
                    ></v-file-input>
                </v-col>
                <v-col cols="12" class="text-center mx-auto">
                    <label for="file" class="custom-label">
                        <v-avatar
                            color="surface-variant"
                            size="200"
                            icon="mdi-camera"
                            :image="previewUrl && previewUrl"
                        ></v-avatar>
                    </label>
                </v-col>
            </v-row>
            <v-spacer tag="div" class="py-10" />
            <v-row>
                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        label="First name"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field
                        v-model="lastname"
                        :counter="10"
                        :rules="nameRules"
                        label="Last name"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        hide-details
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="8" class="mx-auto text-center">
                    <v-btn
                        type="submit"
                        class="text-none text-white w-100"
                        color="blue-darken-4"
                        >Submit</v-btn
                    >
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script setup>
import { ref, computed } from "vue";

const valid = ref(false);
const firstname = ref("");
const lastname = ref("");
const email = ref("");
const selectedImage = ref(null);
const previewUrl = ref(null);

function previewImage() {
    if (selectedImage.value) {
        const reader = new FileReader();

        reader.onload = (event) => {
            previewUrl.value = event.target.result;
        };

        reader.readAsDataURL(selectedImage.value);
    }
}

const nameRules = computed(() => [
    (value) => {
        if (value) return true;

        return "Name is required.";
    },
    (value) => {
        if (value?.length <= 10) return true;

        return "Name must be less than 10 characters.";
    },
]);
const imageRule = computed(() => [
    (value) => {
        if (value) return true;

        return "Profile Image is required.";
    },
    (value) => {
        if (value[0].size >= 1000) return true;
        console.log(value[0].size);
        return "Please select quality image";
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
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            imgUrl: previewUrl,
        };

        store.addDetails(data);
        store.levels += 1;
        return;
    }
    console.log("not valid");
}
</script>
