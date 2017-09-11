var druidic = {
	"^" : "᚛",
	"$" : "᚜",
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

var druidichtml = {
	"^" : "&#5787;",
	"$" : "&#5788;",
	" " : "&#5760;",
	"b" : "&#5761;",
	"l" : "&#5762;",
	"f" : "&#5763;",
	"s" : "&#5764;",
	"n" : "&#5765;",
	"h" : "&#5766;",
	"d" : "&#5767;",
	"t" : "&#5768;",
	"c" : "&#5769;",
	"q" : "&#5770;",
	"m" : "&#5771;",
	"g" : "&#5772;",
	"ng": "&#5773;",
	"z" : "&#5774;",
	"r" : "&#5775;",
	"a" : "&#5776;",
	"o" : "&#5777;",
	"u" : "&#5778;",
	"e" : "&#5779;",
	"i" : "&#5780;",
	"ea": "&#5781;",
	"oi": "&#5782;",
	"ui": "&#5783;",
	"ia": "&#5784;",
	"ae": "&#5785;",
	"p" : "&#5786;"
}

function translateLatin() {
	var str = document.getElementById("english").value.toLowerCase();

	var convarr = druidic;
	if (document.getElementById("html").checked) {
		console.log(document.getElementById("html").value);
		convarr = druidichtml;
	}

	// replace letters not in ogham with the closest thing
	str = str.replace(/j/g, "ch");
	str = str.replace(/k/g, "g");
	str = str.replace(/v/g, "b");
	str = str.replace(/w/g, "ui");
	str = str.replace(/x/g, "cs");
	str = str.replace(/y/g, "ea");

	// strip out chars that convarr can't handle
	str = str.replace(/[^\n abcdefghilmnopqrstuz]*/g, "");

	// add start/end markers
	str = str.replace(/^/, convarr["^"]);
	str = str.replace(/$/, convarr["$"]);
	str = str.replace(/\n/g, convarr["$"].concat("\n", convarr["^"]));

	// replace double letters
	str = str.replace(/ng/g, convarr["ng"]);
	if (document.getElementById("forfeda").checked) {
		str = str.replace(/ea/g, convarr["ea"]);
		str = str.replace(/oi/g, convarr["oi"]);
		str = str.replace(/ui/g, convarr["ui"]);
		str = str.replace(/ia/g, convarr["ia"]);
		str = str.replace(/ae/g, convarr["ae"]);
	}

	// replace the rest
	while (result = /[ abcdefghilmnopqrstuz]/g.exec(str)) {
		str = str.replace(result, convarr[result]);
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

