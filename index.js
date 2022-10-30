import ingredientData from './data.js'
import Ingredient from './Ingredient.js'
import DishRecipe from './DishRecipe.js'
//all required varibles
const form=document.getElementById('form')
const btns=document.getElementById('btns')
const main=document.getElementById('main')
const ingredients=[]
//all event listeners
document.addEventListener("click",(e)=>{
if(e.target.id==="get-ingredients"){
   e.target.querySelector('div').classList.toggle('hidden')
}
if(e.target.id==="add-recepie-btn"){
   renderRecepieForm()
      btns.classList.toggle('hidden')
      form.style.display = 'flex'
}
if(e.target.id==="add-ingredient-btn"){
   btns.classList.toggle('hidden')
}
if(e.target.id==="close-btn"){
   e.preventDefault() 
   form.style.display = 'none'
    btns.classList.toggle('hidden')
}
})



 function renderRecepieForm(){
    
    form.innerHTML=`
    <form id="form">
    <input type="text" name="recipeName" placeholder="Recipe name:"/>
    <input type="text" name="coockingMethod" placeholder="Recipe coocking method:"/>
    <input type="text" name="coockingTime" placeholder="Recipe coocking time:"/>
    <input type="text" name="imageUrl" placeholder="Recipe image url:"/>
    <div id="place">
    ${showIngerdients()}
    </div>
    <div id="form-choise-btns">
    <button type="submit" class="btns">Submit</button>
    </form>
    <button id="close-btn"  class="btns">Close</button>
</div>
    `

    
 }
 form.addEventListener('submit',(e) => {
       console.log(e.target.dataset)
       e.preventDefault()
       const consentFormData = new FormData(form)
       let recipeName = consentFormData.get("recipeName")
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
       let dish = new DishRecipe(recipeName, coockingMethod, coockingTime, imageUrl, rIngredients)
       main.innerHTML += dish.render()
    })

 function showIngerdients(){
    
    let ingredientsHtml=``
    ingredientData.map(part=>{
        let ingredient=new Ingredient(part.name,part.image,part.calories)
        ingredients.push(ingredient)
        localStorage.setItem(ingredient.name,JSON.stringify(ingredient))
      ingredientsHtml+=ingredient.render()
    })
    return ingredientsHtml
   
 }
