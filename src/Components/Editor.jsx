import React from 'react'
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import '../style/editorStyle.css'

async function uploadFile(file) {
  const body = new FormData();
  body.append("file", file);
 
  const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
    method: "POST",
    body: body,
  });
  return (await ret.json()).data.url.replace(
    "tmpfiles.org/",
    "tmpfiles.org/dl/"
  );
}

const Editor = () => {
  
  const editor = useCreateBlockNote({
      initialContent: [
        {
          type: "paragraph",
          content: "Welcome to this demo!",
        },
        {
          type: "paragraph",
          content: "Upload an image using the button below",
        },
        {
          type: "image",
        },
        {
          type: "paragraph",
        },
      ],
      uploadFile,
  });
  
  return (
    <BlockNoteView editor={editor} data-theming-css-variables-demo />
  )
}

export default Editor