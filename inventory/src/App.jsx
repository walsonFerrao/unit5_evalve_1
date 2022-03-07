import logo from './logo.svg';
import './App.css';

import Things from './Components/Things';

// {
// title:"book";

// buttonclassadd:"addBook"
// buttonclassremove:"remBook"
// totalclass:"totalBooks"
// total:13
    
// }

// let Books={
// title:"book",
// buttonclassadd:"addBook",
// buttonclassremove:"remBook",
// totalclass:"totalBooks",
// total:13
// }

function App() {
  return (
    <>
    <Things item={"book"} title={"book"} buttonclassadd={"addBook"} buttonclassremove={"remBook"} totalclass={"totalBooks"} total={13}/>
    <Things item={"pen"} title={"pen"} buttonclassadd={"addPen"} buttonclassremove={"remPen"} totalclass={"totalPens"} total={10}/>
    <Things item={"notebook"} title={"notebook"} buttonclassadd={"addNotebook"} buttonclassremove={"remNotebook"} totalclass={"totalNotebooks"} total={44}/>
    <Things item={"inkpen"} title={"inkpen"} buttonclassadd={"addInkpen"} buttonclassremove={"remInkpen"} totalclass={"totalInkpens"} total={78}/>
<br />
<div>Total</div>
    </>
  );
}

export default App;
