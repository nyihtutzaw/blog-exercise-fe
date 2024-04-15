import { FC } from "react";

type Props = {
    published: boolean;
    onChange:(published:boolean)=>void;
}
export const PublishStatusToggle: FC<Props> = ({ published,onChange }) => {
    return (
        <>
            <div  onClick={()=>onChange(false)} className={`${!published ? 'bg-black text-white' : 'bg-white text-black'} w-28 px-4 py-2 text-center border border-black cursor-pointer`}>
                Draft
            </div>
            <div onClick={()=>onChange(true)} className={`${published ? 'bg-black text-white' : 'bg-white text-black'} w-28 px-4 py-2 text-center border border-black cursor-pointer`}>
                Published
            </div>
        </>
    )
}