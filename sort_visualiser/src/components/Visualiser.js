import React from 'react'
import FloatingPlay from './FloatingPlay'
import {useState, useRef, useEffect} from "react";


const Visualiser = (props) => {




    return (
        <div >
            <div className={"bg-dark visualiser-container d-flex pt-5 text-white key2"}>
                {props.array.map((value)=>(
                    <div style={{height: value+"em"}} className={"bar key1"}>
                        <div className={"fw-bolder bg-dark text-center"}>
                            <small>{value}</small>
                        </div>
                    </div> 
                ))}
            </div>
            <div onClick={props.sort} className={"text-center"}>
                <FloatingPlay  />
            </div>
        </div>
    )
}



export default Visualiser
