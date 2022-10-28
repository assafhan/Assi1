class DishRecipe{
    constructor(name, ingredients, time, cookingMethod, imageUrl) {
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.cookingMethod = cookingMethod;
        this.imageUrl = imageUrl;
    }
render =function(){
    return `
        
        <div class="card">
    <label>add 
        <input id="${this.id}" type="checkbox">
    <div id="${this.id}" >
        <p>ingredient details: </p>
        <img src="${this.image}" alt="${this.name}">
        <span>${this.name}</span>
        <span>Calories: ${this.calories}</span>
    </div>
</label>
</div>`

}


}