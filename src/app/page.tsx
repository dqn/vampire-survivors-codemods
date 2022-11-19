"use client";

import { useCallback, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { DropEventListener, Dropzone } from "./Dropzone";
import { Form, FormValues } from "./Form";

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

const Page: React.FC = () => {
  const [src, setSrc] = useState("");

  const handleDrop = useCallback<DropEventListener>((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file === undefined) {
      return;
    }

    readFile(file).then((text) => {
      console.log(text);
      setSrc(text);
    });
  }, []);

  const handleSubmit = useCallback<SubmitHandler<FormValues>>((values) => {
    console.log(values);
  }, []);

  return (
    <main className="mx-auto max-w-screen-md p-5">
      <h1 className="py-16 text-center text-4xl font-bold">
        Vampire Survivors Codemods
      </h1>

      {src === "" ? (
        <Dropzone onDrop={handleDrop} />
      ) : (
        <div className="mx-auto max-w-sm">
          <Form onSubmit={handleSubmit} />
        </div>
      )}
    </main>
  );
};
export default Page;
