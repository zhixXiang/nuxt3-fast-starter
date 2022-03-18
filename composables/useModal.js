import { useModalStore } from '~/stores/modal';

export default function useModal() {
  const modalStore = useModalStore();
  const $m = {
    /**
     * 開啟Modal
    {
      component: '',
      id:'',
      data: {},
    }
     * @param {Component} component 要開啟的Modal body component
     * @param {Object} id modal ID
     * @param {Object} data 要帶進Modal的資料
     */
    show({ component, id, data }) {
      modalStore.show({ component, id, data });
    },
    hide() {
      modalStore.hide();
    }
  };

  return {
    $m
  };
}
