
const check = () =>{
    let input = document.getElementById("input").value;
    let arr = input.split(" ");
    let count = arr.length;
    let h3 = document.getElementById("h3");
    h3.innerHTML = `Total words present are : ${count}`;
    console.log(arr);
}

 let input = document.getElementById("input").value = "";