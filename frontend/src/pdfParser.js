import * as pdfjsLib from "pdfjs-dist";

import "pdfjs-dist/build/pdf.worker.mjs";


pdfjsLib.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.mjs", import.meta.url).toString();

export const extractTextFromPDF = async (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = async () => {
      try {
        console.log("Reading file...");
        const typedArray = new Uint8Array(reader.result);
        const loadingTask = pdfjsLib.getDocument({ data: typedArray });

        const pdf = await loadingTask.promise;
        console.log(`PDF Loaded, ${pdf.numPages} pages found.`);

        let textContent = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          console.log(`Extracting text from page ${i}...`);
          const page = await pdf.getPage(i);
          const text = await page.getTextContent();
          textContent += text.items.map((item) => item.str).join(" ") + "\n";
        }

        console.log("Text extraction complete!");
        resolve(textContent);
      } catch (error) {
        console.error("Error in extractTextFromPDF:", error);
        reject(error);
      }
    };

    reader.onerror = (error) => {
      console.error("FileReader error:", error);
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};
