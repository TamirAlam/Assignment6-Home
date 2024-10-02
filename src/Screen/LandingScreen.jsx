import { useEffect, useState } from "react";
import Card from "../components/Card";
import {Data} from "../components/Data.js"

function LandingScreen(item) {
    
    const[data, setData] = useState(Data)
    const [totalAmount, setTotalAmount] = useState(2196)        
    const [cartCleared, setCartCleared] = useState(false);
    const [cartItems, setCartItems] = useState(4)        

    function clearCart() {

        const confirmClear = window.confirm('Are you sure you want to clear your cart?');
        if (confirmClear) {
            setData([]);
            setTotalAmount(0);
            setCartCleared(true);
        }
    }

            return(
                <div id="landing-screen">
            <div id="navbar" className="flex h-16 w-full bg-blue-700 text-white">
                <div className="left w-2/3 flex justify-center items-center">
                    <p className="text-3xl">Shopping Cart</p>
                </div>

                <div className="right w-1/2 flex justify-center items-center">
                    <a href=""><i className="fa-solid fa-cart-plus text-3xl relative">
                        <div className="h-3 w-4 p-2 flex justify-center items-center bg-white text-black absolute -top-1 -right-1 border-2 rounded-xl">
                            {/* <p className="text-sm">4</p>  */}
                            <p className="text-sm">{cartItems}</p> 
                            {/* <p>{item.totalSum}</p>  check this line  */}
                        </div>
                    </i></a>
                </div>
            </div>

            <div id="main" className="flex-col flex justify-center py-5">
                <h1 className="text-5xl">YOUR BAG</h1>

                <div id="output" className="">
                    {/* Conditionally render cards or empty cart message */}
                    {data.length === 0 ? (
                        <p className="text-2xl text-blue-600 mt-20 mb-10">Your cart is empty!</p>
                    ) : (
                        data.map((item, index) => (
                            <Card key={index} index={index} totalAmount={totalAmount} setTotalAmount={setTotalAmount} item={item} data={data} setData={setData} cartItems={cartItems} setCartItems={setCartItems} />
                        ))
                    )}
                </div>
            </div>



            <hr />

            <div id="footer" className="flex flex-col justify-center items-center h-20">

                <div className="top flex justify-between w-1/2">
                    <div className="left">
                        <p>Total</p>
                    </div>

                    <div id="total-amount" className="right bg-zinc-300 p-1 rounded-lg">
                        <p>${totalAmount}</p>
                        {/* <p>$2999.94</p> */}
                    </div>
                </div>

                <div className="below">
                    <div id="clear-cart-button" className="text-center">
                        <button id="clearCartButton" className="hover:text-red-600 text-xl font-bold" onClick={clearCart} type="submit">Clear Cart</button>
                    </div>
                </div>

            </div>


        </div>
    )
}
 
export default LandingScreen;