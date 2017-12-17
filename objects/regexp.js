/*************************
var expression = /pattern/flags;

g — Indicates global mode, meaning the pattern will be applied to all of the string instead of stopping after the first match is found.

i — Indicates case-insensitive mode, meaning the case of the pattern and the string are ignored when determining matches.

m — Indicates multiline mode, meaning the pattern will continue looking for matches after reaching the end of one line of text.

*************************/
// create regexp
var pattern1 = /at/g;
var pattern2 = /[bc]at/i;
var pattern3 = /.at/gi;

var re = null,
i;
for (i=0; i < 10; i++){
re1 = /cat/g;
console.log(re1.test("catastrophe"));
}
for (i=0; i < 10; i++){
re2 = new RegExp("cat", "g");
console.log(re2.test("catastrophe"));
}

re = /cat/g;
console.log(re.test("cbt\nct"));