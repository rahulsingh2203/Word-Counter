
const check = () =>{
    let input = document.getElementById("input").value;
    let arr = input.split(" ");
    let count = arr.length;
    let h3 = document.getElementById("h3");
    if(count === 1 && arr[0]===""){
        h3.innerHTML = `Total words present are 0`;
    }
    else{
        h3.innerHTML = `Total words present are : ${count}`;
    }
    console.log(arr);
}

 let input = document.getElementById("input").value = "";