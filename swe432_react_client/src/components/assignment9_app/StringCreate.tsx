import React from 'react';

interface StringCreateProps{
    updateStrings: (list:string[]) => void;
    writtenStrings: string[];
}

export function StringCreate(props: StringCreateProps){
    return(
        <div style={{ borderRadius:"25px",alignItems:"center",display:"flex", flexDirection:"column",width:"250px", height:"500px", color:"white", backgroundColor:"gray"}}>
            <div style={{borderRadius:"25px",paddingTop:"10px", paddingBottom:"10px",backgroundColor:"inherit", width:"inherit", textAlign:"center", maxHeight:"40px"}}> Enter strings in the blue box below. </div>
    <textarea style={{overflowY:"auto", color:"white",height:"430px", width:"200px", backgroundColor:"#10d2e0",display:"flex", flexDirection:"column", alignItems:"center"}} placeholder="Click here to add text." onChange={(event) => { props.updateStrings(event.target.value.split("\n"))}} value={props.writtenStrings.join("\n")}/>
        </div>
    );
}