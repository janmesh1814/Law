import Header from "./header";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import DropList from "./drplist"
export default function Law(){
  const dummyData = {
    summary: "This is a brief summary of the document contents.",
    document: [
       { "sile": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
       { "sile": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
       { "sile": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    ]
};
const[index,setIndex]=React.useState(0);
const [data,setData]=React.useState('');
  const [text,setText]=React.useState('');
  function onSubmit(){
setIndex(1);
  }
  return<>
  <Header/>
{index===0?<><Typography variant="subtitle1">Simple Legal Help .Enter your case file and get a summary and previous relevant  court cases</Typography>
  <div className=" flex  items-center justify-center mt-10 ">
   <form onSubmit={onSubmit} className="w-1/2  items-center justify-center mt-10 "  > 
   
  <TextField className="w-1/2 "
          id="outlined-multiline-static"
          label="Query box"
          multiline
          rows={10}
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          defaultValue="Legal document"
        />
       
        <Button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">submit</Button>
       </form> 
</div></>:<>
<DropList/>

</>}
  
  </>
}