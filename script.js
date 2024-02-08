function ejecicio1() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let inpuResult = document.getElementById("answ");
    let operacion = n1 ** n2;
    let error = false;
    
    if (isNaN(n1) || n1 === null) {
        alert("Ingresa un Primer Numero");
        error = true;
    } else if (isNaN(n2) || n2 === null) {
        alert("Ingresa un Segundo Numero");
        error = true;
    }

    if (!error) {
        inpuResult.value = operacion;
    }
}

function ejecicio2() {
    let celcius = parseInt(document.getElementById("grads").value);
    let inpuResult = document.getElementById("answ2");
    let error = false;
    let fahrenheit = 0;

    if (isNaN(celcius) || celcius === null) {
        alert("Ingresa la temperatura en celcius");
        error = true;
    }

    if (!error) {
        fahrenheit = (9/5 * celcius) + 32;
        inpuResult.value = fahrenheit;
    }
}

var namesList = [];

function ejecicio3List() {
    let inputName = document.getElementById("num3");
    let listNames = document.getElementById("numls");
    let itemsList = "";

    
    if (inputName.value == "") {
        alert("Ingresa un Nombre")
    } else {
        namesList.push(inputName.value);
        namesList.forEach(item => {
            itemsList += `<li> ${item} </li>`;
        });
    
        listNames.innerHTML = itemsList;
    }

    inputName.value = null;
}

function ejecicio3Filtro() {
    let len = parseInt(document.getElementById("num3f").value);
    let filterList = document.getElementById("numfs");
    let itemsList = "";


    if (namesList.length > 0) {
        namesList.forEach(item => {
            if (item.length == len) {
                itemsList += `<li> ${item} </li>`;
            }
        });


        if (itemsList.length > 0) {
            filterList.innerHTML = itemsList;
        } else {
            alert("No existen nombres que coincidad con el criterio.")
        }

    } else {
        alert("La lista esta vacia");
    }

}

function ejecicio4() {
    let startDate = document.getElementById("nacdate").value;
    let valueDate = new Date(startDate);
    let todayDate = new Date();
    let resultDate = 0;
    let resultYears = document.getElementById("answ4")

    if (valueDate > todayDate) {
        alert("La fecha de nacimiento no puede ser mayor a la fecha actual.")
    } else {
        const format = {year: 'numeric'}
        let resultDate = (todayDate - valueDate);
        let seconds = resultDate / 1000;
        let days = seconds / 86400;
        let yearr = days / 365;
    
        resultYears.value = Math.floor(yearr);

    }
}

function ejecicio5() {
    let inputFrase = document.getElementById("txtsmthg").value;
    let splitValues = inputFrase.split(/[\s]+/);
    let resultOutObject = document.getElementById("answ5");
    let cantWords = splitValues.length;
    let result = `<p> La cantidad de palabras son de: <b>${cantWords}</b></p>`;


    resultOutObject.innerHTML = result;
}

var numberList = [];

function ejecicio61() {
    let inputNumber = document.getElementById("num6");
    let listNumber = document.getElementById("numst");
    let itemsList = "";

    
    if (inputNumber.value === "") {
        alert("Ingresa un numero")
    } else {
        numberList.push(parseInt(inputNumber.value));
        
        numberList.forEach(item => {
            itemsList += `<li> ${item} </li>`;
        });
    
        listNumber.innerHTML = itemsList;
    }

    inputNumber.value = null;
}

function ejecicio62() {
    let divResult = document.getElementById("answ6");
    let avgResult = 0;
    let i = 0;
    let itemsList = 0;

    if (numberList.length > 0) {
        numberList.forEach(item => {
            itemsList += item;
            i++;
        });
        
        avgResult = itemsList / i;
        divResult.innerHTML = `<p>El promedio de los numeros es de: <b>${avgResult}</b> </p>`;
    } else {
        alert("Ingresa Algun Numero.")
    }
}

function ejecicio7() {
    var color = document.getElementById("colorInput").value;
    var sqare = document.getElementById("sqare");
    sqare.style.backgroundColor = color;
}