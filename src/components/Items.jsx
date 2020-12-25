import React from "react";

const Items = ({data, changeQty}) => {

  const select = (val) => {
    const arr = [];
    for (let i = 0; i < val; i++) {  
      arr.push(<option key={i+1} value={i+1}> {i+1} </option>)
    }
    return arr
  } 

  const hadleChange = (e) => {
    console.log("val",e.target.value)
    changeQty(e.target.value, e.target.name)
  }
      

  return (
    <>
      {
        data.map(i => {
          return (
            <div className="seller-item">
              <div className="seller-info">
                <div>Seller {i.name}</div>
                <div><a href="#"> pay this seller only</a></div>
              </div>
              
              <div className="seller-middle">
                <div>
                  <img src={i.image} alt={i.name}/>
                </div>
                <div> {i.title} </div>
                <div> 
                  <select  name={i.name} id="" onChange={(e)=>hadleChange(e)}>
                    {
                      select(i.qty)
                    }
                  </select>
                </div>
                <div> ${i.price} </div>
              </div>
              
              <div className="seller-bottom">
                <div> <a href="#">Save for later</a></div>
                <div><a href="#">Remove</a></div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Items;