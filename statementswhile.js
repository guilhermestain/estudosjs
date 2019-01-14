var text = "addiaojdo diiawdinaiod dainwdioanda aiwndioanwd iandianda aiwndioanda iowndaionda iwndioawnda diaowndiaowndaod adoinwiondaiondaid"
var HackerTextError= function (message){
    this.message=message;
    this.name="HackerTextError"
}
var toHackerCase= function (text){
    if(!text) throw new HackerTextError ("invalid text.");
    if (typeof text !== "string") throw new HackerTextError("Invalid type.");
    var hackerTextArray=[];
    var i=0;
    while (i < text.length){
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
i++;
}
return hackerTextArray.join("");
};
try{
console.log(toHackerCase())
} catch(e){
console.log("Error : "+e.message+e.name)
}
try{
    console.log(toHackerCase(10))
    } catch(e){
    console.log("Error : "+e.message+ "" +e.name)
    }
console.log(toHackerCase(text));
