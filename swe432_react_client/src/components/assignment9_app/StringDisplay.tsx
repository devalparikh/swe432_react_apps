import React from 'react';

interface stringProps{
    randomString?: string;
    currentStrings?: Array<any>;
}

export function StringDisplay(props: stringProps){

    return(
        <div style={{ borderRadius:"25px",alignItems:"center",display:"flex", flexDirection:"column",width:"250px", height:"500px", color:"white", backgroundColor:"gray"}}>
            <div style={{borderRadius:"25px",paddingTop:"10px", paddingBottom:"10px",backgroundColor:"inherit", width:"inherit", textAlign:"center", maxHeight:"40px"}}> String Chosen: {props.randomString == null ? "" : props.randomString} </div>
            <div style={{overflowY:"auto", color:"white",height:"430px", width:"200px", backgroundColor:"#10d2e0",display:"flex", flexDirection:"column", alignItems:"center"}}> {props.currentStrings} </div>
        </div>
    );
}
