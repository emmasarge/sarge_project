import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";


export const NoPage = () => {
  return (
    <HelmetProvider>
    <Helmet>
      <title>Emma Sargeant | 404 </title>
      <meta name="robots" content="noindex" />

      <meta
        name="description"
        content="Page not found."
      />
    </Helmet>
    <div className="min-h-screen flex justify-center items-center w-full max-w-[1900px]">
      <h1 className="text-[1.5em] tracking-wide mx-auto">404</h1>
    </div>
    </HelmetProvider>
  );
};
