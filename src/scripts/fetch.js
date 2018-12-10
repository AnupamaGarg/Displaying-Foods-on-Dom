
let foodFactory = (food)=>{
    return`<section class ="food-attributes">
    <h3><b>${food.name}</b></h3>
    <h4>${food.ethnicity}</h4>
    <h4>${food.type}</h4>
    </section>

    `}
    let addFoodToDom =(foodAsHTML)=>{
        document.querySelector(".foodList").innerHTML+=foodAsHTML;

    }

    fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    })