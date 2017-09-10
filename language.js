var druidic = {
	" " : " ",
	"b" : "ᚁ",
	"l" : "ᚂ",
	"f" : "ᚃ",
	"s" : "ᚄ",
	"n" : "ᚅ",
	"h" : "ᚆ",
	"d" : "ᚇ",
	"t" : "ᚈ",
	"c" : "ᚉ",
	"q" : "ᚊ",
	"m" : "ᚋ",
	"g" : "ᚌ",
	"ng": "ᚍ",
	"z" : "ᚎ",
	"r" : "ᚏ",
	"a" : "ᚐ",
	"o" : "ᚑ",
	"u" : "ᚒ",
	"e" : "ᚓ",
	"i" : "ᚔ",
	"ea": "ᚕ",
	"oi": "ᚖ",
	"ui": "ᚗ",
	"ia": "ᚘ",
	"ae": "ᚙ",
	"p" : "ᚚ",

	" ": " ",
	"ᚁ": "b",
	"ᚂ": "l",
	"ᚃ": "f",
	"ᚄ": "s",
	"ᚅ": "n",
	"ᚆ": "h",
	"ᚇ": "d",
	"ᚈ": "t",
	"ᚉ": "c",
	"ᚊ": "q",
	"ᚋ": "m",
	"ᚌ": "g",
	"ᚍ": "ng",
	"ᚎ": "z",
	"ᚏ": "r",
	"ᚐ": "a",
	"ᚑ": "o",
	"ᚒ": "u",
	"ᚓ": "e",
	"ᚔ": "i",
	"ᚕ": "ea",
	"ᚖ": "oi",
	"ᚗ": "ui",
	"ᚘ": "ia",
	"ᚙ": "ae",
	"ᚚ": "p" 
};
//&#5787;&#5760;&#5788;
var druidstart = "᚛";
var druidend   = "᚜";

function translateLatin() {
	var str = document.getElementById("english").value.toLowerCase();

	// replace letters not in ogham with the closest thing
	str = str.replace(/j/g, "ch");
	str = str.replace(/k/g, "g");
	str = str.replace(/v/g, "b");
	str = str.replace(/w/g, "ui");
	str = str.replace(/x/g, "cs");
	str = str.replace(/y/g, "ea");

	// strip out chars that druidic can't handle
	str = str.replace(/[^\n abcdefghilmnopqrstuz]*/g, "");

	// add start/end markers
	str = str.replace(/^/, druidstart);
	str = str.replace(/$/, druidend);

	// replace double letters
	str = str.replace(/ng/g, druidic["ng"]);
	if (document.getElementById("forfeda").value == "on") {
		str = str.replace(/ea/g, druidic["ea"]);
		str = str.replace(/oi/g, druidic["oi"]);
		str = str.replace(/ui/g, druidic["ui"]);
		str = str.replace(/ia/g, druidic["ia"]);
		str = str.replace(/ae/g, druidic["ae"]);
	}

	// replace the rest
	while (result = /[ abcdefghilmnopqrstuz]/g.exec(str)) {
		str = str.replace(result, druidic[result]);
	}

	document.getElementById("druidic").value = str;
}

function translateDruidic() {
	var str = document.getElementById("druidic").value.toLowerCase();

	// strip out chars not in druidic
	str = str.replace(/[^\n ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ]*/g, "");

	// replace the rest
	while (result = /[ ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ]/g.exec(str)) {
		str = str.replace(result, druidic[result]);
	}

	document.getElementById("english").value = str;
}

function translateDwarven() {

}

