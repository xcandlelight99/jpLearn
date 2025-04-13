import dataAll from './data.json' with {type: 'json'};


function displayName(){
    for (let x in dataAll){
        const para = document.createElement("li");
        para.innerHTML = 
        '<div>' + '<h1>' + dataAll[x].kanji + '</h1>' + '</div>' +
        '<div>' + dataAll[x].reading + '</div>' +
        '<div>' + dataAll[x].meaning + '</div>';
        '<div>' + dataAll[x].description + '</div>';
        document.getElementById("contentList").appendChild(para);
    }
};

displayName();
