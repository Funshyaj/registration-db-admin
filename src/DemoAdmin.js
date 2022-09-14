import { useState /*,useEffect*/ } from 'react';
import './Admin.css';
import AddPage from './AddPage';
import Detailspage from './Detailspage';
import LoginPage from './LoginPage';
import ChangePassword from './ChangePassword';


//import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
//import { db } from "./firebaseConfig";
//import { collection, getDocs , addDoc, deleteDoc, doc } from "firebase/firestore";
 //import { async } from '@firebase/util';


const data =[
    {email: 'femiajayi21@gmail.com', firstName: 'Femi', phone: '08135530345', sex: 'Male', lastName: 'Ajayi', id:"dsdfswd"},
    {email: 'femiajayi21@gmail.com', firstName: 'Funsho', phone: '08135530345', sex: 'Male', lastName: 'Ajayi', id:"dsdfsw"},
    {email: 'femiajayi21@gmail.com', firstName: 'Mudia', phone: '08135530345', sex: 'Male', lastName: 'Ajayi', id:"dsdfs"},
    {email: 'femiajayi21@gmail.com', firstName: 'Femi', phone: '08135530345', sex: 'Male', lastName: 'Ajayi', id:"dsdf"},
    {email: 'femiajayi21@gmail.com', firstName: 'Femi', phone: '08135530345', sex: 'Male', lastName: 'Ajayi', id:"dsd"},
]

//getting data from database
//const regCollection = collection(db, "Information ");


const Admin = () => {
//states
//demo array state
const [info, setInfo] = useState(data)
//loading circle toggle state
 //const [isPending, setIsPending] = useState(false)

const [addInfoDisplayToggle, setAddInfoDisplayToggle] = useState(null)

//states for storing new data to be pushed to the backend storage
     const [firstName, setFirstName] = useState("")
     const [lastName, setLastName] = useState("")
    const [sex, setSex] = useState("")
     const [email, setEmail] = useState("")
     const [phone, setPhone] = useState("")

//states containing info about person for full details page
const [personalFirstName, setPersonalFirstName] = useState("")
const [personalLastName, setPersonalLastName] = useState("")
const [personalSex, setPersonalSex] = useState("")
const [personalEmail, setPersonalEmail] = useState("")
const [personalPhone, setPersonalPhone] = useState("")
const [personalId, setPersonalId] = useState(null)
const [showInfoToggle, setShowInfoToggle] = useState(false)

//mobile menu toggle
const [mobileMenuToggle, setMobileMenuToggle] = useState(false)

//login page toggle
const [loginPageToggle, setLoginPageToggle] = useState(true)
const [password, setPassword] = useState("")
//change password page, set state and toggle
const [newPassword, setNewPassword] = useState("")
const [oldPassword, setOldPassword] = useState("")
const [securityKey, setSecurityKey] = useState("")
const [changePasswordToggle, setChangePasswordToggle] = useState(false)



//first things first
//does this onpage load    
//const firebaseData = []
/*   getDocs(regCollection)
    .then((snap)=>{
        snap.docs.forEach((doc) => firebaseData.push({...doc.data() , id:doc.id}))
      setIsPending(false)
    setInfo(firebaseData)
          })
    .catch(err=>alert(err.message))

 */

//console.log(firebaseData)
/*useEffect(() => {

  

}, [])*/

   
//Manual add buttton, addBtn function for online
const addBtn =(e)=> {
e.preventDefault()
  
    let obj ={
        firstName:firstName,
        lastName:lastName,
        sex:sex,
        email:email,
        phone:phone,
    }  
  console.log(obj)

  if((obj.firstName !== null || "") && (obj.lastName !== null || "")  && (obj.email !== null  || "") && 
  (obj.phone !== null || ""))
  { 
    console.log("what")}
  /* addDoc(regCollection, obj)
    .then(()=>{
  if((obj.firstName !== null || "") && (obj.lastName !== null || "")  && (obj.email !== null  || "") && 
  (obj.phone !== null || ""))
  {alert("Data was added succesfully")
}
})
.catch((error)=> {alert("There was an error :"+ error)})
}
*/
addBtnClic()
}

//addBtn click
const addBtnClic =()=> {    
setAddInfoDisplayToggle(!addInfoDisplayToggle)
}

//making a backup copy of the intial demo database info
const newData = data.slice()

//close btn for full info page
const closeInfoBtn =()=> setShowInfoToggle(!setShowInfoToggle)

//Show more info btn 
const showInfoBtn =(e)=> {
const id = e.target.id
let personalInfo = info.filter(x=>x.id === id)

setShowInfoToggle(true)

setPersonalFirstName(personalInfo[0].firstName)
setPersonalLastName(personalInfo[0].lastName)
setPersonalSex(personalInfo[0].sex)
setPersonalEmail(personalInfo[0].email)
setPersonalPhone(personalInfo[0].phone)
setPersonalId(personalInfo[0].id)
}

const updateInfoBtn =(e)=> {
let id = e.target.id
console.log(id)

}

const deleteInfoBtn =(e)=> {
let id = e.target.id
console.log(id)

//const docRef = doc(db, "Information ", id)
//deleteDoc(docRef)
}

   //let newB ;

//search filter function
const searchFn =(e)=>{
    const searchWords = e.target.value.toLowerCase()//.split(" ").join("")
    const reg = new RegExp(searchWords);
    //test with regex
 let newB = newData.filter(x=> reg.test(x.name.toLowerCase()))

if(e.target.value === ""){
    setInfo(newData)  } 

        if (newB.length > 1){
            setInfo(newB)
        }
}

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
    setSex("Male")
}
if(id === "radio2"){
    setSex("Female")
}
}

