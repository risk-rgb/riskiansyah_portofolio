import { motion, AnimatePresence } from "motion/react";

const Alert = ({ type = "success", text = "" }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  const bgColor = type === "danger" ? "bg-red-800" : "bg-royal";
  const badgeColor = type === "danger" ? "bg-red-500" : "bg-lavender";
  const badgeText = type === "danger" ? "Failed" : "Success";

  return (
    <AnimatePresence>
      {text && (
        <motion.div
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={alertVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          role="alert"
          aria-live="assertive"
        >
          <div
            className={`flex items-center gap-3 rounded-md px-5 py-3 text-indigo-100 leading-none ${bgColor}`}
          >
            <span
              className={`rounded-full px-2 py-1 text-xs font-semibold uppercase ${badgeColor}`}
            >
              {badgeText}
            </span>
            <p className="text-sm">{text}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
