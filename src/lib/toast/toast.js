import { writable } from 'svelte/store';

const newToast = () => {
  const { subscribe, update } = writable([]);

  function send(message) {
    update((state) => {
      return [...state, message];
    });
  }

  return { subscribe, send };
}


export const toast = newToast();
