
const obj1 ={
    product1name :"Sansung jomii" ,
    product1price: 3000,
    product1image: "images/p1/1.jpg",
    product1oldprice: 4500,
    id: 001,
    
}

const obj2 ={
    product2name :"Sansung UHD TV" ,
    product2price: 12000,
    product2image: "images/tv1/1.jpg",
    product2oldprice: 1500,
    id: 002,
}
const obj3 ={
    product3name :"Fashonable Sansung wear" ,
    product3price: 2000,
    product3image: "images/cloth1/1.jpg",
    product3oldprice: 8500,
    id: 003,
}
const obj4 ={
    product4name :"Fashonable Sansung wear" ,
    product4price: 249000 ,
    product4image: "images/mac1/1.jpg",
    product4oldprice: 249001,
    id: 004,
}

let ids = decodeURIComponent(window.location.search);
 ids = ids.substring(1);
 console.log(ids);

//  if (ids === 1) {
//            document.getElementById("productImage").src=obj1.product1image;
//         document.getElementById("productName").innerHTML=obj1.product1name;

// } else if (ids === 2) {
   
// } else if (ids === 3) {
    
// } else if (ids === 4) {
    
// } else {

// }



switch(ids){
    case  "1":
        document.getElementById("productImage").src=obj1.product1image;
        document.getElementById("productName").innerHTML=obj1.product1name;
        document.getElementById("productPrice").innerHTML=obj1.product1price;
        document.getElementById("productoldprice").innerHTML=obj1.product1oldprice;
      break;
    case "2":
        document.getElementById("productImage").src=obj2.product2image;
        document.getElementById("productName").innerHTML=obj2.product2name;
        document.getElementById("productPrice").innerHTML=obj2.product2price;
        document.getElementById("productoldprice").innerHTML=obj2.product2oldprice;
      break;
      case "3":
        document.getElementById("productImage").src=obj3.product3image;
        document.getElementById("productName").innerHTML=obj3.product3name;
        document.getElementById("productPrice").innerHTML=obj3.product3price;
        document.getElementById("productoldprice").innerHTML=obj3.product3oldprice;
      break;
      case "4":
        document.getElementById("productImage").src=obj4.product4image;
        document.getElementById("productName").innerHTML=obj4.product4name;
        document.getElementById("productPrice").innerHTML=obj4.product4price;
        document.getElementById("productoldprice").innerHTML=obj4.product4oldprice;
      break;
  }

 