"use client";

import fileDownload from "js-file-download";
import { useCallback, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { modifyCode } from "../helpers/modifyCode";
import { readFile } from "../helpers/readFile";
import { DropEventListener, Dropzone } from "./Dropzone";
import { Form, FormValues } from "./Form";

const Page: React.FC = () => {
  const [src, setSrc] = useState("");

  const handleDrop = useCallback<DropEventListener>((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file === undefined) {
      return;
    }

    readFile(file).then(setSrc);
  }, []);

  const handleSubmit = useCallback<SubmitHandler<FormValues>>(
    (values) => {
      fileDownload(modifyCode(src, values), "main.bundle.js");
    },
    [src]
  );

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
