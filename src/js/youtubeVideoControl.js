export default async () => {
    const playerBoxes = document.querySelectorAll('.js-video-box');

    if(playerBoxes.length > 0) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.defer = true;
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = function() {
            Array.from(playerBoxes).forEach((playerBox) => {
                let videoId,
                    videoContainer = playerBox.firstElementChild;
    
                videoContainer.id = getRandomInt(1000000);
                videoId = videoContainer.dataset.youtubeId;

                let curplayer = createPlayer({
                    id: videoContainer.id,
                    height:'1000',
                    width:'530',
                    videoId: videoId
                });
            })  
        }
    
        function createPlayer(playerInfo) {
            return new YT.Player(playerInfo.id, {
               height: playerInfo.height,
               width: playerInfo.width,
               videoId: playerInfo.videoId
            });
        }

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    } else {
        return;
    }
}

