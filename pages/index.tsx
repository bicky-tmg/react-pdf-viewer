import type { NextPage } from "next";
import packageJson from "../package.json";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const pdfjsVersion = packageJson.dependencies["pdfjs-dist"];

const Home: NextPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "64rem",
        textAlign: "center",
      }}
    >
      <h1>React PDF Viewer</h1>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
      >
        <div style={{ height: "50rem", margin: "2rem 0" }}>
          <Viewer
            fileUrl="/sample.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default Home;
