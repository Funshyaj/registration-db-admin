import { useState } from "react"
import UpdateInfoPage from "./UpdateInfoPage"


const Detailspage = ({firstName,lastName,email,sex,phone,id,deleteClick,closeClick,updateInfoBtn}) => {
  //update person info page toggle 
const [updateInfoPageToggle, setUpdateInfoPageToggle] = useState(false)

//states for storing new data to be pushed to the backend storage
const [_firstName, setFirstName] = useState(firstName)
const [_lastName, setLastName] = useState(lastName)
const [_email, setEmail] = useState(email)
const [_phone, setPhone] = useState(phone)
const [_sex, setSex] = useState(sex)

const closeUpdatePage = ()=> setUpdateInfoPageToggle(false)

//state storage input function 
const handleChange = (e)=>{
  let {id, value} = e.target
if(id === "firstName"){
setFirstName(value)
}
if(id === "lastName"){
   setLastName(value)
}
if(id === "email"){
   setEmail(value)
}
if(id === "phone"){
   setPhone(value)
}
if(id === "radio1"){
   setSex(value)
}
if(id === "radio2"){
   setSex(value)
}
}


return (<>
{/* update person info page */}
{updateInfoPageToggle &&
<UpdateInfoPage 
updateInfoBtn={(e)=>updateInfoBtn(e)}
closeAddBtn={()=>closeUpdatePage()}
handleChange={(e)=>handleChange(e)}
firstName={_firstName}
lastName={_lastName}
email={_email}
phone={_phone}
sex={_sex}
id={id}
/>
}
            <div className="details-Page">
                <button onClick={()=> closeClick()}>X</button>
              <h3>{firstName} {lastName}</h3>
               <div className="details-page-content">
               <p>First Name : {firstName}</p>
               <p>Last Name : {lastName}</p>
               <p>Email : {email}</p>
               <p>Phone number : {phone}</p>
               <p>Sex : {sex}</p>
    <div className="btn-container">
   <button onClick={(e)=> setUpdateInfoPageToggle(true)} className="proceed-btn"  id={id}>Update Data</button> 
    <button onClick={(e)=> deleteClick(e)} className="delete-data-btn" id={id}>Delete Data</button>
    </div>
    </div>
    </div>
    </>
          );
    }
     
    
    export default Detailspage;