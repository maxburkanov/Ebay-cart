import React, {useState, useEffect} from "react";

const Checkout = (props) => {

  const [sub, setSub] = useState(0)
  const {total} = props  
  useEffect(()=>{
    const tot = total && total.reduce((acc,el)=>{
      console.log('acc',acc)
      let curr = el.price * el.qty
      acc += curr
      return acc
    },0)
    setSub(tot)
  },[total])

  // console.log('tot', sub)

  return (
    <>
      <button className="checkout-button"> Go to checkout </button>
      {/* {
        total.map(i => {
          return ( */}
            <>
              <div className="checkout-info">
                <div>
                  <div> Items {total.length} </div>
                  <div> ${sub} </div>
                </div>

                <div>
                  <div> Shipping </div>
                  <div> Free </div>
                </div>
              </div> 
              
              <div className="total-price">
                <div> Subtotal </div>
                <div> ${sub} </div>
              </div>
            </>
      {/* //     ) 
      //   })
      // } */}

    </>
  )
}

export default Checkout;