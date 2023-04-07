const sentences = [
  { english: 'I have already ironed the skirt.', sinhala: '01. මම දැනටමත් සාය මැදලා ඉවරයි.' },
  { english: 'We have visited America several times.', sinhala: '02.අපි ඇමෙරිකාවේ කිහිප වතාවක්ම ගිහින් තිබෙනවා.' },
  { english: 'I like to drink a cup of coffee before I_go to-bed.', sinhala: '03. මම ඇඳට යන්න කලින් කෝපි කෝප්පයක් බොන්න කැමතියි.' },
  { english: 'I like to wear the black frock.', sinhala: '04. මම කැමතියි කලුපාට ගවුම අදින්න.' },
  { english: 'I like to wear a comfortable dress before I_go to-bed.', sinhala: '05. මම ඇඳට යන්න කලින් පහසු ඇදුමක් අදින්න කැමතියි.' },
  { english: 'I\'m extremely happy since I retired.', sinhala: '06. විශ්‍රාම ගියාට පසු ඉඳන් මම ගොඩක් සතුටින්.' },
  { english: 'She came to the home while mother was cooking.', sinhala: '07. මව උයමින් සිටින අතර ඇ‍ය නිවසට පැමිණියේය.' },
  { english: 'My mother was angry about my marks.', sinhala: '08. මගේ ලකුණු පිළිබඳව මගේ මව සිටියේ තරහින්.' },
  { english: 'My parents were angry about my love affair.', sinhala: '09. මගේ ප්‍රේම සම්බන්ධය පිළිබඳව මගේ දෙමාපියන් සිටියේ තරහින්.' },
  { english: 'No one even brought a cake to celebrate my birthday.', sinhala: '10. කිසිවකු හෝ මගේ උපන්දිනය ස්මරීමට කේක් එකක්වත් ගෙන ඇවිත් නෑ.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://krishbro.github.io/English-Sent-Maker-09/";
});
