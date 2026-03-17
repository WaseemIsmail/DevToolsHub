import toast from "react-hot-toast";

export default function CopyButton({ text }) {

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    toast.success("Copied to clipboard!", {
      style: {
        borderRadius: "8px",
        background: "#111827",
        color: "#fff"
      }
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
    >
      Copy
    </button>
  );
}