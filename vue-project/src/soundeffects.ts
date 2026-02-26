import {ref} from "vue";

export const buttonSound = ref<HTMLAudioElement | null>(null);
export const textSound = ref<HTMLAudioElement | null>(null);

export function play_textsound() {
    if (textSound.value) {
    textSound.value.currentTime = 0;
    textSound.value.play();
  }
  return play_textsound;
};

export function pause_textsound() {
    if (textSound.value) {
    textSound.value.pause();
    textSound.value.currentTime = 0;
  }
  return pause_textsound;
};

export function play_buttonsound() {
    if (buttonSound.value) {
    buttonSound.value.currentTime = 0.1;
    buttonSound.value.play();
  }
  return play_buttonsound;
};