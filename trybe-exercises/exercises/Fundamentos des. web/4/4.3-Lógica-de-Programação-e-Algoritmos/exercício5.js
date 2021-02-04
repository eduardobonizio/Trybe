let n = 7;
let text = "";

//Print empty pyramid
let quantFloors = Math.ceil(n/2);
for(let i=0; i<quantFloors; i+=1){

    text = "";

    let spacesPerLine = 0;

    spacesPerLine = Math.floor(n/2)-i;

    if(i==0){
        for(let k=0;k<spacesPerLine; k+=1){
            text += " ";
        }
    
        text += "*";
    }else if(i==quantFloors-1){
        for(let k=0;k<n; k+=1){
            text += "*";
        }
    }else{
        for(let k=0;k<spacesPerLine; k+=1){
            text += " ";
        }
    
        text += "*";
    
        let quantBlankSpaces = n-(spacesPerLine * 2)-2;
    
        for(let h=0; h<quantBlankSpaces; h+=1){
            text += " ";
        }
    
        text += "*";
    }
    console.log(text);
}