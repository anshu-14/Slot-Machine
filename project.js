const prompt = require("prompt-sync")();//nmp i prompt-sync used to take user input form user in js
let NotValid="Enter Valid Amount";
let val;
let limit=3;
let slotone =[1,2,3];
let slottwo =[2,1,3];
let slotthree =[3,2,3];
let mainSlot=[];
let randomFloat;
randomFloat = Math.floor(Math.random()*(limit))+1;
let sone=[randomFloat];
randomFloat = Math.floor(Math.random()*(limit))+1;
let stwo=[randomFloat];
randomFloat = Math.floor(Math.random()*(limit))+1;
let sthree=[randomFloat];
const Answer=()=>{
    val=Amount();
   if(val==NotValid)
   {
       console.log(val);
       Answer();
   }
   else{
       nextstep(val);
   }
}
const Amount=()=>
{
    const Deposit=prompt("Enter amount: ");
    const ValidDeposit=parseFloat(Deposit);
    return isNaN(ValidDeposit)? NotValid: ValidDeposit;    
}
const nextstep=(x)=>
{
    
    let line=prompt("Bet on Line : ");
    let lno=parseFloat(line);
    if (isNaN(lno)) {//isNaN is a function
        console.log("Invalid Line");
        nextstep(val);
    } else {
        if(lno>limit || lno<=0)
        {
            console.log(`Choose line between 1 and ${limit}`);
            nextstep(val);
        }
        else
        {
            console.log(`You have betted ${x} Dollars on line ${lno}`);//Template Literals
            mainSlot=randomizearray(sone,stwo,sthree);
            result(mainSlot);
        }
        
    }
}
let randomizearray=(x,y,z)=>
{
    for(let i=0;i<3;i++)
    {
        if(i==0)
        {
            x.pop();
            y.pop();
            z.pop();
        }
        randomFloat = Math.floor(Math.random()*(3))+1;
        x.push(randomFloat);
        randomFloat = Math.floor(Math.random()*(3))+1;
        y.push(randomFloat);
        randomFloat = Math.floor(Math.random()*(3))+1;
        z.push(randomFloat);
    }

    return [x,y,z];
}
let result=(x)=>
{
    console.log(x[0])
    console.log(x[1])
    console.log(x[2])
    let result_row_one;
    let result_row_two;
    let result_row_three;
    for(let i=0;i<3;i++)//row
    {
        let row=((x[i]).length)-1;
        if(x[i][i]==x[i][row])
        {
            if(x[i][i]==(x[i][row-1]))//3rd row first col remain unchecked
            {
                 val=val*2;
                console.log(`You won ${val}`);
            }
            else{
                 val=val-val;
                console.log(`You Lost Current Balance  is : ${val}`);
            }
        }
    }
    
    //console.log(x.length)
}


Answer();


