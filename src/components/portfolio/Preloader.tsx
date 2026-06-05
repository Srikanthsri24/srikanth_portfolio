import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <motion.p
            initial={{ letterSpacing: "0.05em", opacity: 0 }}
            animate={{ letterSpacing: "0.4em", opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl font-bold text-gradient"
          >
            SRIKANTH
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
