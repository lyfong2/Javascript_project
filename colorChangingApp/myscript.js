let colors = ['red', 'blue','green','maroon','Crimson', 'Teal', 'Sienna'];
let i = 0;

function myFunction(){    
    document.getElementById("wrapper").style.background = colors[i];    
    if(i == colors.length -1){
        i = 0;
    }else{
        i++;
    }
}

