import background from "../img/81ZmBRzSw3L._SL1500_marvel.jpg"
export const Character = ({id, name, description, image})=>{
    return (
        <div>
        <div className="row" style={{display:'flex',justifyContent:'space-around' }}>
            <div className="col-6" >
                <img src={background} alt="noImg" style={{width:"500px"}}/>
            </div>
            <div className="col-6">
                <div className="row" style={{display:'flex',flexWrap:"wrap", flexDirection:"column", alignItems:"flex-start"}}>
                    <div className="col-12">Name</div>
                    <div className="col-12">Description</div>
                </div>
                
            </div>
        </div>

        </div>
    )
}