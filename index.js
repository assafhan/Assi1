import ingredientData from './data.js'
import Ingredient from './Ingredient.js'
import DishRecipe from './DishRecipe.js'
//clear localstorage
localStorage.clear()
//all required varibles
const form=document.getElementById('formd')
const btns=document.getElementById('btns')
const main=document.getElementById('main')
const ingredients=[]
let id=0//recepie id counter
//all event listeners
document.addEventListener("click",(e)=>{
if(e.target.id==="get-ingredients"){
document.getElementById(e.target.value).classList.toggle('hidden')
}
if(e.target.id==="add-recepie-btn"){
   renderRecepieForm()
      btns.classList.toggle('hidden')
      form.style.display = 'flex'
}
if(e.target.id==="add-ingredient-btn"){
   btns.classList.toggle('hidden')
   renderIngredientForm()
   form.style.display = 'flex'
}
if(e.target.id==="close-btn"){
   e.preventDefault() 
   form.style.display = 'none'
    btns.classList.toggle('hidden')
}
})

document.addEventListener('submit',(e) => {
   if(e.target.id==='form'){
   e.preventDefault()
   if(!addRecepie())return false
   
}
if(e.target.id==='form1'){
    e.preventDefault()
    if(!addIngredient())return false
    renderIngredientForm()
}
})




function addIngredient(){
    let ingredient
    
    const consentFormData = new FormData(document.getElementById("form1"))
    let ingredientName = consentFormData.get("ingredientName")
    if(!ingredientName){
        alert("Ingredient name cant set to null")
        return false
    }
    let calories = consentFormData.get("calories")
    if(!calories){
        alert("Calories must be set to number")
        return false
    }
   let imageUrl = consentFormData.get("imageUrl")
   ingredient=new Ingredient(ingredientName,imageUrl,calories)
    localStorage.setItem(ingredient.name,JSON.stringify(ingredient))
    return true
}
function addRecepie(){
    
    const consentFormData = new FormData(document.getElementById("form"))
   
   let recipeName = consentFormData.get("recipeName")
   if(!recipeName){
    alert("Recepie must have name")
    return false
   }
   let coockingMethod = consentFormData.get("coockingMethod")
   let coockingTime = consentFormData.get("coockingTime")
   let imageUrl = consentFormData.get("imageUrl")
   let rIngredients = []
   if (document.querySelector('input[type="checkbox"]:checked')) {
      let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
      for (let i = 0; i < checkboxes.length; i++) {
         rIngredients.push(ingredients.find(ingredient => checkboxes[i].value === ingredient.name))

      }
   }
   let dish = new DishRecipe(recipeName, coockingMethod, coockingTime, imageUrl, rIngredients,id)
   main.innerHTML += dish.render()
   id++
}
function renderIngredientForm(){
    
    form.innerHTML=`
    <form id="form1" class="form">
    <input type="text" name="ingredientName" placeholder="ingredient name :"/>
    <input type="number" name="calories" placeholder="Calories:"/>
    <input type="text" name="imageUrl" placeholder="imageUrl:"/>
    <div id="place">
    ${showIngerdients()}
    </div>
    <div id="form-choise-btns">
    <button type="submit" class="btns">Submit</button>
    
    <button id="close-btn"  class="btns">Close</button>
</div></form>
    `

    
 }
 function renderRecepieForm(){
    
    form.innerHTML=`
    <form id="form" class="form">
    <input type="text" name="recipeName" placeholder="Recipe name:"/>
    <input type="text" name="coockingMethod" placeholder="Recipe coocking method:"/>
    <input type="text" name="coockingTime" placeholder="Recipe coocking time:"/>
    <input type="text" name="imageUrl" placeholder="Recipe image url:"/>
    <div id="place">
    ${showIngerdients()}
    </div>
    <div id="form-choise-btns">
    <button type="submit" class="btns">Submit</button>
    
    <button id="close-btn"  class="btns">Close</button>
</div></form>
    `

    
 }


 function showIngerdients(){
    
    let ingredientsHtml=``
    let ingredient
    let lsData=allStorage()
    
    ingredientData.map(part=>{
         ingredient=new Ingredient(part.name,part.image,part.calories)
        ingredients.push(ingredient)
        if(!localStorage.getItem(part.name)){
        localStorage.setItem(ingredient.name,JSON.stringify(ingredient))
        ingredientsHtml+=ingredient.render()
    }
    
    
    })
        lsData.map(part=>{
            
        ingredient=new Ingredient(part.name,part.image,part.calories)
        ingredientsHtml+=ingredient.render()
        })
    return ingredientsHtml
   
 }
 //get all the ingredients from local storge
 function allStorage(){
    let values=[]
    let keys=Object.keys(localStorage)
    let   i=keys.length
    while(i--){
        values.push(JSON.parse(localStorage.getItem(keys[i])))
    }
    return values;
 }
