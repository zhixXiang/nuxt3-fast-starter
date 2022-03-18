import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    // 目前Modal ID
    currentId: '',
    // 現在內容是哪個component
    currentModal: '',
    // 有需要傳遞給Modal的資料
    data: {},
    // 顯示開關
    isShow: false
  }),
  getters: {},
  actions: {
    show({ component, id, data }) {
      // console.log(component);
      this.currentModal = markRaw(component);
      this.currentId = id;
      this.data = { data, close: this.hide };
      this.isShow = true;
      // console.log(this.data);
    },
    hide() {
      this.currentModal = '';
      this.isShow = false;
      this.data = {};
      this.currentId = '';
    }
  }
});
