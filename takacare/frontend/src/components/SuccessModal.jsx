import { motion } from "framer-motion";

export default function SuccessModal({ message, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md text-center"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-green-700 font-bold text-lg mb-4">Success!</h2>
        <p className="text-gray-800 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
