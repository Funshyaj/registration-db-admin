import './Navbar.css';

const Navbar = () => {
    return (  
<nav>
<label className="logo">SmeWeb1</label>
<ul className="ul-one">
	<li><a href="#">Home</a></li>
	<li><a href="#">about</a></li>
	<li><a href="#">misson</a></li>
	<li><a href="#">vision</a></li>
</ul>

	<div className="hamburger">
<div className="bar 1"></div>
<div className="bar 2"></div>
<div className="bar 3"></div>
</div>
</nav>
    );
}

//declare variables
const hamburger = document.querySelector(".hamburger")
const licancel = document.querySelectorAll("li")


//to cancel click for window press 
//function for selecting all hamburger buttons and initaiting the active mode of the menu with toggle
hamburger.addEventListener("click", (e)=>{
	let ul = hamburger.previousElementSibling
		ul.classList.toggle("active")
		//turn the hamburger menu to an x
		hamburger.classList.toggle("active")
		window.onscroll = ()=>{
	let scroll = window.pageYOffset
	if (scroll > 1){
ul.classList.remove("active")
hamburger.classList.remove("active")}
}
	})

//to close menu when any link in menu is pressed
licancel.forEach(li =>{
	li.addEventListener("click", (e)=>{
	let ul = li.parentElement
	let uncle = li.parentElement.nextElementSibling
		ul.classList.remove("active")
		uncle.classList.remove("active")
	})
})


export default Navbar;