const view = document.querySelector('#container-countries');

document.addEventListener("DOMContentLoaded", e => {

    fetchData()
})

const fetchData = async () => {
    try {
        const result = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await result.json()
        viewInfo(data)
        formUser(data)


        formList(data)
        } catch (error) {
        }
}

const viewInfo = (data) => {
    
    let elements = ''
    data.forEach(item => {
        elements += `
            <div id="cardView">
            <div>
                <img id="imgFlag" src="${item.flag}"> 
            </div>
            <div>
                <h3>${item.translations.es}</h3>
                <p>Capital: ${item.capital}</p>
                <p>Región: ${item.region}</p>
                <p>Lengua: ${item.languages[0].name}</p>
                <p>Moneda: ${item.currencies[0].name}</p>
                <p>Símbolo: ${item.currencies[0].symbol}</p>
                <p class="border">Países limítrofes: ${item.borders}</p>
            </div>
            </div>
            `
    });

    view.innerHTML = elements
}
const formList = document.getElementById('formCountries');
const inputList = document.getElementById('nameFilter');

const formUser = data => {
    formList.addEventListener('keyup', e => {
        e.preventDefault()
        const text = inputList.value.toLowerCase()
        // console.log(text)
        const array = data.filter(item => {
            const api = item.name.toLowerCase()
            if (api.indexOf(text) !== -1) {
                return item
            }
        })
        viewInfo(array)
    })
}
