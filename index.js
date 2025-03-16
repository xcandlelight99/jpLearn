import dataAll from './data.json' with {type: 'json'} 

function displayName(){
    for (let x in dataAll){
        const para = document.createElement("li");
        para.innerText = dataAll[x].kanji;
        para.id = "content" + x;
        para.onclick = function(){
            document.getElementById("contentDetail").scrollIntoView()
            document.getElementById("contentHeader").innerHTML = dataAll[x].kanji;
            document.getElementById("contentBody").innerHTML = dataAll[x].description;
        };
        document.getElementById("contentList").appendChild(para);
    }
};
displayName();

