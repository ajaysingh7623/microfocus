import './App.css';
import Confetti from 'react-confetti'


function Page() {

  return (<>
        <Confetti/>
    <h3>Page 2</h3>

    <div className="box">
  <div style={{whiteSpace: 'nowrap',fontSize:"20px"}}>  <span style={{fontSize:"30px"}}>&#8592;</span> Hello,My name is Ajay Singh worked in edtech,crm,event management and udaan projects.<br/> 
  last weekend we had really exciting fun treaking journey and went to amusement park. <br/>
  yesterday i got the assignment from microfocus i am really  excited to solve that problem.<br/>
  i have lot of learning from assigment -- use key stokes pressing for hidding and showing div,<br/>
  positing div, do redirecting to new page and celebration animation.
  <span style={{fontSize:"30px"}}>&#8594;</span> 
  </div>
</div> 
<div className="pagebottom" style={{fontSize:"30px"}}><a href="/"><button><span >&#8592;</span> Back</button></a></div>
  </>);
}

export default Page;
