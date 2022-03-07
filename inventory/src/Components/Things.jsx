

// {
// title:"book";

// buttonclassadd:"addBook"
// buttonclassremove:"remBook"
// totalclass:"totalBooks"
// total:13
    
// }


import  { useState }  from 'react'

function Things(props){
const [count ,setCount]= useState(props.total)
var TOTAL=count
return(

<div className="items">

<div>Item name:{props.item}</div>
<button className={props.buttonclassadd}  onClick={()=>{setCount(count+1)}}   >+</button>
<button className={props.buttonclassremove} onClick={()=>{setCount(count-1)}}>-</button>
<div className={props.totalclass}>totalofthis item:{count}</div>


</div>

)

}



export default Things