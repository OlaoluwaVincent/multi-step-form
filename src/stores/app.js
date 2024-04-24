import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore(
    "app",
    () => {
        const levels = ref(1);
        const user = ref(null);
        const stepTitle = ref("Personal Details");

        function updateLevels(value) {
            levels.value = value;
            if (levels.value === 1) {
                stepTitle.value = "Personal Details";
            } else if (levels.value === 2) {
                stepTitle.value = "Contact Details";
            } else if (levels.value === 3) {
                stepTitle.value = "Professional";
            } else if (levels.value === 4) {
                stepTitle.value = "Thank you for filling out this form";
            }
        }

        function addDetails(details) {
            if (levels.value === 1) {
                user.value = { ...user.value, personalDetails: details };
            }
            if (levels.value === 2) {
                user.value = { ...user.value, contactDetails: details };
            }
            if (levels.value === 3) {
                user.value = { ...user.value, professionalDetails: details };
            }
        }

        return { levels, user, stepTitle, updateLevels, addDetails };
    },
    { persist: true }
);
