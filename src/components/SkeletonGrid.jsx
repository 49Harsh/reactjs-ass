const SkeletonCard = () => {
  return (
    <div className="glass rounded-2xl p-6 animate-pulse">
      <div className="skeleton w-full h-48 mb-4"></div>
      <div className="skeleton h-6 w-3/4 mb-3"></div>
      <div className="skeleton h-4 w-1/2 mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="skeleton h-8 w-20"></div>
        <div className="skeleton h-6 w-16"></div>
      </div>
    </div>
  );
};

const SkeletonGrid = ({ count = 12 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
