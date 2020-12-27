import React, {useState, useEffect} from "react"
import './App.scss';

import Items from "./components/Items"
import Checkout from "./components/Checkout"

interface Item {
  id: number,
  name: string,
  image: string,
  title: string,
  qty: number,
  price: number
}

interface Current {
  name: string,
  qty: number,
  price: number
}
const APIdata: any = [
  {
    id: 1,
    name: "Nike",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2bkwAxxiHxLIHem2-zxPGbxfrNbN9HbWCzhPCOSPN5v4wyNqW9VhgmX3IhUT4cbKwqI6Q4Dp&usqp=CAc",
    title: "Some description",
    qty: 3,
    price: 22.50
  },
  {
    id: 2,
    name: "Adidas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrD5EuFWSHvX697SaIsTarkDzU1F0Nt_IxS6YqAOF9cooyNrQYP0Vkt0sNTYTft2AypIAfUSp7&usqp=CAc",
    title: "Some description",
    qty: 3,
    price: 14.50
  }
] 

const App: React.FC = () => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState([])

  useEffect( () => {
    fetch('https://jsonplaceholde.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(() => {
      setData(APIdata);
      const obj = APIdata.reduce((acc: any, el: any) => {
        const curr: Current = {"name": el.name, "qty": 1, "price": el.price}
        acc.push(curr)
        return acc
      }, [])
      setTotal(obj)
    });
  }, [])

  const changeQty = (val:any, name:string) => {
    const curr: any = total.map((i: Current) => {
      if (i.name === name) i.qty = val
      return i
    })
    setTotal(curr)

  }
  const props: any = {
    data: data
  }

  const totProps: any = {
    total: total
  }

  return (
    <div className="App">
      <main className="main-items">
        <Items {...props} changeQty={changeQty}/>
      </main>
      <aside className="aside-checkout">
        <Checkout {...totProps} />
      </aside>
    </div>
  );
}

export default App;
