const authors = [
 document.getElementById('bY').checked, // bnei yissaschar
 document.getElementById('yB'), // yodei binah
 document.getElementById('shSh'), // shem shlomo
 document.getElementById('dT'), // darkei teshuvah
 document.getElementById('mE'), // minchas elozar
 document.getElementById('kKASh'), // the rov
 document.getElementById('sh') // misc.
]
 // subjects
const ch = document.getElementById('ch'); // chumash
const mu = document.getElementById('mu'); // musir
const shS = document.getElementById('shS'); // shas
const na = document.getElementById('na'); // nach
const tar = document.getElementById('tar'); // taryag mitzvohs
const hal = document.getElementById('hal'); // halachah
const shUt = document.getElementById('shUt'); // shailos u'teshuvas
const markI = document.getElementById('markI');
const markII = document.getElementById('markII');
const markIII = document.getElementById('markIII');

//const authors = [bY, yB, shSh, dT, mE, kKASh, sh];
const subjects = [ch, mu, shS, na, tar, hal, shUt, markI, markII, markIII];

function check(box) {
    return box.checked;
}

function init() {
    const checkedAuthors = [];
    const checkedSubjects = [];
if(!bY)alert("oops");
    // authors.forEach(e => {if(check(e) === true) checkedAuthors.push(e)});
    // subjects.forEach(e => {if(check(e) === true) checkedSubjects.push(e)});
console.log(document.getElementById('bY').checked);console.log(authors[0])
    for(let i=0;i<authors.length;i++){ 
        //if(check(authors[i]) === true) checkedAuthors.push(authors[i]);        
        
    }
    // console.log(checkedAuthors);
    // console.log(checkedSubjects);
}