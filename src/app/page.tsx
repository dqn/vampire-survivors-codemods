"use client";

import { useCallback } from "react";
import { DropEventListener, Dropzone } from "./Dropzone";

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

const Page: React.FC = () => {
  const onDrop = useCallback<DropEventListener>((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file === undefined) {
      return;
    }

    readFile(file).then((text) => {
      console.log(text);
    });
  }, []);

  return (
    <main className="mx-auto max-w-screen-md p-5">
      <h1 className="py-16 text-center text-4xl font-bold">
        Vampire Survivors Codemods
      </h1>

      <Dropzone onDrop={onDrop} />
    </main>
  );
};
export default Page;
