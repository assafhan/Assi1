class Ingredient{
    constructor(name,image,calories){
        this.name=name
        this.image=image
        this.calories=calories

    }
    render=function(){
        return `
        
        <div class="card">
    <label>add 
        <input id="${this.name}" 
        type="checkbox"
        value="${this.name}"
        >${this.name}
    <div id="${this.name}}" >
        <p>ingredient details:</p>
        <img class="card-img" src="${this.image}" alt="${this.name}">
        <span>${this.name}</span>
        <span>Calories: ${this.calories}</span>
    </div>
</label>
</div>`

    }
    //render speceific infredients inside recepeie
    render1=function(){
        return `
        
        <div class="card">
    <div id="${this.name}}" >
        <p>ingredient details:</p>
        <img class="card-img" src="${this.image}" alt="${this.name}">
        <span>${this.name}</span>
        <span>Calories: ${this.calories}</span>
    </div>
</label>
</div>`

    }


}
export default Ingredient