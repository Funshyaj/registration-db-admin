const Detailspage = (props) => {
        return (
            <div className="details-Page">
                <button onClick={()=> props.closeClick()}>X</button>
              <h3>{props.firstName} {props.lastName}</h3>
               <div className="details-page-content">
               <p>First Name : {props.firstName}</p>
               <p>Last Name : {props.lastName}</p>
               <p>Email : {props.email}</p>
               <p>Phone number : {props.phone}</p>
               <p>Sex : {props.sex}</p>
    <div className="btn-container">
   <button onClick={(e)=> props.updateClick(e)} className="proceed-btn"  id={props.id}>Update Data</button> 
    <button onClick={(e)=> props.deleteClick(e)} className="delete-data-btn" id={props.id}>Delete Data</button>
    </div>
    </div>
    </div>
          );
    }
     
    
    export default Detailspage;