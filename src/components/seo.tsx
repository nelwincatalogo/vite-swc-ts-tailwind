import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string | 'website' | 'article';
  image?: string;
  keywords?: string;
  children?: React.ReactNode;
}

export default function SEO({
  title = 'DvCode',
  description = 'Innovation in Every Step',
  name = 'DvCode',
  image = 'https://dvcode.tech/assets/landscape_logo.png',
  keywords = 'dvcode, dv, code, innovation, step, website, IT, IT Solution, clients, cutting-edge, ganap, Ganap!, technologies, landing page, business, advance',
  type = 'website',
  children,
}: SeoProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:keywords" content={keywords} />
      {/* End standard metadata tags */}

      {/* OpenGraph tags */}
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {/* End OpenGraph tags */}

      {/* Twitter tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      {/* End Twitter tags */}

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <link rel="icon" href="https://dvcode.tech/assets/dvcode_icon.png" />

      {children}
    </Helmet>
  );
}
