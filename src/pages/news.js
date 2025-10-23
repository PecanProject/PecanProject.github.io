import React from "react";
import { Redirect } from "@docusaurus/router";

function News() {
  // Redirect to blog - news content has been migrated to blog posts
  return <Redirect to="/blog" />;
}

export default News;
