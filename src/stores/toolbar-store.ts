import { defineStore } from 'pinia';

interface ToolbarParams {
  title: string
  color: string
  bgColor: string
}

export const useToolbarStore = defineStore('toolbar', {
  state: () => ({
    title: '',
    color: '',
    bgColor: '',
  }),
  actions: {
    changeState({
      title,
      color,
      bgColor
    }: ToolbarParams) {
      this.title = title
      this.color = color
      this.bgColor = bgColor
    },
  },
});
