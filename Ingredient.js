class Ingredient{
    constructor(data){
        Object.assign(this,data)
    }
    render=function(){
        return `
        
        <div class="card">
    <label>add 
        <input id="${this.id}" type="checkbox">${this.id}
    <div id="${this.id}" >
        <p>ingredient details: </p>
        <img class="card-img" src="${this.image}" alt="${this.name}">
        <span>${this.name}</span>
        <span>Calories: ${this.calories}</span>
    </div>
</label>
</div>`

    }


}
export default Ingredient