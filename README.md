# utube

Watch YouTube Live Streams via a Cloudflare Worker

## Advantages

 - AD free
 - Fast
 - Scalable 
 - Secure
 - Serverless 

## Use-cases

- Can play on any media player, like VLC, which supports .m3u8
- Make a .m3u playlist and use it on your Smart TV/Kodi/Android device 

## How to use
- Go to https://workers.cloudflare.com/ and create a Cloudflare worker
- Copy the contents of the `worker.js` file into the the newly-created worker script file
- Save and deploy

Your worker route would be something like `yourapp.example.workers.dev`

To play a live stream you've to pass the YouTube channel id or the video id to the worker
For hls streams use `master.m3u8` in the url path
For dash streams use `master.m3u8` in the url path
For ex:
YouTube url : `https://www.youtube.com/channel/UCP0uG-mcMImgKnJz-VjJZmQ/live`
New worker url: `https://yourapp.example.workers.dev/stream/UCP0uG-mcMImgKnJz-VjJZmQ/master.m3u8`

**Tip**: `https://www.youtube.com/channel/UCP0uG-mcMImgKnJz-VjJZmQ/live` and `https://www.youtube.com/watch?v=jjH6v95z3Nw` are both acceptable urls, but the former is preferable as it is a permanent url.

### Working demo
[https://utube.arapurayil.com/stream/UCP0uG-mcMImgKnJz-VjJZmQ/master.m3u8](https://utube.arapurayil.com/stream/UCP0uG-mcMImgKnJz-VjJZmQ/master.m3u8)

Play the above url in VLC media player or any player supporting hls or dash streams
