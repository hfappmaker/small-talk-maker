interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const allCategories = ["全て", ...categories];

  return (
    <div className="w-full max-w-2xl mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        カテゴリを選択
      </label>
      <div className="flex flex-wrap gap-2">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
