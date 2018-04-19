// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    history: true,
    dependencies: [
        { src: 'plugin/markdown/marked.js' },
        { src: 'plugin/markdown/markdown.js' },
        { src: 'plugin/notes/notes.js', async: true },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } }
    ]
});

var videoPlaySpeedMap = new Map([
    ['docker-npm-init', 3.0],
    ['docker-npm-shell-install', 2.0],
    ['docker-npm-shell-boot', 2.0],
    ['docker-dev-shell-npm', 2.5],
    ['docker-dotnet-setup', 2.5],
    ['docker-dotnet-serve', 3.0],
    ['docker-compose-application', 2.5],
    ['docker-compose-dev-tools', 2.0],
    ['docker-go-run', 2.5],
    ['docker-go-install', 2.5]
]);

function playFullScreenVideo() {
    let slide = document.querySelector("section.present");
    let video = slide.querySelector('video');

    video.pause();
    video.currentTime = 0;

    if (videoPlaySpeedMap.has(slide.id)) {
        video.playbackRate = videoPlaySpeedMap.get(slide.id);
    }

    video.play();
}

Reveal.addEventListener('vs-npm-shell-boot', playFullScreenVideo, false);
Reveal.addEventListener('vs-npm-shell-install', playFullScreenVideo, false);
Reveal.addEventListener('vs-npm-init', playFullScreenVideo, false);
Reveal.addEventListener('vs-go-run', playFullScreenVideo, false);
Reveal.addEventListener('vs-go-install', playFullScreenVideo, false);
Reveal.addEventListener('vs-dotnet-setup', playFullScreenVideo, false);
Reveal.addEventListener('vs-dotnet-serve', playFullScreenVideo, false);
Reveal.addEventListener('vs-dev-shell-npm', playFullScreenVideo, false);
Reveal.addEventListener('vs-compose-application', playFullScreenVideo, false);
Reveal.addEventListener('vs-compose-dev-tools', playFullScreenVideo, false);
