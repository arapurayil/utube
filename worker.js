addEventListener("fetch", (event) => {
    event.respondWith(
        handleRequest(event.request).catch(
            (err) => new Response(err.stack, {status: 500})
        )
    );
});

async function handleRequest(request) {
    let destinationURL = new URL(request.url).searchParams.get('url')
    destinationURL = await fetch(destinationURL)
    destinationURL = await destinationURL.text()
    destinationURL = destinationURL.match(/(?<=hlsManifestUrl":").*\.m3u8/g)[0];
    return Response.redirect(destinationURL, 302)
}
