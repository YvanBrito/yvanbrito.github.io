const recordBtn = document.getElementById('recordBtn');
const stopBtn = document.getElementById('stopBtn');
let mediaRecorder = {};
let timeInSeconds = 0;
let timerId = 0;

function secondsToHMS(time) {
  const hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return (hours < 10 ? '0' : '') + minutes + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function myTimer() {
  timeInSeconds++;
  document.getElementById("timer").innerText = secondsToHMS(timeInSeconds);
}

async function recordScreen() {
  return await navigator.mediaDevices.getDisplayMedia({
      audio: true, 
      video: { mediaSource: "screen"}
  });
}

function createRecorder (stream, mimeType) {
  let recordedChunks = []; 

  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }  
  };
  mediaRecorder.onstop = function () {
     saveFile(recordedChunks, mimeType);
     recordedChunks = [];
  };
  mediaRecorder.start(200);
  return mediaRecorder;
}

function saveFile(recordedChunks, mimeType){
  const blob = new Blob(recordedChunks, {
     type: mimeType
   });
   let filename = window.prompt('Enter file name');
   let downloadLink = document.createElement('a');
   downloadLink.href = URL.createObjectURL(blob);
   downloadLink.download = `${filename}.webm`;

   document.body.appendChild(downloadLink);
   downloadLink.click();
   URL.revokeObjectURL(blob); // clear from memory
   document.body.removeChild(downloadLink);
}

recordBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  if (mediaRecorder && mediaRecorder.state === 'recording'){
    mediaRecorder.pause();
    clearInterval(timerId);

    document.getElementById("recordAnim").className = '';
    document.getElementById("mainIcon").className = '';
    document.getElementById("mainIcon").classList.add('playIcon');
  } else if (mediaRecorder && mediaRecorder.state === 'paused') {
    mediaRecorder.resume();
    timerId = setInterval(myTimer, 1000);

    document.getElementById("recordAnim").classList.add('recordAnim');
    document.getElementById("mainIcon").className = '';
    document.getElementById("mainIcon").classList.add('pauseIcon');
  } else {
    let stream = await recordScreen();
    let mimeType = 'video/webm';
    mediaRecorder = createRecorder(stream, mimeType);
  
    document.getElementById("recordAnim").classList.add('recordAnim');
    document.getElementById("mainIcon").className = '';
    document.getElementById("mainIcon").classList.add('pauseIcon');
  
    timeInSeconds = 0;
    document.getElementById("timer").innerText = secondsToHMS(timeInSeconds);
    timerId = setInterval(myTimer, 1000);
  }
});

stopBtn.addEventListener('click', async (e) => {
  mediaRecorder.stop && mediaRecorder.state !== 'inactive' && mediaRecorder.stop();
  clearInterval(timerId);

  document.getElementById("recordAnim").classList.remove('recordAnim');
  document.getElementById("mainIcon").className = '';
  document.getElementById("mainIcon").classList.add('recordIcon');
});
