import { Metadata } from "next"



export async function generateMetadata(

): Promise<Metadata> {


    return {
        title: "Title",
        description: "description"
    }
}

export default function BlogDetail() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">Blog Blog Blog</h1>
                    <div className="flex items-center mb-4 text-gray-600">
                        <span className="mr-2 font-bold">Category:</span>
                        <span className="font-bold">ABC</span>
                    </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-primary rounded-md text-sm font-medium text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">Edit</button>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center mb-4 text-gray-600">
                    <span className="mr-2">By:</span>
                    <span>Mg Mg</span>
                </div>
                <div className="text-gray-600 mb-4">Published At: April 2023</div>
            </div>

            <div className="prose">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat non temporibus incidunt veritatis eligendi, minima impedit quasi unde rem dignissimos autem laborum tempore exercitationem laudantium totam praesentium ipsam ex! Illo.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat non temporibus incidunt veritatis eligendi, minima impedit quasi unde rem dignissimos autem laborum tempore exercitationem laudantium totam praesentium ipsam ex! Illo.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat non temporibus incidunt veritatis eligendi, minima impedit quasi unde rem dignissimos autem laborum tempore exercitationem laudantium totam praesentium ipsam ex! Illo.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat non temporibus incidunt veritatis eligendi, minima impedit quasi unde rem dignissimos autem laborum tempore exercitationem laudantium totam praesentium ipsam ex! Illo.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat non temporibus incidunt veritatis eligendi, minima impedit quasi unde rem dignissimos autem laborum tempore exercitationem laudantium totam praesentium ipsam ex! Illo.</p>
            </div>
        </div>
    )
}