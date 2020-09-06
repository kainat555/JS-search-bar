// const searchBar = () => {
//      let search = document.getElementById("search").value.toUpperCase();
//      let ul = document.getElementById("ul");
//      let li = ul.getElementsByTagName("li");
//      for (let i = 0; i < li.length; i++) {
//          let a = li[i].getElementsByTagName("a")[0];
//          let textValue = a.textContent || a.innerHTML;
//         //  console.log(a)
//         //  console.log(textValue)
//  if(textValue.toUpperCase().indexOf(search) > -1){
//      li[i].style.display = "";
//  }
//  else{
//      li[i].style.display = "none"
//  }
//      }

// }


//my
const searchBar = () => {
    let search = document.getElementById("search").value.toUpperCase();
    // console.log(search)
    let ul = document.getElementById("ul");
    let li = ul.getElementsByTagName("li");
    // console.log(ul, li)
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerHTML
        // console.log(a)
        // console.log(textValue)
        if (textValue.toUpperCase().indexOf(search) > -1) {
            a.style.display = "";
        }
        else {
            a.style.display = "none"
        }

    }
}
































