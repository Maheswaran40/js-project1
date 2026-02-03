var products=[
    {
        id:1,name:"samsung",price:9999,color:"red",image:"./Assets/images/samsung.png"
    },
     {
        id:1,name:" samsung",price:9999,color:"red",image:"./Assets/images/samsung.png"
    },
     {
        id:2,name:"vivo",price:19999,color:"gray",image:"./Assets/images/vivo.png"
    },
     {
        id:3,name:"iphone",price:4999,color:"blue",image:"./Assets/images/iphone.png"
    },
    {
        id:3,name:"iphone",price:49999,color:"blue",image:"./Assets/images/iphone.png"
    },
]

// show data into home page

function getData(){
    var data=""
    products.map((value,index)=>(
        data +=`
        <div class="col-lg-4">
            <div class="card">
                <img src="${value.image}" width="100%" height="200px" alt="">
                <div class="card-body">
                    <span>name:${value.name}</span>
                    <span>price:${value.price}</span>
                </div>
            </div>
        </div>
        `
    ))
    console.log("data",data);
    document.getElementById("showdata").innerHTML=data
    
}
 getData()

 function searchFun(e){
    e.preventDefault()
    var searchData=document.getElementById("searchInput").value
    console.log("searchData",searchData);
    var data=""
    products.filter((value,index)=>value.name.toLowerCase()==searchData.trim().toLowerCase()).map((value,index)=>(
        data+= `<div class="col-lg-4">
            <div class="card">
                <img src="${value.image}" width="100%" height="200px" alt="">
                <div class="card-body">
                    <span>name:${value.name}</span>
                    <span>price:${value.price}</span>
                </div>
            </div>
        </div>`
    ))
    document.getElementById("searchdata").innerHTML=data
 }