import React from 'react';

const SkeletonApp = () => {
  const bgColorsLight = [
    'bg-rose-200', 'bg-amber-200', 'bg-emerald-200', 'bg-cyan-200',
    'bg-purple-200', 'bg-pink-200', 'bg-lime-200', 'bg-sky-200'
  ];

  const bgColorsDark = [
    'dark:bg-rose-500', 'dark:bg-amber-500', 'dark:bg-emerald-500', 'dark:bg-cyan-500',
    'dark:bg-purple-500', 'dark:bg-pink-500', 'dark:bg-lime-500', 'dark:bg-sky-500'
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="animate-pulse space-y-4">
        {/* Heading Placeholder */}
        <div className="h-8 w-4/3 rounded bg-yellow-200 dark:bg-yellow-800" />

        {/* Colorful Grid Skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`h-64 w-full rounded-xl shadow-inner ${bgColorsLight[i % bgColorsLight.length]} ${bgColorsDark[i % bgColorsDark.length]}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonApp;5