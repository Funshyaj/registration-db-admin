import { useState } from "react";
const Form = () => {
    const [bool, setfirst] = useState(bool)
    return (  
        <div class="regform">
        <h1>
        Registration form	
        </h1>
    <div class="main">
    <form> 
        <div id="name">
        <h2 class="name">Name</h2>
        <input class="firstname"
         type="text" name="firstname" required /><br />
        <label class="firstlabel">first name <span style="color: red;">*Required</span></label><br />
        <input class="lastname" type="text" name="lastname" required /><br />
        <label class="lastlabel">last name <span style="color: red;">*Required</span></label>	
        </div>	
    
        <h2 id="cpname">Company</h2>
    <input class="Company" type="text" name="Company" /><br />
    <label class="Company_label">Ignore If you are a student </label> 
    
    <h2 class="name">School</h2>
    <input class="email" type="text" name="School" /><br />
    <label class="firstlabel">please fill in if youre a student</label>
    
        <h2 class="name">Email</h2>
    <input class="email" type="text" name="" required /><br />
    <label class="firstlabel"><span style="color: red;">*Required</span></label>
    
    
        <h2 class="name">Phone</h2>
    <input class="code" type="number" name="area_code" />
    <label class="area_code">area code</label>
    <input class="number" type="text" name="area_code" required />
    <label class="phonenumber">number</label>
    
    <h2 class="name">Select subject</h2>
    <select class="option" name="subject">
    
    <option disabled="disabled" selected="selected">--choose option</option>
    <option>subject 1</option>
    <option>subject 2</option>
    <option>subject 3</option>
    </select>
    
    <h2 id="student">Are you  beginner?</h2> 
    <label class="radio">
        <input class="radio-one" type="radio" name="radio" />
        <span class="checkmark"></span>
    Yes</label>
    
    <label class="radio">
        <input class="radio-two" type="radio" name="" />
        <span class="checkmark"></span>
    No</label>
        
    <button type="submit">Register</button>
        </form>
        </div>
        </div>
  
    );
}

 
export default Form;