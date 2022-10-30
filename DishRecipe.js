import Ingredient from './Ingredient.js'
class DishRecipe{
    constructor(name,method,time,imageUrl,ingredients) {
        
        this.ingredients=ingredients.map((ingredient)=>{
           return new Ingredient(ingredient.name,ingredient.image,ingredient.calories)
        })
        this.name=name;
        this.method=method;
        this.time=time;
        this.imageUrl=imageUrl
    }
render =function(){
    return `
        <div class="card">
        <div id="${this.name}" >
        <p>Recipe name:${this.name} </p>
        <img src="${this.imageUrl}" alt="${this.name}">
        <span>Total calories: </span>
        <span>${this.name} ${this.totalCalories()}</span>
        <button class="btns"id="get-ingredients" >Ingredients
        <div class="popupmodal hidden">
        <h1>ingredients details:</h1>
        ${this.getIngredients()}
        </div>
        </button>
        </div>
        </div>`
        

}

totalCalories=function(){
    let total=0
   this.ingredients.map((ingredient) => {
    
    
      total+=ingredient.calories
    })
    return total
}
    getIngredients=function(){
        let popUp= ``
        this.ingredients.map((ingredient) => {

             popUp+=
             ingredient.render()
        })
        return popUp
    }
}
export default DishRecipe