let n = 5;
let text = "";

//Print inverted right triangle
for(let i=0; i<n; i+=1){
    text = "";
    let quantSpace = n-i;

    for(let j=0; j<quantSpace; j+=1){
        text += " ";
    }

    for(let k=0; k<i; k+=1){
        text += "*";
    }
    console.log(text);
}