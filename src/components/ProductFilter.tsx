import React from 'react'

type ProductFilterProps = {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const ProductFilter: React.FC<ProductFilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => onCategoryChange('All')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductFilter