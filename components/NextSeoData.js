import { ArticleJsonLd, NextSeo } from 'next-seo'

import React from 'react'

const NextSeoData = ({ slug, metadata, publishedDate }) => {
  return (
    <>
      <NextSeo
        additionalMetaTags={[
          { property: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'twitter:url',
            content: `https://temuulengan.github.io/personal-web/blog/${slug}`,
          },
          { property: 'twitter:title', content: metadata.title },
          {
            property: 'twitter:description',
            content: metadata.frontmatter.summary,
          },
          { property: 'twitter:image', content: metadata.frontmatter.image },
        ]}
        canonical={`https://temuulengan.github.io/personal-web/blog/${slug}`}
        description={metadata.frontmatter.summary}
        openGraph={{
          url: `https://temuulengan.github.io/personal-web/blog/${slug}`,
          site_name: 'Temuulen Gan',
          title: metadata.title,
          description: metadata.frontmatter.summary,
          type: 'article',
          article: {
            authors: ['Temuulen Gan'],
            publishedTime: publishedDate,
            modifiedTime: publishedDate,
            tags: ['Programming', 'Web Development', 'Software Engineering'],
          },
          images: [
            {
              url: metadata.frontmatter.image,
              alt: metadata.title,
            },
          ],
        }}
        title={metadata.title}
      />
      <ArticleJsonLd
        authorName="Temuulen Gan"
        dateModified={publishedDate}
        datePublished={publishedDate}
        description={metadata.frontmatter.summary}
        images={[metadata.frontmatter.image]}
        publisherLogo="https://via.placeholder.com/150"
        publisherName="Temuulen Gan"
        title={metadata.title}
        url={`https://temuulengan.github.io/personal-web/blog/${slug}`}
      />
    </>
  )
}

export default NextSeoData
