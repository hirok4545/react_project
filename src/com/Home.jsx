import React from "react";







function Home(){
  const data={
    
        "id": 1, "name": "Apples",  "price": "$2" ,
         "id": 2, "name": "Peaches", "price": "$5"
      
    };


  const[status,setStatus]=React.useState(true)



  

  return <div className="container">
    {
      status? <h1> {data.id} </h1>
      
      
      
      :<h1>No Data toogle is off</h1>
    }
    
    
    <button onClick={()=>setStatus(!status)}>
    {
      status? <h1> button on</h1>:<h1>button off</h1> 
    }
    
    </button>
    </div>

}
export default Home;

