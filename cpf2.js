const header = document.getElementById("header");
const mainSection = document.getElementById("main-section");
const labels = document.querySelector(".labels");
const inputs = document.getElementsByClassName("inputs");
const boxes = document.querySelector(".boxes");
const boxesContainer = document.querySelector(".boxes-container");
const engButton = document.getElementById("engButton");
const hebButton = document.getElementById("hebButton");
const yidButton = document.getElementById("yidButton")

function hebrewTranslate() {
  header.innerHTML = '<h1 id="title">אוצר סיפרי מונקאטש</h1>';
  header.style.textAlign = 'right';
  header.style.backgroundImage = 'linear-gradient(to left, blue, white)';
  yidButton.style.display = 'initial';
  hebButton.style.display = 'none';
  engButton.style.display = 'initial';
  mainSection.innerHTML = '<div id="instructions"><h1>ברוך הבא</h1><h2>אנא בחר את הבחירות מבין הדברים הבאים</h2><h2>או לחץ <a href="Untitled-1.html">כאן </a>לצפייה בהכל</h2></div><div class="boxes" id="authors"><div class="boxes-container"><label for="bY" class="labels"><input type="checkbox" id="bY" class="inputs">בני יששכר</label><label for="yB" class="labels"><input type="checkbox" id="yB" class="inputs">יודעי בינה</label><label for="shSh" class="labels"><input type="checkbox" id="shSh" class="inputs">שם שלמה</label><label for="dT" class="labels"><input type="checkbox" id="dT" class="inputs">דרכי תשובה</label><label for="mE" class="labels"><input type="checkbox" id="mE" class="inputs">מנחת אלעזר</label><label for="kKASh" class="labels"><input type="checkbox" id="kKASh" class="inputs">כ"ק אדמו"ר שליט"א</label><label for="sh" class="labels"><input type="checkbox" id="sh" class="inputs">שונים</label></div></div><div class="boxes" id="subjects"><div class="boxes-container"><label for="ch" class="labels"><input type="checkbox" id="ch" class="inputs">חומש</label><label for="mu" class="labels"><input type="checkbox" id="mu" class="inputs">מ"ומ</label><label for="shS" class="labels"><input type="checkbox" id="shS" class="inputs">ש"ס</label><label for="na" class="labels"><input type="checkbox" id="na" class="inputs">נ"ך</label><label for="tar" class="labels"><input type="checkbox" id="tar" class="inputs">תרי"ג מצוות</label><label for="hal" class="labels"><input type="checkbox" id="hal" class="inputs">הלכה</label><label for="shUt" class="labels"><input type="checkbox" id="shUt" class="inputs">שא"ות</label><label for="markI" class="labels"><input type="checkbox" id="markI" class="inputs">???</label><label for="markII" class="labels"><input type="checkbox" id="markII" class="inputs">???</label><label for="markIII" class="labels"><input type="checkbox" id="markIII" class="inputs">???</label><button id="searchBtn" type="button" onclick="init()">search</button></div></div>';
  let i = inputs.length-1;
  while (i>=0) { 
    inputs[i].classList.add('right');
    i--;
  };
};

hebrewTranslate();

