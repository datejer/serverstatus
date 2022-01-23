import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <title>Minecraft Server Status</title>
      <link rel="icon" href="/favicon.png" />

      <meta name="title" content="Minecraft Server Status" />
      <meta
        name="description"
        content="Minecraft Server Status API - get all the information about a server!"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://server.mojan.ga/" />
      <meta property="og:title" content="Minecraft Server Status" />
      <meta
        property="og:description"
        content="Minecraft Server Status API - get all the information about a server!"
      />
      <meta property="og:image" content="/favicon.png" />

      <meta property="twitter:url" content="https://server.mojan.ga/" />
      <meta property="twitter:domain" content="server.mojan.ga" />
      <meta property="twitter:title" content="Minecraft Server Status" />
      <meta
        property="twitter:description"
        content="Minecraft Server Status API - get all the information about a server!"
      />
      <meta property="twitter:image" content="/favicon.png" />

      <meta property="og:site_name" content="Minecraft Server Status" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