const loginBtn = (e)=>{

 e.preventDefault()
    if(password === "Admin"){
        setLoginPageToggle(!loginPageToggle)
    }

else {alert("Wrong password")}
}

const handlePassword = (e)=>{
let input = e.target.value
setPassword(input)
}

const loginOutBtn = ()=>{
    setLoginPageToggle(!loginPageToggle)
    setPassword("")
}

const handlePasswordChange = (e)=>{
    let {id, value} = e.target
if (id === "oldPassword"){
    setOldPassword(value)
}
if (id === "key"){
    setSecurityKey(value)
}
if (id === "newPassword"){
    setNewPassword(value)
}

}
const changePasswordBtn = (e)=>{
    e.preventDefault()
if (oldPassword === password || "Admin" && securityKey === "Funsho" ){
    setPassword(newPassword)
    setChangePasswordToggle(!changePasswordToggle)
}
}

    return (
    <div className='admin-page'>
<header>
    <input onKeyUp={(e)=> searchFn(e)}type="input" className="search" id="search" placeholder="Enter full name to search" />
  
    <div className={`${mobileMenuToggle ? "hamburger active" : "hamburger"}`} onClick={()=>setMobileMenuToggle(!mobileMenuToggle)}>
<div className="bar 1"></div>
<div className="bar 2"></div>
<div className="bar 3"></div>
</div>  
  
</header>

<div className={`${mobileMenuToggle ? "utility-section active" : "utility-section"}`}>
    <button className="utility-btn" onClick={()=>{setAddInfoDisplayToggle("true")}}>Add data</button>
    <button className="utility-btn">Refresh</button> 
    <button className="utility-btn" onClick={(e)=>changePasswordBtn(e)}>Change Password</button>
    <button className="utility-btn"  onClick={()=>loginOutBtn()}>Logout</button>
</div>
<div className="body">
{/* Login page */}
{loginPageToggle && 
<LoginPage 
  loginBtn={(e)=>loginBtn(e)}
     handlePassword={(e)=>handlePassword(e)}
     password={password}
     />}

{changePasswordToggle &&
<ChangePassword 
handlePasswordChange={(e)=>handlePasswordChange(e)}
changePasswordBtn={(e)=>changePasswordBtn(e)}
closeChangePasswordPage={(e)=>setChangePasswordToggle(!changePasswordToggle)}
 />}

{/*add page display */}
{addInfoDisplayToggle && 
    <AddPage 
    addBtn={(e)=>addBtn(e)}
 closeAddBtn={()=>addBtnClic()}
    handleChange={()=>handleChange()}
  firstName={firstName}
 lastName={lastName}
  email={email}
  phone={phone}
  sex={sex} 
     />}

{/*personal info full display page */}
    {showInfoToggle && 
    <Detailspage 
  firstName={personalFirstName}
  lastName={personalLastName}
   email={personalEmail}
   phone={personalPhone}
   sex={personalSex}
    id={personalId}
    closeClick={()=>closeInfoBtn()}
    updateClick={(e)=>updateInfoBtn(e)}
    deleteClick={(e)=>deleteInfoBtn(e)}
    />}

{/*.slice(0,1) {isPending && <div className="loader"></div>}
*/}
    
{info &&
<div className="main-content">
<table>
<thead>

        <tr className='person'>
        <th>N/0</th>
        <th>Name</th>
        <th>Sex</th>
        <th>View Info</th>
        </tr>
</thead>
<tbody>
    {info.map((x,y)=>{
       let styles ={ padding:"0px",} 


       return(         
 <tr className='person' key={x.id}>
        <td className='number'>{y}</td>
        <td className="p-name">{x.firstName}{x.name} {x.lastName}</td>
        <td className='sex'>{x.sex}</td>
        <td style={styles}>
       <button className="more-btn" id={x.id} onClick={(e)=>showInfoBtn(e)}>
                More..
</button>
</td>
  </tr>
)

    })}
    </tbody>
    </table>
    </div> }
    </div> 
 
    </div>
   
)

};

export default Admin;