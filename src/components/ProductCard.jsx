import { formatCurrency, truncateText } from '../utils/helpers';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="glass rounded-2xl p-6 card-hover cursor-pointer group"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl mb-4 bg-white dark:bg-slate-700 h-48 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <span className="badge">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 min-h-[3.5rem]">
          {truncateText(product.title, 60)}
        </h3>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-2xl font-bold text-gradient">
              {formatCurrency(product.price)}
            </p>
          </div>

          {product.rating && (
            <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                {product.rating.rate}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Indicator */}
      <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        View Details
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductCard;
