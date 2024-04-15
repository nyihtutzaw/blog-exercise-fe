export const BlogItem = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Blog Title</h3>
                <p className="text-gray-600 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quo pariatur debitis perferendis. Officia sit labore quidem, quasi, autem ut delectus voluptas voluptatem neque tenetur aliquam iusto consequatur nihil dicta?</p>
                <div className="flex items-center mt-2">
                    <span className="text-gray-500 text-sm font-medium">Category: Travelling</span>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 pb-2 border-t border-gray-200">
                <span className="text-gray-500 text-sm font-medium">By Mg Mg</span>
                <span className="text-gray-500 text-sm font-medium">July 2023</span>
            </div>
        </div>
    )
}