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
	"y" : "ᚕ",
	"oi": "ᚖ",
	"w" : "ᚗ",
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
	"ᚕ": "y",
	"ᚖ": "oi",
	"ᚗ": "w",
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
	"y" : "&#5781;",
	"oi": "&#5782;",
	"w" : "&#5783;",
	"ia": "&#5784;",
	"ae": "&#5785;",
	"p" : "&#5786;"
};

var dwarven = {
	"f":  "ᚠ",
	"u":  "ᚢ",
	"th": "ᚦ",
	"a":  "ᚨ",
	"r":  "ᚱ",
	"k":  "ᚲ",
	"g":  "ᚷ",
	"w":  "ᚹ",
	"h":  "ᚺ",
	"n":  "ᚾ",
	"i":  "ᛁ",
	"j":  "ᛃ",
	"ae": "ᛇ",
	"p":  "ᛈ",
	"z":  "ᛉ",
	"s":  "ᛊ",
	"t":  "ᛏ",
	"b":  "ᛒ",
	"e":  "ᛖ",
	"m":  "ᛗ",
	"l":  "ᛚ",
	"ng": "ᛜ",
	"d":  "ᛞ",
	"o":  "ᛟ",

	"ᚠ": "f",
	"ᚢ": "u",
	"ᚦ": "th",
	"ᚨ": "a",
	"ᚱ": "r",
	"ᚲ": "k",
	"ᚷ": "g",
	"ᚹ": "w",
	"ᚺ": "h",
	"ᚾ": "n",
	"ᛁ": "i",
	"ᛃ": "j",
	"ᛇ": "ae",
	"ᛈ": "p",
	"ᛉ": "z",
	"ᛊ": "s",
	"ᛏ": "t",
	"ᛒ": "b",
	"ᛖ": "e",
	"ᛗ": "m",
	"ᛚ": "l",
	"ᛜ": "ng",
	"ᛞ": "d",
	"ᛟ": "o"
};

var dwarvenhtml = {
	"f":  "&#5792;",
	"u":  "&#5794;",
	"th": "&#5798;",
	"a":  "&#5800;",
	"r":  "&#5809;",
	"k":  "&#5810;",
	"g":  "&#5815;",
	"w":  "&#5817;",
	"h":  "&#5818;",
	"n":  "&#5822;",
	"i":  "&#5825;",
	"j":  "&#5827;",
	"ae": "&#5831;",
	"p":  "&#5832;",
	"z":  "&#5833;",
	"s":  "&#5834;",
	"t":  "&#5839;",
	"b":  "&#5842;",
	"e":  "&#5846;",
	"m":  "&#5847;",
	"l":  "&#5850;",
	"ng": "&#5852;",
	"d":  "&#5854;",
	"o":  "&#5855;"
};

function translateLatin() {
	translateLatin2Dwarven();
	translateLatin2Druidic();
}

function translateLatin2Dwarven() {
	var str = document.getElementById("english").value.toLowerCase();

	var convarr = dwarven;
	if (document.getElementById("html").checked) {
		convarr = dwarvenhtml;
	}

	// replace letters not in futhark with the closest thing
	str = str.replace(/ce/g, "se");
	str = str.replace(/ci/g, "si");
	str = str.replace(/cy/g, "sy");
	str = str.replace(/ch/g, "j");
	str = str.replace(/c/g,  "k");
	str = str.replace(/qu/g, "kw");
	str = str.replace(/q/g,  "k");
	str = str.replace(/v/g,  "f");
	str = str.replace(/x/g,  "ks");
	str = str.replace(/y/g,  "ae");

	// strip out chars that convarr can't handle
	//str = str.replace(/[^\n a-z]*/g, "");

	// replace double letters
	str = str.replace(/th/g, convarr["th"]);
	str = str.replace(/ae/g, convarr["ae"]);
	str = str.replace(/ng/g, convarr["ng"]);

	// replace the rest
	while (result = /[a-z]/g.exec(str)) {
		str = str.replace(result, convarr[result]);
	}

	document.getElementById("dwarven").value = str;
}

function translateLatin2Druidic() {
	var str = document.getElementById("english").value.toLowerCase();

	var convarr = druidic;
	if (document.getElementById("html").checked) {
		convarr = druidichtml;
	}

	// replace letters not in ogham with the closest thing
	str = str.replace(/j/g, "ch");
	str = str.replace(/k/g, "g");
	str = str.replace(/v/g, "f");
	//str = str.replace(/w/g, "ui");
	str = str.replace(/x/g, "cs");
	//str = str.replace(/y/g, "ea");

	// strip out chars that convarr can't handle
	//str = str.replace(/[^\n a-z]*/g, "");

	// add start/end markers
	str = str.replace(/^/, convarr["^"]);
	str = str.replace(/$/, convarr["$"]);
	str = str.replace(/\n/g, convarr["$"].concat("\n", convarr["^"]));

	// replace double letters
	str = str.replace(/ng/g, convarr["ng"]);
	if (document.getElementById("forfeda").checked) {
		//str = str.replace(/ea/g, convarr["ea"]);
		str = str.replace(/oi/g, convarr["oi"]);
		//str = str.replace(/ui/g, convarr["ui"]);
		str = str.replace(/ia/g, convarr["ia"]);
		str = str.replace(/ae/g, convarr["ae"]);
	}

	// replace the rest
	while (result = /[ abcdefghilmnopqrstuwyz]/g.exec(str)) {
		str = str.replace(result, convarr[result]);
	}

	document.getElementById("druidic").value = str;
}

function translateDruidic() {
	var str = document.getElementById("druidic").value.toLowerCase();

	// strip out chars not in druidic
	//str = str.replace(/[^\n ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ]*/g, "");

	// strip out start/end characters
	str = str.replace(/[᚛᚜]*/g, "");

	// replace the rest
	while (result = /[ ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ]/g.exec(str)) {
		str = str.replace(result, druidic[result]);
	}

	document.getElementById("english").value = str;
	translateLatin2Dwarven();
}

function translateDwarven() {
	var str = document.getElementById("dwarven").value.toLowerCase();

	// strip out chars not in dwarven
	//str = str.replace(/[^\n ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ]*/g, "");

	// replace the rest
	while (result = /[ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ]/g.exec(str)) {
		str = str.replace(result, dwarven[result]);
	}

	document.getElementById("english").value = str;
	translateLatin2Druidic();
}

