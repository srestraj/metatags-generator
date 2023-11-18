export const generateTags = (
  description: string | null,
  image: string | null,
  ogType: string | null,
  title: string | null,
  twitterCard: string | null,
  url: string | null
) => {
  const tag =
    `<!-- Primary Meta Tags -->
<title>${title ? title : "Meta Tags Extractor"}</title>
<meta name="title" content="${title ? title : "Meta Tags Extractor"}" />
<meta name="description" content="${description ? description : "Extract and preview meta tags from any URL"}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="${ogType ? ogType : "website"}" />
<meta property="og:url" content="${url ? url : window.location.origin}" />
<meta property="og:title" content="${title ? title : "Meta Tags Extractor"}" />
<meta property="og:description" content="${description ? description : "Extract and preview meta tags from any URL"}" />
<meta property="og:image" content="${image ? image : `${window.location.origin}/img/og-image.png`}" />
  
<!-- Twitter -->
<meta property="twitter:card" content="${twitterCard ? twitterCard : "summary_large_image"}" />
<meta property="twitter:url" content="${url ? url : window.location.origin}" />
<meta property="twitter:title" content="${title ? title : "Meta Tags Extractor"}" />
<meta property="twitter:description" content="${description ? description : "Extract and preview meta tags from any URL"}" />
<meta property="twitter:image" content="${image ? image : `${window.location.origin}/img/og-image.png`}" />  
<!-- Generated with ${window.location.origin} -->`

  return tag;
}