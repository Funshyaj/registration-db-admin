import { useState ,useEffect } from 'react';
import './Admin.css';
import AddPage from './AddPage';
import Detailspage from './Detailspage';
import LoginPage from './LoginPage';
import ChangePassword from './ChangePassword';
import axios from "axios";


const Admin = () => {

//loading circle toggle state
const [isPending, setIsPending] = useState(true)

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

const [data, setData] = useState(null)
const [msg, setMsg] = useState(null)
const Uri = 'http://localhost:4000/';

// const tesDb = [
//     {id:1, firstName:'Funsho', lastName:'Ajayi', email:"funshao2@DSN", phone:'0807859693',sex:'male'},
//     {id:2, firstName:'Funsho', lastName:'Ajayi', email:"funshao2@DSN", phone:'0807859693',sex:'male'},
//     {id:3, firstName:'Funsho', lastName:'Ajayi', email:"funshao2@DSN", phone:'0807859693',sex:'male'},
// ]

const fetch = async()=>{
    await  axios.get(`${Uri}api`)
     .then(res => {
     setMsg(res.data.message)
     setIsPending(false)
     })
   .catch((error) => {
     console.log(error);
   })   

await  axios.get(`${Uri}get-people`)
   .then(res => {
    setData(res.data)
     setIsPending(false)
     })
   .catch((error) => {
     console.log(error);
   }) 
}

useEffect(() => {
    window.addEventListener('load', fetch)
    return () => {
      window.removeEventListener('load', fetch)
    }
  }, [data])

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

    // if feilds are not empty
  if((obj.firstName !== null || "") && (obj.lastName !== null || "")  && (obj.email !== null  || "") && 
  (obj.phone !== null || ""))
  { 
        axios.post(`${Uri}add-person`, obj)
      .then(res => alert(`${firstName} added succesfully, kindly refresh`));

  addBtnClic()
}
else{ alert('Please fill all feilds')}


}

//addBtn click
const addBtnClic =()=> {    
setAddInfoDisplayToggle(!addInfoDisplayToggle)
}


//close btn for full info page
const closeInfoBtn =()=> setShowInfoToggle(!setShowInfoToggle)

//Show more info btn 
const showInfoBtn =(e)=> {
const id = e.target.id
let personalInfo = data.filter(x=>x._id === id)

setShowInfoToggle(true)

setPersonalFirstName(personalInfo[0].firstName)
setPersonalLastName(personalInfo[0].lastName)
setPersonalSex(personalInfo[0].sex)
setPersonalEmail(personalInfo[0].email)
setPersonalPhone(personalInfo[0].phone)
setPersonalId(personalInfo[0]._id)
}

const updateInfoBtn =(e)=> {
let id = e.target.id

console.log(`person with id ${id} is ready to be updated`)
}

const deleteInfoBtn =async(e)=> {
let id = e.target.id;
console.log(`person with id ${id} is ready to be deleted`);

 await axios.delete(`${Uri}delete-person/${id}`)
        .then((res) => {
            alert('persons data has been successfully deleted!')
        }).catch((error) => {
            console.log(error)
            alert('Some error occured, couldnt delete student')
        })

        closeInfoBtn()
}

const refreshBtn = async ()=>{
await fetch()
}

//search filter function
const searchFn =(e)=>{
//     const searchWords = e.target.value.toLowerCase()//.split(" ").join("")
//     const reg = new RegExp(searchWords);
//     //test with regex
//  let newB = data.filter(x=> reg.test(x.firstName.toLowerCase()))

if(e.target.value === ""){ } 

        // if (newB.length >= 1){
        //     setData(newB)
        // }
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
if ((oldPassword === password || "Admin") && (securityKey === "Funsho") ){
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
    <button className="utility-btn" onClick={()=>setAddInfoDisplayToggle("true")}>Add data</button>
    <button className="utility-btn"onClick={()=>refreshBtn()}>Refresh</button> 
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
    handleChange={(e)=>handleChange(e)}
  firstName={firstName}
 lastName={lastName}
  email={email}
  phone={phone}
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
      
{isPending ? <div className="loader"></div> : 
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
    {data?.map((x,y)=>{
       let styles ={ padding:"0px",} 


       return(         
 <tr className='person' key={y}>
        <td className='number'>{y}</td>
        <td className="p-name">{x.firstName} {x.lastName}</td>
        <td className='sex'>{x.sex}</td>
        <td style={styles}>
       <button className="more-btn" id={x._id} onClick={(e)=>showInfoBtn(e)}>
                More...
</button>
</td>
  </tr>
)

    })}
    </tbody>
    </table>
    </div> }
    
{isPending ? <div className="loader"></div> : msg } 
    
    </div> 
 
    </div>
   
)

};

export default Admin;