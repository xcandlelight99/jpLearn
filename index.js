import dataAll from './data.json' with {type: 'json'};


function displayName(){
    for (let x in dataAll){
        const para = document.createElement("li");
        para.innerHTML = 
        '<h1>' + dataAll[x].kanji + '</h1>' +
        '<span id="detail">'+ dataAll[x].description +'</span>';
        para.id = "kanji" + dataAll[x].id;
        para.className = "level" + dataAll[x].level;
        para.onclick = function(){
            const detail = para.querySelector('#detail');
            if (detail.style.display === "none") {
                para.style.gridColumn = 'span 8';
                detail.style.display = "block";
            } 
            else{
                para.style.gridColumn = 'span 1';
                detail.style.display = "none";
            }
        }
        document.getElementById("contentList").appendChild(para);
    }
};

displayName();
