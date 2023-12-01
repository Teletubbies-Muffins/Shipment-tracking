import React from "react";
import "./blog.css";
import {useState, useEffect} from "react";
function Blog(props){

let [comment,setComment]=useState("");
let [sTA,setSTA]=useState([]); //sTA=Store text in array
let [nOC,setNOC]=useState(-1);
let Time=new Date();
/*
Using comment text, we save it in our array
*/


function storeComment(e){
    setComment(e.target.value);
}

function gc(){
    setSTA([...sTA,comment]);
}

useEffect(()=>{
setNOC(nOC+1);
},[sTA]);

    return(
        <>
        <h1>Shipment Tracking App Blog</h1>
        <br/>
        <h3> Welcome to our Blog page. Know more about our service by looking through different people and their experience in our app.</h3>

<div className='divC container-fluid'>
    <h4>Comments {nOC}</h4>
    {sTA.map((e)=>{
        return(
            <>
            
            <label>{e}<span class='spanC'><br/>Sent {Time.getDate()}/{Time.getMonth()+1}/{Time.getFullYear()}</span></label><br/><hr/>

            </>

        );
    })}
</div>

        <textarea onChange={storeComment}></textarea>
        <button  className='btnC' onClick={gc}>Submit comment</button>

 
 
        </>
    )

}

export default Blog;