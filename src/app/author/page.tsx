import Link from "next/link";

export default function BlogDetail() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">Authors</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/author/1"><div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                    <div className="flex items-center p-4">
                        <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300">
                            <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
                                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Mg Mg</h3>
                            <p className="text-gray-600 mb-1">mgmg@gmail.com</p>
                            <span className="text-green-500 font-medium">No Of Posts: 22</span>
                        </div>
                    </div>
                </div></Link>
                <Link href="/author/1"><div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                    <div className="flex items-center p-4">
                        <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300">
                            <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
                                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Mg Mg</h3>
                            <p className="text-gray-600 mb-1">mgmg@gmail.com</p>
                            <span className="text-green-500 font-medium">No Of Posts: 22</span>
                        </div>
                    </div>
                </div></Link>
                <Link href="/author/1"><div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                    <div className="flex items-center p-4">
                        <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300">
                            <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
                                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Mg Mg</h3>
                            <p className="text-gray-600 mb-1">mgmg@gmail.com</p>
                            <span className="text-green-500 font-medium">No Of Posts: 22</span>
                        </div>
                    </div>
                </div></Link>
                <Link href="/author/1"><div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                    <div className="flex items-center p-4">
                        <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300">
                            <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
                                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Mg Mg</h3>
                            <p className="text-gray-600 mb-1">mgmg@gmail.com</p>
                            <span className="text-green-500 font-medium">No Of Posts: 22</span>
                        </div>
                    </div>
                </div></Link>
                

            </div>
        </div>
    )
}