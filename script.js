function loadLevel() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayLevel(data.data))
}

const levelWordLoad = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWords(data.data))
}

// id : 3
// level: 2
//meaning :"সতর্ক"
// pronunciation : "কশাস"
// word : "Cautious"

const displayLevelWords = (words) => {
    console.log(words)
    const levelWordContainer = document.getElementById('level-word-container');
    levelWordContainer.innerHTML = '';
    words.forEach(word => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="text-center space-y-4 bg-white rounded-2xl p-9">
    <h2 class="font-bold text-3xl">${word.word}</h2>
    <p class="font-semibold text-base">Meaning /Pronounciation</p>
    <div class="font-bangla font-semibold text-xl text-gray-700">"${word.meaning} / ${word.pronunciation}"</div>
    <div class="flex items-center justify-between pt-4">
      <button class="btn bg-sky-100 hover:bg-sky-400 text-gray-700"><i class="fa-solid fa-circle-info"></i></button>
      <button class="btn bg-sky-100 hover:bg-sky-400 text-gray-700"><i class="fa-solid fa-volume-high"></i></button>
    </div>
   </div>
        `
        levelWordContainer.append(div);
    });
}

const displayLevel = (levels) => {
    const levelsContainer = document.getElementById('level-container');
    levelsContainer.innerHTML = '';
    levels.forEach(level => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
        <button onclick="levelWordLoad(${level.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${level.level_no}</button>
      </div>
        `
        levelsContainer.append(div);
    });
}

loadLevel()