export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-10">
            <div className="animate-spin inline-block w-16 h-16 border-[5px] border-current border-t-transparent text-primaryDark rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}