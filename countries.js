

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayContries(data))
}

const displayContries = (data) => {
    const contriesContainer = document.getElementById('all-countries');
    // console.log(data);
    // for(const country of data){
    //     console.log(country);
    // }
    data.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
                    <h3>Name:${country.name.common} </h3>
                    <p>Capital:${country.capital ? country.capital[0] : 'Not Capital Found'} </p>
                    <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        
        `;
        contriesContainer.appendChild(countryDiv);       
    });
}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    const detailContainer = document.getElementById('country-detail');
    detailContainer.innerHTML = `       
                    <h3>Name: ${country.name.common}</h3>
                    <p>Capital:${country.capital ? country.capital[0] : 'No Capital Found'}</p>
                    <img src="${country.flags.png}" alt=""></img>
    
    `;
}

loadCountries();