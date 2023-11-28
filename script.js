const Y = -72;

const coords = [
  [-2199 - 333, -1540 - 225],
  [-1188 - 259, -2039 - 528],
  [-1485 - 326, -1156 - 326],
  [-1183 - 256, -1244 - 345],
  [-1199 - 263, -1540 - 410],
  [-2267 - 498, -1223 - 340],
  [-1199 -  44, -1540 - 376],
  [ -705 - 154, -1317 - 360],
  [-1620 - 360, -1493 - 400],
  [-1352 - 296, -1718 - 454],
  //Dots
  [-2267 - 526, -1223 -  664],
  //P
  [-2337, -1330],
  //A
  [-3196, -868],
  //M
  [-1149, -1170],
];

var vW = window.innerWidth;

const HAX = -144 - 8 - 144 - 8 - 144 - 4 - 48;
const HBX = -144 - 8 - 144 - 4 - 48;

//FIRST ONE
document.getElementById("t_hA").style.transform =
  "translate(" + HAX + "px, " + Y + "px)";
document.getElementById("hA").style.transform =
  "translate(" + (HBX-8) + "px, " + 0 + ")";
//

document.getElementById("t_hB").style.transform =
  "translate(" + HBX + "px, " + Y + "px)";
document.getElementById("hB").style.transform =
  "translate(" + HBX + "px, " + 0 + ")";

document.getElementById("dotL").style.transform =
  "translate(" + (- 144 - 40 - 8 - 4 ) + "px, " + 0 + "px)";

const MAX = - 144 - 4;
const MBX = 4;

document.getElementById("t_mA").style.transform =
  "translate(" + MAX + "px, " + Y + "px)";
document.getElementById("t_mB").style.transform =
  "translate(" + MBX + "px, " + Y + "px)";
   
document.getElementById("t_AP").style.transform =
  "translate(" + MAX + "px, " + 80 + "px)";

document.getElementById("t_M").style.transform =
  "translate(" + MBX + "px, " + 80 + "px)";

document.getElementById("dotR").style.transform =
  "translate(" + ( 144 + 8 + 4 ) + "px, " + 0 + "px)";

const SAX = 144 + 8 + 4 + 48;
const SBX = 144 + 8 + 144 + 8 + 4 + 48;

document.getElementById("t_sA").style.transform =
  "translate(" + SAX + "px, " + Y + "px)";
document.getElementById("t_sB").style.transform =
  "translate(" + SBX + "px, " + Y + "px)";
document.getElementById("sA").style.transform =
  "translate(" + SAX + "px, " + 0 + ")";
document.getElementById("sB").style.transform =
  "translate(" + SBX + "px, " + 0 + ")";

function timer() {
  const getDigit = (number, position) => {
    return Math.floor(number / Math.pow(10, position - 1)) % 10;
  };

  const updateContainer = () => {
    const d = new Date();
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");

    // Convert 24-hour format to 12-hour format
    const nh = h % 12 || 12;
    h = String(h).padStart(2, "0");

    const ha = getDigit(parseInt(nh), 2);
    const hb = getDigit(parseInt(nh), 1);
    const ma = getDigit(parseInt(m), 2);
    const mb = getDigit(parseInt(m), 1);
    const sa = getDigit(parseInt(s), 2);
    const sb = getDigit(parseInt(s), 1);
    const ampm = h >= 12 ? "PM" : "AM";
    
    // document.getElementById("container").textContent =
    //   ha + " " + hb + " " + ma + " " + mb + " " + sa + " " + sb + " " + ampm;

    var portion = (window.innerWidth / 2) - 144 - 4;
    var slider =  coords[ha][0] + portion ;
    document.querySelector("#hA img").style.transform =
      "translate(" + slider + "px, " + coords[ha][1] + "px)";
   
    document.querySelector("#hB img").style.transform =
      "translate(" + coords[hb][0] + "px, " + coords[hb][1] + "px)";    
    document.querySelector("#sA img").style.transform =
      "translate(" + coords[sa][0] + "px, " + coords[sa][1] + "px)";
    document.querySelector("#sB img").style.transform =
      "translate(" + coords[sb][0] + "px, " + coords[sb][1] + "px)";
    //Dots
    document.querySelector("#dotL img").style.transform =
      "translate(" + coords[10][0] + "px, " + coords[10][1] + "px)";
    document.querySelector("#dotR img").style.transform =
      "translate(" + coords[10][0] + "px, " + coords[10][1] + "px)";
    //Minutes
    document.getElementById("mA").style.transform =
    "translate(" + MAX + "px, " + 0 + ")";
    document.getElementById("mB").style.transform =
    "translate(" + MBX + "px, " + 0 + ")";
    var vertical = (window.innerHeight / 2) + (144/2);
    document.getElementById("mA").style.height = vertical  + "px";
    document.getElementById("mB").style.height = vertical  + "px";
    
    var maVertical = (coords[ma][1] + (window.innerHeight / 2));
    var mbVertical = (coords[mb][1] + (window.innerHeight / 2));
    
    document.querySelector("#mA img").style.transform =
      "translate(" + coords[ma][0] + "px, " + maVertical + "px)";
    document.querySelector("#mB img").style.transform =
      "translate(" + coords[mb][0] + "px, " + mbVertical + "px)";
    
    var split = (window.innerHeight / 2) + 8;
    
    document.getElementById("AP").style.transform =
    "translate(" + MAX + "px, " + (split+72) + "px)";
    document.getElementById("M").style.transform =
    "translate(" + MBX + "px, " + (split+72) + "px)";
    
    document.getElementById("AP").style.height = (window.innerHeight/2) + "px";
    document.getElementById("M").style.height = (window.innerHeight/2)  + "px";

    if (ampm[0]=="P"){
         document.querySelector("#AP img").style.transform =
      "translate(" + coords[11][0] + "px, " + (coords[11][1] + 460)+ "px)";
    }else{
         document.querySelector("#AP img").style.transform =
      "translate(" + coords[12][0] + "px, " + (coords[12][1] + 460)+ "px)";
    }
    
    document.querySelector("#M img").style.transform =
      "translate(" + coords[13][0] + "px, " + (coords[13][1] + 460 ) + "px)";
  };

  updateContainer();
  setInterval(updateContainer, 1000);
}

timer();
