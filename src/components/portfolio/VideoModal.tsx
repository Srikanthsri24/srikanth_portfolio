import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import intro from "@/assets/hero-intro.asset.json";

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Introductory Video</h3>
              <button onClick={onClose} className="p-2 rounded-full glass hover:bg-white/10" aria-label="Close">
                <X size={18} />
              </button>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-black/50 flex items-center justify-center border border-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Introductory Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
