const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    // Step-1: Container Element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        // Step-2: Create child for each element.
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // Step-3: Set content in the child.
        mealDiv.innerHTML = `
        <div class="card h-100">
           <img src="${meal.strMealThumb}" class="card-img-top h-50" alt="...">
           <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
        </div>
        
        `;
        // Step-4: Append child
        mealsContainer.appendChild(mealDiv);
    });
}


const searchMeals = () => {
    const serachField = document.getElementById('search-field').value;
    console.log(serachField);

    loadMeals(serachField);
}

loadMeals('rice');