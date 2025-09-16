declare module "pdfjs-dist/build/pdf.mjs" {
  // Import the base pdfjs types
  import {
    getDocument,
    GlobalWorkerOptions,
    version,
    PDFDocumentProxy,
    PDFPageProxy,
    RenderTask,
    RenderParameters,
  } from "pdfjs-dist";

  export {
    getDocument,
    GlobalWorkerOptions,
    version,
    PDFDocumentProxy,
    PDFPageProxy,
    RenderTask,
    RenderParameters,
  };
}
