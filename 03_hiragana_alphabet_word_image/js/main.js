'use strict';

// ひらがなをオブジェクトに格納
const hiragana = {
    a_o:   ['あ', 'い', 'う', 'え', 'お'],
    ka_ko: ['か', 'き', 'く', 'け', 'こ'],
    sa_so: ['さ', 'し', 'す', 'せ', 'そ'],
    ta_to: ['た', 'ち', 'つ', 'て', 'と'],
    na_no: ['な', 'に', 'ぬ', 'ね', 'の'],
    ha_ho: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ma_mo: ['ま', 'み', 'む', 'め', 'も'],
    ya_yo: ['や', 'ゆ', 'よ'],
    ra_ro: ['ら', 'り', 'る', 'れ', 'ろ'],
    wa_nn: ['わ', 'を', 'ん'],
};

// アルファベットをオブジェクトに格納
const alphabet = {
    A_Z: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
};

// ひらがな単語をオブジェクトに格納
const wordHiragana = {
    a_o_w: ['あさがお', 'いるか', 'うきわ', 'えんぴつ', 'おにぎり'],
    ka_ko_w: ['かきごおり', 'きつね', 'くらげ', 'けむし', 'ころっけ'],
    sa_so_w: ['さつまいも', 'しまうま', 'すいか', 'せかい', 'そうじき'],
    ta_to_w: ['たいやき', 'ちきゅう', 'つくえ', 'てぶくろ', 'ともだち'],
    na_no_w: ['なわとび', 'にくまん', 'ぬりえ', 'ねずみ', 'のーと'],
    ha_ho_w: ['はみがき', 'ひつじ', 'ふじ', 'へのへのもへじ', 'ほたる'],
    ma_mo_w: ['ますく', 'みかん', 'むささび', 'めがね', 'ももたろう'],
    ya_yo_w: ['やかん', 'ゆきだるま', 'よーぐると'],
    ra_ro_w: ['らくだ', 'りんご', 'るーれっと', 'れもん', 'ろこもこ'],
    wa_nn_w: ['わたあめ', 'おたく', 'うんち'],
};

// アルファベット単語をオブジェクトに格納
const wordAlphabet = {
    A_Z_w: ['airport', 'bicycle', 'coffee', 'donut', 'egg', 'fork', 'grape', 'hand', 'ice cream', 'japan', 'kitchen', 'lion', 'milk', 'novel', 'ocean', 'piano', 'quiz', 'rice', 'sandwich', 'taxi', 'uniform', 'volleyball', 'window', 'xylophone', 'yard', 'zoo'],
};

// ひらがな画像をオブジェクトに格納
const imageHiragana = {
    a_o_i: ['images/01_h_a.png', 'images/02_h_i.png', 'images/03_h_u.png', 'images/04_h_e.png', 'images/05_h_o.png'],
    ka_ko_i: ['images/06_h_ka.png', 'images/07_h_ki.png', 'images/08_h_ku.png', 'images/09_h_ke.png', 'images/10_h_ko.png'],
    sa_so_i: ['images/11_h_sa.png', 'images/12_h_si.png', 'images/13_h_su.png', 'images/14_h_se.png', 'images/15_h_so.png'],
    ta_to_i: ['images/16_h_ta.png', 'images/17_h_ti.png', 'images/18_h_tu.png', 'images/19_h_te.png', 'images/20_h_to.png'],
    na_no_i: ['images/21_h_na.png', 'images/22_h_ni.png', 'images/23_h_nu.png', 'images/24_h_ne.png', 'images/25_h_no.png'],
    ha_ho_i: ['images/26_h_ha.png', 'images/27_h_hi.png', 'images/28_h_hu.png', 'images/29_h_he.png', 'images/30_h_ho.png'],
    ma_mo_i: ['images/31_h_ma.png', 'images/32_h_mi.png', 'images/33_h_mu.png', 'images/34_h_me.png', 'images/35_h_mo.png'],
    ya_yo_i: ['images/36_h_ya.png', 'images/37_h_yu.png', 'images/38_h_yo.png'],
    ra_ro_i: ['images/39_h_ra.png', 'images/40_h_ri.png', 'images/41_h_ru.png', 'images/42_h_re.png', 'images/43_h_ro.png'],
    wa_nn_i: ['images/44_h_wa.png', 'images/45_h_wo.png', 'images/46_h_nn.png'],

};

// アルファベット画像をオブジェクトに格納
const imageAlphabet = {
    A_Z_w: ['images/51_a_a.png', 'images/52_a_b.png', 'images/53_a_c.png', 'images/54_a_d.png', 'images/55_a_e.png', 'images/56_a_f.png', 'images/57_a_g.png', 'images/58_a_h.png', 'images/59_a_i.png', 'images/60_a_j.png', 'images/61_a_k.png', 'images/62_a_l.png', 'images/63_a_m.png', 'images/64_a_n.png', 'images/65_a_o.png', 'images/66_a_p.png', 'images/67_a_q.png', 'images/68_a_r.png', 'images/69_a_s.png', 'images/70_a_t.png', 'images/71_a_u.png', 'images/72_a_v.png', 'images/73_a_w.png', 'images/74_a_x.png', 'images/75_a_y.png', 'images/76_a_z.png'],
};

