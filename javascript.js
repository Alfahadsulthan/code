let string ="N"
let row
let row1
let row2
let n
let u
let bat
let v
var c
let m
let q
let row3
let p=10000000
m = 1

u=0
function onClick(){
    row=input.value
    row3=row
    row++
    let row1=row
    let row2=row
    row2--
    for(let i=1;i<=row1;i++){
        if (row3%2==0&&i==row3){
            document.write(u+=2)
            while(row3>= m&& string=="N"){
                if (m!=row3){
                    u +=2
                    m++
                    document.write(u)
                }
                else{
                    p=1
                }
                while(row3>= p){
                    p++
                    if (p!=row3){
                        u -=2
                        document.write(u)
                    }else{
                        string = "Y"
                    }
                }
            }
            document.write("<br>");
        }
        else{
            for(let q=1;q<=row1-i;q++){
                document.write(" ");
            }
            for(q=1;q<=i;q++){
                document.write( q);
            }
            for(q=i-1;q>=1;q--){
                document.write( q);
            }
            document.write("<br>");
        }
    }
    if(string=="Y"){
        row2-=1
    }
    for( i=row2;i>=1;i--){
        for(let j=1;j<=row2;j++){
            document.write(" ");
        }
        for(j=1;j<=i;j++){
            document.write(j);
        }
        for(j=i-1;j>=1;j--){
            document.write(j);
        }
        document.write("<br>");
    } 
}

button=document.getElementById('b1')
button.addEventListener('click',onClick)