import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { FC } from "react";
import { ErrorContainer } from '../ErrorContainer';

type Prop = {
  value: string | null;
  height?: number;
  errorMessage?: string;
  onChange: (value: string) => void;
}


export const RichTextEditor: FC<Prop> = ({ value: initValue,errorMessage, height = 350, onChange }) => {
  const handleEditorChange = (value: string) => {
    onChange(value);
  };

  return (
    <>
      <ReactQuill
        style={{
          height: height,
        }}
        value={initValue || ''}
        onChange={handleEditorChange}
        modules={{
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: [] }],
              ['link'],
              ['clean'],
            ],
          },
        }}
      />
      <ErrorContainer error={errorMessage || ''} text />
    </>

  );
}