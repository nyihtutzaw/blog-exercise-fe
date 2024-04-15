import { FC } from "react";

type Prop = {
    content: string;
}

export const HtmlRenderer: FC<Prop> = ({ content }) => {
    return (
        <div dangerouslySetInnerHTML={{
            __html: content
        }}></div>
    )
}