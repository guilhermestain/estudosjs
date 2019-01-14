var text = "addiaojdo diiawdinaiod dainwdioanda aiwndioanwd iandianda aiwndioanda iowndaionda iwndioawnda diaowndiaowndaod adoinwiondaiondaid"
var toHackerCase= function (text){
    var hackerTextArray=[];
    for(var i=0; i<text.length; i++){
    if ((text.charAt(i))==="o"){
    hackerTextArray.push(0);
    }
    else if ((text.charAt(i))==="o"){
        hackerTextArray.push(0);
    }
        else if ((text.charAt(i))==="l"){
            hackerTextArray.push(6);
            }
            else if ((text.charAt(i))==="a"){
                hackerTextArray.push(4);
            }
               else if ((text.charAt(i))==="e"){
                    hackerTextArray.push(2);
                }
                hackerTextArray.push(text.charAt(i));
    }
    return hackerTextArray.join("");
};
console.log(toHackerCase(text));