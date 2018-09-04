fetch('https://dino-1-server.herokuapp.com/')
    .then(response => response.json())
    .then(response => response.forEach(response => addJobs(response)))    



function addJobs(response){
    var jobsList = document.querySelector('#job-listings')
    var listJob = document.createElement('li')
    var title = document.createElement('h4')
    var descript = document.createElement('p')
    var payMe = document.createElement('p')
    var inter = document.createElement('p')
    jobsList.appendChild(listJob).appendChild(title).innerText = response.title
    jobsList.appendChild(listJob).appendChild(descript).innerText = response.description
    jobsList.appendChild(listJob).appendChild(payMe).innerText = response.pay
    jobsList.appendChild(listJob).appendChild(inter).innerText = response.interested
}
   
document.querySelector('.job-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    var jobsList = document.querySelector('#job-listings')
    var listJob = document.createElement('li')
    var title = document.createElement('h4')
    var descript = document.createElement('p')
    var payMe = document.createElement('p')
    var name = document.getElementById('title')
    var comp = document.getElementById('pay')
    var what = document.getElementById('description')
    jobsList.appendChild(listJob).appendChild(title).innerText = name.value
    jobsList.appendChild(listJob).appendChild(descript).innerText = what.value
    jobsList.appendChild(listJob).appendChild(payMe).innerText = comp.value
})