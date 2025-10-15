import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  // Call a callback when loading finishes
  useEffect(() => {
    if (!loading && onFinish) {
      onFinish();
    }
  }, [loading, onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.8 } }}
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
        >
          <h1 className="text-white text-3xl font-bold animate-pulse">
            yashwant.is-a.dev
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
