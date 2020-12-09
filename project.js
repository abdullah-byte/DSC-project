let resultTitle = document.getElementById('resultTitle');
let resultBodyA= document.getElementById('resultBodyA');
let resultBodyB = document.getElementById('resultBodyB');

async function apiCall(){
    let queryTerm = document.getElementById('search').value;
    queryTerm = queryTerm.split(" ").join("_");
    if (queryTerm === ''){
        alert('Please input something to search');
        return false;
    }
    let fetchUrl = await fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=%27' + queryTerm);
    let data = await fetchUrl.json();
    console.log(data);


    resultTitle.innerText =  data.query.search[A].title;
    resultBodyA.innerHTML = "A. " + data.query.search[A].snippet;
    resultBodyB.innerHTML = "B. " + data.query.search[B].snippet;
    link.href = "https://en.wikipedia.org/wiki/" + queryTerm;
    link.innerText = "Read More";

    document.querySelector('.resultContent').style.backgroundColor = "White";
}
