async function getAPI (){
    var result =await fetch("https://dummyjson.com/products") ;
    var json =await result.json() ;
    var recipes=json.products ; 
    var myText = "";

      for (var i = 0; i < recipes.length; i++) {
        var box = `
          <div class="col-md-4 text-center my-3" >
            <img src="${recipes[i].images[0]}"class="w-100" style="height:350px">
            <h6>${recipes[i].title}</h6>
            <h5>${recipes[i].category}</h5>
            <h5>${recipes[i].price}$</h5>
            <h5>${recipes[i].rating}</h5>
            <h5>${recipes[i].id}</h5>
          </div> 
        `;
        myText += box; 
      }

      document.querySelector(".test").innerHTML = myText;
    }

getAPI() ;