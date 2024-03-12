let title = document.getElementById("title");
let pric = document.getElementById("pric");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

console.log(title,pric,taxes,ads,discount ,total,count,category,submit,);


//get total

function getTotal(){

    if(pric.value != "" ){
        let result = +pric.value + +taxes.value + +ads.value
        - +discount.value;
        
        total.innerHTML=result;
        total.style.background="#040";
    }else{
        total.innerHTML="";
        total.style.background="#4d4431";
    }
}


//cearte product

let dataPro;

if(localStorage.product !=null){
    dataPro = JSON.parse(localStorage.product);
}
else{
    dataPro=[]
}


submit.onclick=function (){


    
    let newpro = {
        title:title.value,
        pric:pric.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,

    }

    dataPro.push(newpro);
    localStorage.setItem('product', JSON.stringify (dataPro));
    console.log(dataPro)
    CleanData()
    ShowData()

}

//clean
function CleanData(){

    title.value='';
    pric.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';

}

//read

function ShowData(){


    let table='';
    for(let i = 0; i < dataPro.length ;i++){
    
        table +=`
     <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].pric}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button id="update">update</button></td>
        <td><button id="delete">delete</button></td>
    </tr>
  `
       
    }

    document.getElementById('tbady').innerHTML=table;

}