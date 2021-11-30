const videoElement = document.getElementById('video');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

// Prompt to select media stream
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        
    }
}

startButton.addEventListener('click', async () => {
    // Disable button
    startButton.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    startButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    if (document.pictureInPictureElement) {
        document
            .exitPictureInPicture()
            .catch(error => {

            })
    } else {

    }
});

// On load
selectMediaStream();

// stopButton.disabled = true;
// // Start picture in picture
// await videoElement.exitPictureInPicture();
// // Reset Button
// stopButton.disabled = false;