function englishTranslate() {
  header.innerHTML = '<h1 id="title">Munkatch seforim library</h1>';
  header.style.textAlign = 'left';
  header.style.backgroundImage = 'linear-gradient(to right, blue, white)';
  engButton.style.display = 'none';
  hebButton.style.display = 'initial';
  yidButton.style.display = 'initial';
  mainSection.innerHTML = '<div id="instructions"><h1>Welcome</h1><h2>Please make selections from the following:</h2><h2>or click <a href="Untitled-1.html">here</a> to view everything</h2></div><div class="boxes" id="authors"><div class="boxes-container"><label for="bY" class="labels"><input type="checkbox" id="bY" class="inputs">Bnei Yisaschar</label><label for="yB" class="labels"><input type="checkbox" id="yB" class="inputs">Yodei Binah</label><label for="shSh" class="labels"><input type="checkbox" id="shSh" class="inputs">Shem Shlomo</label><label for="dT" class="labels"><input type="checkbox" id="dT" class="inputs">Darkei Teshuvah</label><label for="mE" class="labels"><input type="checkbox" id="mE" class="inputs">Minchas Elozar</label><label for="kKASh" class="labels"><input type="checkbox" id="kKASh" class="inputs">כ"ק אדמו"ר שליט"א</label><label for="sh" class="labels"><input type="checkbox" id="sh" class="inputs">miscellaneous</label></div></div><div class="boxes" id="subjects"><div class="boxes-container"><label for="ch" class="labels"><input type="checkbox" id="ch" class="inputs">Pentateuch</label><label for="mu" class="labels"><input type="checkbox" id="mu" class="inputs">Ethics and Philosophy</label><label for="shS" class="labels"><input type="checkbox" id="shS" class="inputs">Talmud</label><label for="na" class="labels"><input type="checkbox" id="na" class="inputs">n"ch</label><label for="tar" class="labels"><input type="checkbox" id="tar" class="inputs">תרי"ג מצוות</label><label for="hal" class="labels"><input type="checkbox" id="hal" class="inputs">הלכה</label><label for="shUt" class="labels"><input type="checkbox" id="shUt" class="inputs">שא"ות</label><label for="markI" class="labels"><input type="checkbox" id="markI" class="inputs">???</label><label for="markII" class="labels">???<input type="checkbox" id="markII" class="inputs"></label><label for="markIII" class="labels"><input type="checkbox" id="markIII" class="inputs">???</label><button id="searchBtn" type="button" onclick="init()">search</button></div></div>';
  let i = inputs.length-1;
  while (i>=0) { 
    inputs[i].classList.remove('right');
    i--;
  };
}

function yiddishTranslate() {
  header.innerHTML = '<h1 id="title">אוצר סיפרי מונקאטש</h1>';
  header.style.textAlign = 'right';
  header.style.backgroundImage = 'linear-gradient(to left, blue, white)';
  yidButton.style.display = 'none';
  hebButton.style.display = 'initial';
  engButton.style.display = 'initial';
  mainSection.innerHTML = '<div id="instructions"><h1>באַגריסונג</h1><h2>ביטע מאַכן סאַלעקשאַנז פון די פאלגענדע</h2><h2>אָדער גיט <a href="Untitled-1.html">דאָ </a>צו זען אַלע</h2></div><div class="boxes" id="authors"><div class="boxes-container"><label for="bY" class="labels"><input type="checkbox" id="bY" class="inputs">בני יששכר</label><label for="yB" class="labels"><input type="checkbox" id="yB" class="inputs">יודעי בינה</label><label for="shSh" class="labels"><input type="checkbox" id="shSh" class="inputs">שם שלמה</label><label for="dT" class="labels"><input type="checkbox" id="dT" class="inputs">דרכי תשובה</label><label for="mE" class="labels"><input type="checkbox" id="mE" class="inputs">מנחת אלעזר</label><label for="kKASh" class="labels"><input type="checkbox" id="kKASh" class="inputs">כ"ק אדמו"ר שליט"א</label><label for="sh" class="labels"><input type="checkbox" id="sh" class="inputs">שונים</label></div></div><div class="boxes" id="subjects"><div class="boxes-container"><label for="ch" class="labels"><input type="checkbox" id="ch" class="inputs">חומש</label><label for="mu" class="labels"><input type="checkbox" id="mu" class="inputs">מ"ומ</label><label for="shS" class="labels"><input type="checkbox" id="shS" class="inputs">ש"ס</label><label for="na" class="labels"><input type="checkbox" id="na" class="inputs">נ"ך</label><label for="tar" class="labels"><input type="checkbox" id="tar" class="inputs">תרי"ג מצוות</label><label for="hal" class="labels"><input type="checkbox" id="hal" class="inputs">הלכה</label><label for="shUt" class="labels"><input type="checkbox" id="shUt" class="inputs">שא"ות</label><label for="markI" class="labels"><input type="checkbox" id="markI" class="inputs">???</label><label for="markII" class="labels"><input type="checkbox" id="markII" class="inputs">???</label><label for="markIII" class="labels"><input type="checkbox" id="markIII" class="inputs">???</label><button id="searchBtn" type="button" onclick="init()">search</button></div></div>';
  let i = inputs.length-1;
  while (i>=0) { 
    inputs[i].classList.add('right');
    i--;
  };
}