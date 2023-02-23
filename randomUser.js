const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUsers(data))
}


const displayUsers = (user) => {
    const genderTag = document.getElementById('gender');
    const nameTag = document.getElementById('name');
    const imageTag = document.getElementById('image');
    genderTag.innerText = user.results[0].gender;
    nameTag.innerText = user.results[0].name.first + ' ' + user.results[0].name.last;
    imageTag.setAttribute("src", user.results[0].picture.large)
}

loadUser();