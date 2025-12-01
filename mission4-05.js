const obj = document.getElementById("omikuji_koushin");
const button = document.getElementById("btn")
const pic = document.getElementById("pic")

function omikuji(){
    var array = ["大吉", "中吉", "中吉", "小吉", "小吉", "吉", "吉", "凶"];
    var rand = Math.floor(Math.random() * 8);
    var message = array[rand];

    show(message);
    change();
}

function show(text){
    obj.innerText = text;
    pic.style.width = "116px";

    if (text == "大吉"){
        obj.style.color = "red";
        pic.src = "omikuji_daikichi.jpg";
    }else if (text == "凶"){
        obj.style.color = "blue";
        pic.src = "omikuji_kyou.jpg";
    }else if (text == "中吉"){
        obj.style.color = "black";
        pic.src = "omikuji_chuukichi.jpg";
    }else if (text == "小吉"){
        obj.style.color = "black";
        pic.src = "omikuji_syoukichi.jpg";
    }else{
        obj.style.color = "black";
        pic.src = "omikuji_kichi.jpg";
    }
}

function change(){
    button.innerText = "もう一度おみくじを引く";
}

button.addEventListener("click", omikuji);