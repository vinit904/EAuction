import './Header.css';
import { useState , useEffect } from 'react';






function Header() {

  const [ HeaderContent , setHeaderContent ] = useState();

  useEffect(()=>{
    setInterval(()=>{
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
    {
      setHeaderContent(<>

           
      </>);      
    }
    else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
    {
      setHeaderContent(<>
            
      </>);      
    }      
    else
    {
      setHeaderContent(<>
      <div id="templatemo_header_wrapper">
          <div id="templatemo_header">
            <div id="site_title">
             
            </div>
            
            {/* end of templatemo_slider */}
          </div>
          {/* header */}

        </div>
        
      </>);
    }
    },1);
  },[]);
  





  return (
<>    
{ HeaderContent }
   
</>
);
}

export default Header;




