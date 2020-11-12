import React from "react";
import {Helmet} from "react-helmet";
import {seoContents} from "./content";

const SEO = ({page}) => {
  let content;
  for (let seoContent of seoContents.meta) {
    if (seoContent.page === page) {
      content = seoContent;
    }
  }

  if (!content) {
    content = seoContents.meta[0]
  }

  return (
    <Helmet>
      <title>{content.title}</title>
      <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={content.description} />
      <meta name="keywords" content={content.keywords} />
    </Helmet>
  )
}

export default SEO
