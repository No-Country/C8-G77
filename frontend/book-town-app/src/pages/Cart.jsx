import axios from "axios";
import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState(null)
  useEffect(() => {
    const URL = 'https://pseudo-booktown.onrender.com/api/v1/cart'
    axios.get(URL)
      .then(res => setCart(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(cart)
  return <div>

  </div>;
}

export default Cart;
