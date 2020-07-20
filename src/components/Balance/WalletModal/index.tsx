import React from 'react';

import { Modal } from "react-responsive-modal";

interface WalletModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({
  isModalOpen,
  handleCloseModal,
}) => {

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <h2>Simple centered modal</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
        hendrerit risus, sed porttitor quam.
      </p>
    </Modal>
  );
}

export default WalletModal;