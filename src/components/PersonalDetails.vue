<template>
    <v-form v-model="valid" @submit.prevent="submit">
        <v-container>
            <v-row>
                <v-col cols="12" md="8" class="mx-auto">
                    <v-file-input id="file" v-model="selectedImage" accept="image/*" @change="previewImage" outlined
                        required prepend-icon="mdi-camera" class="d-none"></v-file-input>
                </v-col>

                <v-col cols="12" class="text-center mx-auto">
                    <label for="file" class="custom-label">
                        <v-avatar color="surface-variant" size="200" icon="mdi-camera"
                            :image="previewUrl && previewUrl"></v-avatar>
                    </label>
                </v-col>
                <v-col cols="12">
                    <v-alert v-if="imgErrorMessage" v-model="imgErrorMessage"
                        text="Please fill in all fields and select an Image" title="Error" type="error"
                        density="compact" closable class="mx-auto"></v-alert>
                </v-col>
            </v-row>
            <v-spacer tag="div" class="py-10" />
            <v-row>
                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field v-model="fullname" :rules="nameRules" label="Full Name" required></v-text-field>
                </v-col>
                <v-col cols="12" md="8" class="mx-auto d-flex gap-3">
                    <SelectComponent :select="gender" label="Gender" @update:select="gendername = $event" />
                    <div class="px-3" />
                    <SelectComponent :select="marital_status" label="Marital Status" @update:select="status = $event" />
                </v-col>

                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field v-model="nationality" :rules="nameRules" label="Nationality" required></v-text-field>
                </v-col>

                <v-col cols="12" md="8" class="mx-auto">
                    <v-text-field v-model="languages" :rules="nameRules" label="Spoken Languages"
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
import { gender, marital_status } from "@/assets/utils/select-values";
const store = useAppStore();

const valid = ref(false);
const fullname = ref("");
const nationality = ref("");
const languages = ref("");
const selectedImage = ref(null);
const previewUrl = ref(null);
const imgErrorMessage = ref(false);
const status = ref("");
const gendername = ref("");

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
        if (value?.length >= 5) return true;

        return "Name must be less than 10 characters.";
    },
]);

function submit() {
    if (valid.value) {
        if (!previewUrl.value || !gendername.value || !status.value) {
            return (imgErrorMessage.value = true);
        }
        imgErrorMessage.value = false;
        const data = {
            fullname: fullname.value,
            nationality: nationality.value,
            languages: languages.value,
            imgUrl: previewUrl,
            status: status.value,
            gender: gendername.value,
        };
        console.log(data);

        store.addDetails(data);
        store.updateLevels(2);
        return;
    }
}
</script>
