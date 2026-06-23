import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const INTRO_VIDEO = "/videos/intro.mp4";

export function VideoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl glass rounded-2xl p-4 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-xl font-semibold">
                Introductory Video
              </h3>

              <button
                onClick={onClose}
                className="p-2 rounded-full glass hover:bg-white/10"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-black border border-white/10 flex items-center justify-center max-h-[80vh]">
              <video
                className="w-full h-auto max-h-[75vh] object-contain"
                src={INTRO_VIDEO}
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}