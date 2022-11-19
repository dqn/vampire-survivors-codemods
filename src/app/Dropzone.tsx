"use client";

import { useDropzone, DropzoneOptions } from "react-dropzone";

export type DropEventListener = NonNullable<DropzoneOptions["onDrop"]>;

type Props = {
  onDrop: DropEventListener;
};

export const Dropzone: React.FC<Props> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="flex h-48 items-center justify-center rounded-lg border border-gray-700"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the main.bundle.js here ...</p>
      ) : (
        <p className="text-center">
          Drop <code>main.bundle.js</code> here
          <br />
          or
          <br /> click to select it
        </p>
      )}
    </div>
  );
};
