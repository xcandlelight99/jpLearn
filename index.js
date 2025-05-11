import dataAll from './data.json' with {type: 'json'};


function displayName(){
    for (let x in dataAll){
        const para = document.createElement("li");
        para.innerHTML = 
        '<span class="kanji">' + '<h1>' + dataAll[x].kanji + '</h1>' + '</span>' +
        '<span class="reading">' + dataAll[x].reading + '</span>' + 
        '<span class="example">' + dataAll[x].example + '</span>';
        document.getElementById("contentList").appendChild(para);
    }
};

displayName();
