// import { useState } from "react";
import {Data} from "../components/Data.js"
import { useEffect, useState } from "react";

function Card(props) {

    
    function increaseNumber(index) {
        
            props.setCartItems((previous) => {
                // console.log(previous)
                return previous + 1;
            })
        
            props.setData((previous) => {
            
            // console.log('Before', previous[index].quantity)
            
            previous[index].quantity ++;
            
            // console.log('after', previous[index].quantity)
            
            props.setTotalAmount((previous) => {
                
                // console.log(previous)
                
                return (previous + props.item.price)            // returning total amount


            })
            // props.setTotalAmount(() => {
            //     previous.reduce(accumulator, currentValue)
            // })

            // console.log(previous);

            return [...previous];

        })          
        
    }

    function decreaseNumber(index) {

        props.setCartItems((previous) => {
            // console.log(previous)
            return previous - 1;
        })

        props.setData((previous) => {

            
            previous[index].quantity--;
            console.log(previous[index].quantity)

            
            if(previous[index].quantity == 0) {

                removePhone();
            }


                props.setTotalAmount((previous) => {
                
                    // console.log(typeof props.item.price)

                return (previous - props.item.price)    
            })

            // }

            // else {
            //     alert('Removed the phone!')
            //     previous[index].quantity--;

            // }

            // console.log(previous);

            return [...previous];


        })


        
    }

    function removePhone(index) {

        const newData = [...props.data];

        newData.splice(index, 1);

        props.setData(newData);


    
    }
    
    return(
        <div id="card" className="flex justify-center items-center">

            <div className="flex w-3/5 items-center">

                <div className="1/5 " >
                    <img className="w-20 h-20" src={props.item.imageSrc} alt="Samsung Galaxy S8" />
                </div>

                <div className="w-4/5 h-full  text-left p-5">
                    <div>
                        {/* <p>Samsung Galaxy S8</p> */}
                        <p>{props.item.name}</p>
                    </div>

                    <div>
                        {/* <p>$399.99</p> */}
                        <p>${props.item.price}</p>
                    </div>

                    <div>
                        {/* <button id="remove-button" value={"remove"} name="remove">remove</button> */}
                        <input type="button" onClick={()=> {removePhone(props.index)}} value="remove" id="remove-button" className=" text-cyan-800 hover:cursor-pointer hover:text-red-600"/>
                        
                    </div>
                </div>


                <div className=" w-1/12">
                    <div>
                        <button onClick={() => {increaseNumber(props.index)}}><i className="fa-solid fa-angle-up"></i></button>
                    </div>

                    <div>
                        {/* <p>1</p>  */}
                        <p>{props.item.quantity}</p>
                        {/* <p></p> */}
                    </div>

                    <div>
                        <button onClick={() => decreaseNumber(props.index)}><i className="fa-solid fa-angle-down"></i></button>
                    </div>
                </div>



            </div>
        
        </div>
    )
}

export default Card;