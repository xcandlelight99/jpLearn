import dataAll from './data.json' with {type: 'json'};


function displayName(){
    for (let x in dataAll){
        const para = document.createElement("tr");
        para.innerHTML = 
        '<th class="kanji">' + '<h1>' + dataAll[x].kanji + '</h1>' + '</th>' +
        '<th class="reading">' + dataAll[x].example + '</th>';
        document.getElementById("contentList").appendChild(para);
    }
};

displayName();
