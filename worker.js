async function dashUrl(ytUrl) {
  return await fetch(ytUrl)
    .then(async (r) => await r.text())
    .then((r) => r.match(/(?<=dashManifestUrl":").+?(?=",)/g)[0]);
}

async function hlsUrl(ytUrl) {
  return await fetch(ytUrl)
    .then(async (r) => await r.text())
    .then((r) => r.match(/(?<=hlsManifestUrl":").*\.m3u8/g)[0]);
}

async function handleRequest(request) {
  let pathName = new URL(request.url).pathname.split("/");
  switch (pathName[3]) {
    case "master.mpd":
      try {
        return Response.redirect(
          await dashUrl(
            "https://www.youtube.com/channel/" + pathName[2] + "/live"
          ),
          302
        );
      } catch (err) {
        return Response.redirect(
          await dashUrl("https://www.youtube.com/watch?v=" + pathName[2]),
          302
        );
      }
    case "master.m3u8":
      try {
        return Response.redirect(
          await hlsUrl(
            "https://www.youtube.com/channel/" + pathName[2] + "/live"
          ),
          302
        );
      } catch (err) {
        return Response.redirect(
          await hlsUrl("https://www.youtube.com/watch?v=" + pathName[2]),
          302
        );
      }
    default:
      console.log("Error: Invalid path. Use master.mpd or master.m3u8");
      break;
  }
}

addEventListener("fetch", async (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});
