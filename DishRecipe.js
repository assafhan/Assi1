import Ingredient from './Ingredient.js'
class DishRecipe{
    constructor(name,method,time,imageUrl,ingredients,id) {
        
        this.ingredients=ingredients.map((ingredient)=>{
           return new Ingredient(ingredient.name,ingredient.image,ingredient.calories)
        })
        this.id=id
        this.name=name;
        this.method=method;
        this.time=time;
        this.imageUrl=imageUrl
    }
render =function(){
    return `
        <div class="card">
        <div id="${this.name}" >
        <h3>Recipe name:${this.name} </h3>
        <img src="${this.imageUrl}" alt="${this.name}">
        <span>Total calories: </span>
        <span> ${this.totalCalories()}</span>
        <button class="btns"id="get-ingredients" value="${this.id}">Ingredients
        </button>
        <div class="popupmodal hidden" id="${this.id}">
        <h4>ingredients details:</h4>
        ${this.getIngredients()}
        </div>
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
             ingredient.render1()
        })
        return popUp
    }
}
export default DishRecipe