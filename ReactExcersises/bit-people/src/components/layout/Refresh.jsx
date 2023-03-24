import {GrRefresh} from "react-icons/gr"

export  const  Refresh =() =>{
  function refreshPage() {
    window.location.reload(false);
  }
    return (
       <button onClick={refreshPage}><GrRefresh/>
  </button> )
}