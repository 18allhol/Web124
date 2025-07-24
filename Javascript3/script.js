//Allyvia Holland Javascript 3
// Populates voice dropdown with English voices and restores previous selection using localStorage
// Updates msg.voice and previews the voice when changed
// Toggles speech on/off based on Speak and Stop buttons
// Displays live rate and pitch values as user adjusts sliders
// Adds "Test Voice" functionality to preview selected voice without using custom textconst msg = new SpeechSynthesisUtterance();

let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
const testButton = document.querySelector('#test');
const rateDisplay = document.getElementById('rate-val');
const pitchDisplay = document.getElementById('pitch-val');
const textInput = document.querySelector('[name="text"]');
msg.text = textInput.value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');

  const savedVoice = localStorage.getItem('voiceName');
  if (savedVoice) {
    voicesDropdown.value = savedVoice;
    msg.voice = voices.find(voice => voice.name === savedVoice);
  }
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  localStorage.setItem('voiceName', this.value);
  previewVoice();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    msg.text = textInput.value;
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  if (this.name === "rate") {
    rateDisplay.textContent = this.value;
  } else if (this.name === "pitch") {
    pitchDisplay.textContent = this.value;
  }
}

function previewVoice() {
  msg.text = "This is your selected voice.";
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', () => {
  msg.text = textInput.value;
  toggle();
});
stopButton.addEventListener('click', () => toggle(false));
testButton.addEventListener('click', previewVoice);
