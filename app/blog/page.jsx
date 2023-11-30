"use client";
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import { ImageDrop } from "quill-image-drop-module";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import "quill-image-uploader/dist/quill.imageUploader.min.css";

Quill.register(
  {
    "modules/imageResize": ImageResize,
    "modules/imageDrop": ImageDrop,
    "modules/imageUploader": ImageUploader,
  },
  true
);

const Page = () => {
  const [value, setValue] = useState("");

  const toolbarOptions = [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: [1, 2, 3, 4, 5, 6, false] }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }, { size: ["small", false, "large", "huge"] }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
    imageResize: {
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
    imageDrop: true,
    // imageUploader: {
    //   upload: (file) => {
    //     new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve(
    //           "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
    //         );
    //       }, 3500);
    //     });
    //   },
    // },
  };

  return (
    <div className="mt-20">
      <h1 className="text-4xl text-teal-400 text-center font-medium">
        Write blog with react Quill
      </h1>
      <ReactQuill
        className="w-3/4 mx-auto my-10"
        theme="snow"
        value={value}
        onChange={(e) => setValue(e)}
        modules={modules}
      />
      <h1 className="my-10 text-center text-4xl underline">Output</h1>
      <div
        className="w-3/4 mx-auto"
        dangerouslySetInnerHTML={{ __html: value }}
      ></div>
    </div>
  );
};

export default Page;
