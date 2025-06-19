import Head from "next/head";
import React from "react";

export default function CustomHead({ title, description, canonical = true }) {
    // Use window.location only on the client
    let url = "https://tfilatunes.com";
    if (typeof window !== "undefined") {
        url = `https://tfilatunes.com${window.location.pathname}${window.location.search}${window.location.hash}`;
    }
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={url} />}
        </Head>
    );
}

