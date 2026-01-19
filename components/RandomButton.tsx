interface RandomButtonProps {
  onClick: () => void;
}

export default function RandomButton({ onClick }: RandomButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
    >
      話題を表示する
    </button>
  );
}
