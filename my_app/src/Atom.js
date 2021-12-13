import { atom } from "recoil";

const AllLoading = atom({
    key: 'AllLoading', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

export { AllLoading };