var text = "addiaojdo diiawdinaiod dainwdioanda aiwndioanwd iandianda aiwndioanda iowndaionda iwndioawnda diaowndiaowndaod adoinwiondaiondaid"
var toHackerCase= function (text){
    var hackerTextArray=[];
    for(var i=0; i<text.length; i++){
    switch (text.charAt(i)){
case "o":
hackerTextArray.push(0);
break;
case "l":
hackerTextArray.push(1);
break;
case "e":
hackerTextArray.push(2);
break;
case "a":
hackerTextArray.push(3);
break;
case "t":
hackerTextArray.push(4);
break;
default:
hackerTextArray.push(text.charAt(i))
    }
}
return hackerTextArray.join(",");
};
console.log(toHackerCase(text))