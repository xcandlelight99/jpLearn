import dataAll from './data.json' with {type: 'json'};


function displayName(){
    for (let x in dataAll){
        const para = document.createElement("li");
        para.innerHTML = 
        '<div>' + '<h1>' + dataAll[x].kanji + '</h1>' + '</div>' +
        '<div id="hidden">' + dataAll[x].reading + '</div>' +
        '<div id="hidden">' + dataAll[x].meaning + '</div>';
        para.onclick = function(){
            const oneHidden = para.querySelector('#hidden');
            const allHidden = para.querySelectorAll('#hidden');
            if (oneHidden.style.display === "none") {
                para.style.gridColumn = 'span 8';
                allHidden.forEach(element => {
                    element.style.display = "block";
                });
            } 
            else{
                para.style.gridColumn = 'span 1';
                allHidden.forEach(element => {
                    element.style.display = "none";
                });
            }
        }
        document.getElementById("contentList").appendChild(para);
    }
};

displayName();
