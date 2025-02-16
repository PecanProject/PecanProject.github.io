import React from "react";
import Layout from "@theme/Layout";
import "./documentation.css";
import Foot from "@docusaurus/Head";
function Versioin153() {
  return (
    <>
      <Layout title="Versioin153">
        <Foot>
          <body className="documentation"></body>
        </Foot>
        <iframe
          src="https://pecanproject.github.io/pecan-documentation/v1.5.3"
          style={{ border: "none" }}
          width="100%"
          height="100%"
          id="iFrame6"
        >
          <p>
            <a href="/en-US/docs/Glossary">
              Fallback link for browsers that don't support iframes
            </a>
          </p>
        </iframe>
      </Layout>
    </>
  );
}

export default Versioin153;
