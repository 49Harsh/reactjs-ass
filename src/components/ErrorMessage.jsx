const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <div className="glass rounded-2xl p-8 max-w-md w-full text-center animate-slide-up">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {message || 'An unexpected error occurred. Please try again.'}
        </p>
        {onRetry && (
          <button onClick={onRetry} className="btn-primary">
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
