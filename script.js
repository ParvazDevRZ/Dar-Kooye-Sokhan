let poets = {
    molana: 0,
    hafez: 0,
    ferdowsi: 0,
    saadi: 0,
    khayyam: 0,
    forough: 0,
    sohrab: 0,
    nima: 0,
    shahriar: 0,
    parvin: 0,
    bidel: 0,
    saeb: 0
};

let poetInfo = {

    molana: {
        name: "مولانا",
        text: "شخصیتی عمیق، معنوی و جست‌وجوگر داری و همیشه به دنبال معناهای پنهان زندگی هستی."
    },

    ferdowsi: {
        name: "فردوسی",
        text: "شخصیتی مقاوم، هدفمند و پایدار داری و برای ارزش‌هایت می‌ایستی."
    },

    forough: {
        name: "فروغ فرخزاد",
        text: "شخصیتی خلاق، احساسی و متفاوت داری و دنیا را با نگاهی تازه می‌بینی."
    },

    sohrab: {
        name: "سهراب سپهری",
        text: "شخصیتی آرام، لطیف و طبیعت‌دوست داری و زیبایی‌های کوچک زندگی را می‌بینی."
    },

    saadi: {
        name: "سعدی",
        text: "شخصیتی مهربان، اجتماعی و انسان‌دوست داری."
    },

        hafez: {
        name: "حافظ",
        text: "شخصیتی عاشق، عارف و نکته‌بین داری و در کنار احساسات، به دنبال شناخت عمیق‌تر زندگی هستی."
    },


    khayyam: {
        name: "خیام",
        text: "شخصیتی پرسشگر، آزاداندیش و اهل تفکر داری و درباره رازهای زندگی عمیق فکر می‌کنی."
    },


    nima: {
        name: "نیما یوشیج",
        text: "شخصیتی نوگرا و متفاوت داری و دوست داری دنیا را از زاویه‌ای تازه ببینی."
    },


    shahriar: {
        name: "شهریار",
        text: "شخصیتی احساسی، صمیمی و وفادار داری و ارزش زیادی برای خاطرات و روابط انسانی قائل هستی."
    },


    parvin: {
        name: "پروین اعتصامی",
        text: "شخصیتی اخلاق‌گرا، مهربان و عدالت‌خواه داری و به ارزش‌های انسانی اهمیت می‌دهی."
    },


    bidel: {
        name: "بیدل دهلوی",
        text: "شخصیتی اندیشمند و عمیق داری و به مفاهیم پنهان و پیچیدگی‌های زندگی علاقه‌مندی."
    },


    saeb: {
        name: "صائب تبریزی",
        text: "شخصیتی دقیق، خلاق و اهل تأمل داری و از نگاه‌های تازه به زندگی لذت می‌بری."
    }

};

let personalityMap = {

    spiritual: {
        main: "molana",
        second: "hafez"
    },

    heroic: {
        main: "ferdowsi",
        second: "parvin"
    },

    emotional: {
        main: "forough",
        second: "shahriar"
    },

    nature: {
        main: "sohrab",
        second: "saadi"
    },

    philosophy: {
        main: "khayyam",
        second: "bidel"
    },

    social: {
        main: "saadi",
        second: "parvin"
    },

    artistic: {
        main: "forough",
        second: "saeb"
    },

    creative: {
        main: "nima",
        second: "saeb"
    },

    wisdom: {
        main: "hafez",
        second: "khayyam"
    },

    belief: {
        main: "bidel",
        second: "molana"
    },

    adventure: {
        main: "ferdowsi",
        second: "nima"
    },

    kindness: {
        main: "parvin",
        second: "saadi"
    }

};

console.log("script loaded");

document.getElementById("resultBtn").addEventListener("click", function(){

    let answers = document.querySelectorAll('input[type="radio"]:checked');

    if(answers.length < 10){
        alert("لطفاً به همه سوال‌ها پاسخ بدهید!");
        return;
    }


    for(let poet in poets){
        poets[poet] = 0;
    }
    answers.forEach(function(answer){

    let personality = answer.value;

    let relatedPoets = personalityMap[personality];

    if (relatedPoets) {

        poets[relatedPoets.main] += 2;

        poets[relatedPoets.second] += 1;

    }

});

    let winner = "";

    let maxScore = 0;


    for(let poet in poets){

        if(poets[poet] > maxScore){

            maxScore = poets[poet];
            winner = poet;

        }

    }



    console.log("برنده:", winner);
    console.log("امتیاز:", maxScore);

    localStorage.setItem("winnerPoet", winner);

    window.location.href = "result.html";


});