
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var mainBtn = document.getElementById("mainBtn");


var productContainer;
var errors =``;

if(localStorage.getItem("productStory")==null) //zpoon gdeg 
{
    productContainer=[];
}else
{
    productContainer=JSON.parse( localStorage.getItem("productStory"));
    displayProducts();
}

function addProduct(){

    // if( checkInput()==true){

        if(validateProductName()==true){
            var product ={
                name: productName.value,
                price:productPrice.value,
                category:productCategory.value,
                desc:productDesc.value,
        
            }
            productContainer.push(product);
    
            localStorage.setItem("productStory" , JSON.stringify(productContainer));
            displayProducts();
            clearForm();
            document.getElementById("alert").innerHTML= ``;
        

        }else{
            document.getElementById("alert").innerHTML= errors;
        }

    

    // }else{
    //     window.alert( "sorry All Fields are Required" )
    // }
    mainBtn.innerHTML="addProduct";

};

function clearForm(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";
};

function displayProducts(){

    var cartona=``;

    for(var i=0 ; i< productContainer.length ; i++)
    {
        cartona +=`  <tr>
        <td>${i+1}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick=" prodictForUpdade(`+i+`)"  class="btn btn-outline-warning">update</button></td>
        <td><button  onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
        </tr> `

    }

    document.getElementById("tableBody").innerHTML=cartona;
}

function checkInput()
{
    if (productName.value !="" && productPrice.value !="" &&
     productDesc.value !="" && productContainer.value !=""){
        return true;
    }else{
        return false ;
    }
};

function deleteProduct(productindex)
{
    productContainer.splice(productindex,1);
    localStorage.setItem("productStory" , JSON.stringify(productContainer));
    displayProducts();
};

function searshe(searshTerm)

    
{
    var cartona=`` ;

    for(var i=0 ; i< productContainer.length ; i++) 
    {
        if(productContainer[i].name.toLowerCase().includes(searshTerm.toLowerCase()) ==true 
        || productContainer[i].category.toLowerCase().includes(searshTerm.toLowerCase()) ==true )
        {
            cartona +=`  <tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].desc}</td>
            <td><button onclick=" prodictForUpdade(`+i+`)" class="btn btn-outline-warning">update</button></td>
            <td><button  onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
            </tr> `;

            // console.log("fffff");
        }
        else
        {
            console.log("mfi44");
        }
    }
        document.getElementById("tableBody").innerHTML=cartona;
}

function prodictForUpdade(productIndex){
    productName.value=productContainer[productIndex].name;
    productPrice.value=productContainer[productIndex].price;
    productCategory.value=productContainer[productIndex].category;
    productDesc.value=productContainer[productIndex].desc;

    mainBtn.innerHTML="Update"
}

function validateProductName(){
    var redux =/^[A-Z][a-z]{2,10}$/;

    if(redux.test(productName.value)==true){
        return true ;
    }else{
        errors +=`<p>product in-valid</p>`;
        return false;
    }
}