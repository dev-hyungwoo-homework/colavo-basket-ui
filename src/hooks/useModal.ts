import { useState } from "react";

type Props = {
  isOpen: boolean;
  toggleModal: () => void;
};

export default function useModal(): Props {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (): void => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleModal,
  };
}
