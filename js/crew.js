

function makeBig(id) {
    let merlin = document.getElementById("meris");
    let tobi = document.getElementById("tobi");
    let fitz = document.getElementById("fitzi");
    let samu = document.getElementById("samu");

    switch (id) {
        case "tobi":
            merisSmall();
            samuSmall();
            fitziSmall();
            tobiBig();
            break;
        case "meris":
            samuSmall();
            tobiSmall();
            fitziSmall();
            merisBig();
            break;
        case "samu":
            merisSmall();
            tobiSmall();
            fitziSmall();
            samuBig();
            break;
        case "fitzi":
            samuSmall();
            tobiSmall();
            merisSmall();
            fitziBig();
            break;
    }
}

//region smaller functions
function merisSmall() {
    let merlin = document.getElementById("meris");
    merlin.style.width = 0;
    merlin.style.height = 0;
    merlin.style.border = "none";
    document.getElementById("merisP").innerHTML = "";
}

function samuSmall() {
    let samu = document.getElementById("samu");
    samu.style.width = 0;
    samu.style.height = 0;
    samu.style.border = "none";
    document.getElementById("samuP").innerHTML = "";
}

function fitziSmall() {
    let fitz = document.getElementById("fitzi");
    fitz.style.width = 0;
    fitz.style.height = 0;
    fitz.style.border = "none";
    document.getElementById("fitziP").innerHTML = "";}

function tobiSmall() {
    let tobi = document.getElementById("tobi");
    tobi.style.height = 0;
    tobi.style.width = 0;
    tobi.style.border = "none";
    document.getElementById("tobiP").innerHTML = "";}
//endregion

//region bigger functiona
function merisBig() {
    let merlin = document.getElementById("meris");
    merlin.style.width = "404px";
    merlin.style.height = "404px";
    document.getElementById("merisP").innerHTML = "";

    let typed = new Typed(document.getElementById("merisP"), {
        strings: ['Meris Besic', '^500camera and director^3000'],
        typeSpeed: 50,
        startDelay: 100,
        backDelay: 500,
        backSpeed: 50,
        cursorChar: '',
        loop: false

    });

    setTimeout(function() {
        backToDefault();
    }, 5000);


}

function samuBig() {
    let samu = document.getElementById("samu");
    samu.style.width = "404px";
    samu.style.height = "404px";
    document.getElementById("samuP").innerHTML = "";

    let typed = new Typed(document.getElementById("samuP"), {
        strings: ['Samuel Kowatschek', '^500camera and management^3000'],
        typeSpeed: 50,
        startDelay: 100,
        backDelay: 500,
        backSpeed: 50,
        cursorChar: '',
        loop: false

    });

    setTimeout(function() {
        backToDefault();
    }, 5000);
}

function tobiBig() {
    let tobi = document.getElementById("tobi");
    tobi.style.width = "404px";
    tobi.style.height = "404px";
    document.getElementById("tobiP").innerHTML = "";

    let typed = new Typed(document.getElementById("tobiP"), {
        strings: ['Tobias Höfler', '^500camera and post-production^3000'],
        typeSpeed: 50,
        startDelay: 100,
        backDelay: 500,
        backSpeed: 50,
        cursorChar: '',
        loop: false

    });

    setTimeout(function() {
        backToDefault();
    }, 4000);
}

function fitziBig() {
    let fitzi = document.getElementById("fitzi");
    fitzi.style.width = "404px";
    fitzi.style.height = "404px";

    document.getElementById("fitziP").innerHTML = "";

    let typed = new Typed(document.getElementById("fitziP"), {
        strings: ['Jakob Fitzinger', '^500camera and VFX^3000'],
        typeSpeed: 50,
        startDelay: 100,
        backDelay: 500,
        backSpeed: 50,
        cursorChar: '',
        loop: false

    });

    setTimeout(function() {
        backToDefault();
    }, 5000);
}

// endregion


function backToDefault() {
    let merlin = document.getElementById("meris");
    let tobi = document.getElementById("tobi");
    let fitz = document.getElementById("fitzi");
    let samu = document.getElementById("samu");

    merlin.style.width = "200px";
    merlin.style.height = "200px";
    merlin.style.border = "solid 1px white";
    document.getElementById("merisP").innerHTML = "MB";

    samu.style.width = "200px";
    samu.style.height = "200px";
    samu.style.border = "solid 1px white";
    document.getElementById("samuP").innerHTML = "SK";


    tobi.style.width = "200px";
    tobi.style.height = "200px";
    tobi.style.border = "solid 1px white";
    document.getElementById("tobiP").innerHTML = "TH";


    fitz.style.width = "200px";
    fitz.style.height = "200px";
    fitz.style.border = "solid 1px white";
    document.getElementById("fitziP").innerHTML = "JF";

}
