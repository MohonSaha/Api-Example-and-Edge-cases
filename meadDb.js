// Load meals 

const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

// Display meals 

const displayMeals = (meals) => {
    // Step-1: Container Element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        // Step-2: Create child for each element.
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.classList.add('style');
        // Step-3: Set content in the child.
        mealDiv.innerHTML = `
        <div class="card h-100">
           <img src="${meal.strMealThumb}" class="card-img-top h-50" alt="...">
           <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetailsModal">
                Details
                </button>
           </div>
        </div>
        
        `;
        // Step-4: Append child
        mealsContainer.appendChild(mealDiv);
    });
}

// Search meals 
const searchMeals = () => {
    const serachField = document.getElementById('search-field').value;
    loadMeals(serachField);
}


// fetch than example: 
/* const loadMealDetail = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error => {
        console.log(error);
    })
} 
*/


// async await example: 
/* const loadMealDetail = async (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);   
}
*/

// async await example with try catch:
// We use try catch to handle fetch error and data load problem.
const loadMealDetail = async (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try{
        const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]); 
    } 
    catch(error){
        console.log(error);
    } 
}



const displayMealDetails = (meal) => {
    document.getElementById('mealsDetailsModalLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealsDetailsModalBody');
    mealDetails.innerHTML = `
                    <img class="w-75" src="${meal.strMealThumb}">
    
    `
}

loadMeals('rice');
