const box = document.getElementById('box');
const hiraganaId = document.getElementById('hiragana');
const alphabetId = document.getElementById('alphabet');
const radioId = document.getElementById('language');
// const checkId = document.getElementById('randomCheck');
const word = document.getElementById('word');
const wordImage = document.getElementById('wordImage');

// 初期値
let r1 = 0;
let r2 = 0;
let obName = Object.keys(hiragana)[r1];
let obWordName = Object.keys(wordHiragana)[r1];
let obImageName = Object.keys(imageHiragana)[r1];

// console.log(Object.keys(imageAlphabet).length);
// console.log(imageAlphabet[Object.keys(imageAlphabet)[0]]);
// console.log(imageHiragana[Object.keys(imageHiragana)[1]]);
// console.log(imageHiragana[Object.keys(imageHiragana)[1]].length);
// console.log(imageHiragana[Object.keys(imageHiragana)[1]][3]);

// console.log(Object.keys(imageHiragana).length);

//ロード時に先に画像を読み込む
window.onload = function () {
    let img;
    for (let i = 0; i < Object.keys(imageHiragana).length; i++) {
        for (let j = 0; j < imageHiragana[Object.keys(imageHiragana)[i]].length; j++) {
            img = document.createElement('img');
            img.src = imageHiragana[Object.keys(imageHiragana)[i]][j];
            console.log(img.src);
        }
    }

    for (let i = 0; i < Object.keys(imageAlphabet).length; i++) {
        for (let j = 0; j < imageAlphabet[Object.keys(imageAlphabet)[i]].length; j++) {
            img = document.createElement('img');
            img.src = imageAlphabet[Object.keys(imageAlphabet)[i]][j];
            console.log(img.src);
        }
    }
};


// ラジオボタンクリック時の関数
function def (ob, obWord, obImage) {
    //初期値にする
    r1 = 0;
    r2 = 0;
    obName = Object.keys(ob)[r1];
    obWordName = Object.keys(obWord)[r1];
    obImageName = Object.keys(obImage)[r1];

    box.textContent = ob[obName][r2];
    word.textContent = obWord[obWordName][r2];
    wordImage.src = obImage[obImageName][r2]
    changeColor();
}


// ランダム表示の関数
function randomLang (ob, obWord, obImage) {
    //オブジェクトのKeyを配列にし、その配列の長さを元にランダムの数を格納する
    r1 = Math.floor(Math.random() * Object.keys(ob).length);
    obName = Object.keys(ob)[r1];
    obWordName = Object.keys(obWord)[r1];
    obImageName = Object.keys(obImage)[r1];

    //上記ランダムでKeyNameを取得したので、そのKeyName内の配列のランダム数を格納する
    r2 = Math.floor(Math.random() * ob[obName].length);
    
    box.textContent = ob[obName][r2];
    word.textContent = obWord[obWordName][r2];
    wordImage.src = obImage[obImageName][r2]

}


// 順番表示の関数
function orderLang (ob, obWord, obImage) {
    if (r2 < ob[obName].length -1) { //配列の長さより短い場合は、r2に1足す
        r2++;
    } else {　//配列の長さと同じになった場合は、r1に1足し、r2は0する
        if (r1 === Object.keys(ob).length -1) { //わ行の場合
            r1 = 0;
        } else {
            r1++;
        }
        r2 = 0;
    }
    obName = Object.keys(ob)[r1];
    obWordName = Object.keys(obWord)[r1];
    obImageName = Object.keys(obImage)[r1];

    box.textContent = ob[obName][r2];
    word.textContent = obWord[obWordName][r2];
    wordImage.src = obImage[obImageName][r2]
}


// 色を変える
function changeColor () {   
    //色をランダムにする
    const bgColor_R = Math.round(Math.random() * 255);
    const bgColor_G = Math.round(Math.random() * 255);
    const bgColor_B = Math.round(Math.random() * 255);
    box.style.backgroundColor = `rgb(${bgColor_R}, ${bgColor_G}, ${bgColor_B})`;
    box.style.color = `rgb(${bgColor_G}, ${bgColor_B}, ${bgColor_R})`;
}


// ラジオボタンひらがなクリック時
hiraganaId.addEventListener('click', () => {
    def(hiragana, wordHiragana, imageHiragana);
});


// ラジオボタンアルファベットクリック時
alphabetId.addEventListener('click', () => {
    def(alphabet, wordAlphabet, imageAlphabet);
});


// ボックス内クリック時
box.addEventListener('click', () => {
    const radioNameList = radioId.lang; //ラジオボタンのname取得
    const checkName = radioId.randomCh; //チェックボックスのname取得

    if (checkName.checked) {
        //チェックボックスにチェックがあればランダム表示
        if (radioNameList.value === hiraganaId.value) {
            // randomLang(hiragana);
            randomLang(hiragana, wordHiragana, imageHiragana);
        } else {
            randomLang(alphabet, wordAlphabet, imageAlphabet);
        }
    } else {
        // チェックがなければ順番表示
        if (radioNameList.value === hiraganaId.value) {
            orderLang(hiragana, wordHiragana, imageHiragana);
        } else {
            orderLang(alphabet, wordAlphabet, imageAlphabet);
        }
    }

    //色を変更
    changeColor();
});

// //処理
// ・ひらがなかアルファベット
// ・ランダム表示
// ・順番表示
// ・単語例表示
// ・単語画像表示
