import { motion, AnimatePresence } from "framer-motion";

type TAppDrawer = {
  isOpen: boolean;
  children: React.ReactNode;
};

const AppDrawer = ({ isOpen, children }: TAppDrawer) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-40 h-full w-full bg-white"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppDrawer;
