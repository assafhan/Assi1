import ingredientData from './data.js'
import Ingredient from './Ingredient.js'
const  ingredients=ingredientData;
const addIngredientBtn=document.getElementById("add-ingredient-btn")
const addRecepieBtn=document.getElementById("add-recepie-btn")
addRecepieBtn.addEventListener("click",function(){
   document.getElementById("btns").style.display='none'
   renderRecepieForm()

})

addIngredientBtn.addEventListener("click",function(){
    document.getElementById("btns").style.display='none'
 })
 function renderRecepieForm(){
    
    document.getElementById('form').innerHTML=`
    <input type="text" name="recipeName" placeholder="Recipe name:"/>
    <input type="text" name="coockingMethod" placeholder="Recipe coocking method:"/>
    <input type="text" name="coockingTime" placeholder="Recipe coocking time:"/>
    <input type="text" name="imageUrl" placeholder="Recipe image url:"/>
    <div id="place">
    ${showIngerdients()}
    </div>
    <div class="form-choise-btns">
        <button type="submit" class="btns">Submit</button>
        <button id="clos-btn"  class="btns">Close</button>
    </div>
    `

 }
 function showIngerdients(){
    console.log(ingredients)
    let ingredient
    let ingredientsHtml=``
    ingredients.map(part=>{
        ingredient=new Ingredient(part)
    ingredientsHtml+=ingredient.render()
    })
    return ingredientsHtml
   
 }
