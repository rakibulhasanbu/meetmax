"use client";

import { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TAppModalProps = {
  children: React.ReactNode;
  button?: ReactElement;
  modalOpen?: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppModal = ({
  children,
  button,
  modalOpen,
  setModalOpen,
}: TAppModalProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value: boolean) => {
    if (setModalOpen) {
      setModalOpen(value);
    } else {
      setOpen(value);
    }
  };

  return (
    <>
      <div onClick={() => handleOpen(true)}>{button}</div>
      <AnimatePresence>
        {(modalOpen === undefined ? open : modalOpen) && (
          <>
            <motion.div
              onClick={() => handleOpen(false)}
              className="fixed inset-0 z-40 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="fixed top-28 w-2/5 h-fit max-h-[50dvh] rounded-xl overflow-y-auto left-[16%] z-50 bg-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppModal;
