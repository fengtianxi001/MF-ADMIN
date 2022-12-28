import Modal, { type ModalConfig } from '@arco-design/web-vue/es/modal';

const BaseConfirm = (params: ModalConfig) => {
  Modal.confirm({
    modalClass: 'confirm-modal',
    ...params,
  });
};

export default BaseConfirm;
