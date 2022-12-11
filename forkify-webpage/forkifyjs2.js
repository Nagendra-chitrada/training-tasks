var btnSearch=document.getElementById("btn-search");
var btnPrevioues=document.querySelector(".btn-left");
var btnNext=document.querySelector(".btn-right");
var resultSider=document.querySelector("#searchresults");
var i=0,count=0;
var searchRecipe,
	data,
	recipesResult,
	recipeData,
	ingredientsList;

console.log(btnSearch);
 
 btnSearch.addEventListener('click',searching);
 
 //------function to FETCH data from API
 
async function searching(searchRecipe){
 searchRecipe=document.getElementById('search-recipe').value;
 data=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchRecipe}`);
 recipesResult= await data.json();
 console.log(recipesResult);
 nextPage();
 	btnPrevioues.addEventListener("click",prevousPage);// button to go backpage of recipiesList
 	btnNext.addEventListener("click",nextPage);	  //button to go next page of recipiesList

}

//----------function to go next page of recipes
 function nextPage(){
count++;
  i=(count*10)-10;
  display();
}

//----------function to go back page 
function prevousPage(){	
	count--;
 display(); 	
}
//----------function to display the list of Recipes
function display(){
	i=(count*10)-10;
  	resultSider.innerHTML='';
  	//loop to display the recipies in the left-side-bar 
	while(i<(count*10)){
	resultSider.innerHTML+=`
	<li>
	<div class="forkify-resultsbar" onclick="recipeDetails(${recipesResult.recipes[i].recipe_id})">
		<div class="result-img"><img src="${recipesResult.recipes[i].image_url}"></div>
		  <h1>${recipesResult.recipes[i].title}</h1><br>
		<p>${recipesResult.recipes[i].publisher} </p>
	</div>
	</li>`;
	i++;
}
}
//----------function to display the details of selected recipie
async function recipeDetails(id){
	console.log(id);
	recipeData=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
	ingredientsList=await recipeData.json();
	console.log(ingredientsList);
	
	
}
