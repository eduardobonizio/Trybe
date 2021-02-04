let n = 9;
let text = "";

//Print pyramid
let quantFloors = Math.ceil(n/2);

for(let i=0; i<quantFloors; i+=1){

    text = "";    
    
    let isPar = n % 2;

    let spacesPerLine = 0;

    if(isPar==0){
        spacesPerLine = ((n-2)/2)-i;
    }else{
        spacesPerLine = Math.floor(n/2)-i;
    }

    for(let k=0;k<spacesPerLine; k+=1){
        text += " ";
    }

    let quantAsterisk = n-(spacesPerLine * 2);

    for(let h=0; h<quantAsterisk; h+=1){
        text += "*";
    }
    
    console.log(text);
}