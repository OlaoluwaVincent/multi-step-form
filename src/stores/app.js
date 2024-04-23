import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore(
    "app",
    () => {
        const levels = ref(1);
        const personalDetails = ref(null);

        function updateLevels(value) {
            levels.value = value;
        }

        function addDetails(details) {
            console.log(details);
            personalDetails.value = { ...details };
        }

        return { levels, personalDetails, updateLevels, addDetails };
    },
    { persist: true }
);
