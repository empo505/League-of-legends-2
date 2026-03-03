import {ref, type Ref} from "vue";

export const textSound = ref<HTMLAudioElement | null>(null)
export const buttonSound = ref<HTMLAudioElement | null>(null)

export function play_soundfile(soundfile: Ref<HTMLAudioElement | null>) {
  if (soundfile.value) {
    soundfile.value.currentTime = 0;
    soundfile.value.play();
  }
}

export function pause_soundfile(soundfile: Ref<HTMLAudioElement | null>) {
    if (soundfile.value) {
    soundfile.value.pause();
    soundfile.value.currentTime = 0;
  }
};