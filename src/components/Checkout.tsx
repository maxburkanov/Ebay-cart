import React, {useState, useEffect} from "react";

const Checkout: React.FC = (props: any) => {

  const [sub, setSub] = useState(0)
  const {total} = props  
  useEffect(()=>{
    const tot = total && total.reduce((acc: any, el: any)=>{
      console.log('acc',acc)
      let curr = el.price * el.qty
      acc += curr
      return acc
    },0)
    setSub(tot)
  },[total])


  return (
    <>
      <button className="checkout-button"> Go to checkout </button>
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
    </>
  )
}

export default Checkout;