import logo from './logo.svg'
import './App.css';
function App() {
  return (
    <div className="App">
     <Card/>
    </div>
  );
}

export default App;

function Card(){
  return(
    <div class="container">
     <div class="container-flex">
      <div class="row">
        <h3>Free</h3>
        <h4>$0<sub>/month</sub></h4>
        <li>&#x2714; Single User</li> &nbsp;
        <li>&#x2714; 5GB Storage</li> &nbsp;
        <li>&#x2714; Unlimited Public Projects</li> &nbsp;
        <li>&#x2714; Community Access</li> &nbsp;
        <li>&#x2716; Unlimited Private Projects</li> &nbsp;
        <li>&#x2716; Dedicated Phone Support</li> &nbsp;
        <li>&#x2716; Free Subdomain</li> &nbsp;
        <li>&#x2716; Monthly Status Reports</li> &nbsp;
        <button class="btn">Puy</button>&nbsp;
      </div>
      <div class="row">
        <h3>Plus</h3>
        <h4>$9<sub>/month</sub></h4>
        <li >&#x2714; <b>5 User</b></li> &nbsp;
        <li >&#x2714; 50GB Storage</li> &nbsp;
        <li >&#x2714; Unlimited Public Projects</li> &nbsp;
        <li >&#x2714; Community Access</li> &nbsp;
        <li >&#x2714; Unlimited Private Projects</li> &nbsp;
        <li >&#x2714; Dedicated Phone Support</li> &nbsp;
        <li>&#x2714; Free Subdomain</li> &nbsp;
        <li>&#x2716; Monthly Status Reports</li> &nbsp;
        <button class="btn">Puy</button>&nbsp;
      </div>
      <div class="row">
        <h3>Pro</h3>
        <h4>$49<sub>/month</sub></h4>
        <li>&#x2714;<b> Unlimited User</b></li> &nbsp;
        <li>&#x2714; 150GB Storage</li> &nbsp;
        <li>&#x2714; Unlimited Public Projects</li> &nbsp;
        <li>&#x2714; Community Access</li> &nbsp;
        <li>&#x2714; Unlimited Private Projects</li> &nbsp;
        <li>&#x2714; Dedicated Phone Support</li> &nbsp;
        <li>&#x2714; Free Subdomain</li> &nbsp;
        <li>&#x2714; Monthly Status Reports</li> &nbsp;
        <button class="btn">Puy</button>&nbsp;
      </div>
     </div>
    </div>
    
    
  )
}

 
