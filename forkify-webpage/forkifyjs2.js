/*
var btnPrevioues=document.querySelector(".btn-left");
var btnNext=document.querySelector(".btn-right");
var resultSider=document.querySelector("#searchresults");
var i=0,count=0;
//----------------------common function------------------------------//
function results(){
  
    
        resultSider.innerHTML+=`
        <li>
        <div class="forkify-resultsbar">
        <div class="result-img"><img src="${itemsForkify[i].image_url}"></div>
        <h1>${itemsForkify[i].title}</h1><br>
        <p>${itemsForkify[i].publisher} </p>
        </div>
        </li>
        `;
    count++;
    console.log(i);
    }
    


//-------------------------------------------------------------------//

        

//-------button Next----//
btnNext.addEventListener("click",nextPage);

function nextPage(){
    count=0;
    resultSider.innerHTML="";
    while(i<itemsForkify.length){
        if(count!=10){
        results();
        btnNext.disabled=(i==itemsForkify.length-1)?true:false;
        i++;
        }else{
            break;
        }

    }

}
//--------button Back----//
btnPrevioues.addEventListener("click",backPage);

function backPage(){
    i-=10;
    while(i<itemsForkify.length){
        if(count!=10){
    results();
        btnNext.disabled=(i==itemsForkify.length-1)?true:false;
        i++;
        }else{
            break;
        }

    }
}*/