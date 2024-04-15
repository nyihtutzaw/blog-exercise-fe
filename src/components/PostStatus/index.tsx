import { FC } from "react";


type Props = {
    published: boolean;
}

export const PostStatus: FC<Props> = ({ published }) => {

    if (published) return <div className="p-2 bg-green-100 text-black text-sm rounded-lg">Published</div>

    return <div className="p-2 bg-blue-100 text-black text-sm rounded-lg">Draft</div>
}