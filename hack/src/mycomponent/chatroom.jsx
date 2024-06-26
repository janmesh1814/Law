import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import Chip from '@mui/material/Chip';
import './chatroom.css'

export default function Chat(props) {
  const [count,counter]=React.useState(100)
    const  dummymessages=[ 
    
        { name: "Alice", text: "I hate you", index: 0 },
        { name: "Bob", text: "I am about to die", index: 1 },
        { name: "Alice", text: "You are about to die", index: 2 },
        { name: "Bob", text: "Death by gun shot", index: 3 },
        { name: "Bob", text: "Death by Cancer", index: 4 },
        { name: "Bob", text: "I am about to die", index: 5 },
        { name: "Alice", text: "You are about to die", index: 6 },
        { name: "Bob", text: "Death by gun shot", index: 7 },
        { name: "Bob", text: "Death by Cancer", index: 8 },
        { name: "Bob", text: "Death by gun shot", index: 9 },
        { name: "Bob", text: "Death by Cancer", index: 10 },
        { name: "Bob", text: "I am about to die", index: 11 },
        { name: "Alice", text: "You are about to die", index: 12 },
        { name: "Bob", text: "Death by gun shot", index: 13 },
        { name: "Bob", text: "Death by Cancer", index: 14 }
    
    
]
const [messages,setMessages]=React.useState(dummymessages)
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addMessage=(v)=>{
    let r={ name: "Alice", text: v, index: count }
    counter(count+1)
    setMessages([...messages,r])
  }
  const handleMessage=()=>{
    let v=document.getElementById('nameMessage').value;
    document.getElementById('nameMessage').innerHTML="";
    addMessage(v)
    console.log(v);
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen('paper')}>Chat</Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullWidth={'md'}
        maxWidth={'md'}

      >
        <DialogTitle >Chat</DialogTitle>
        <DialogContent dividers={1}>
          <DialogContentText
            
            ref={descriptionElementRef}
            tabIndex={-1}
          ><div className='container' >

           {
            messages.map((message)=>(<>
            
            <div key={message.index} className={`item ${message.name  === 'Alice' ? 'left' : 'right'}`}>
            <Chip label={message.text} color={`${message.name  === 'Alice' ? 'primary' : 'success'}`} />
            </div>
            </>))
           }
           <TextField
            autoFocus
            required
            margin="dense"
            id="nameMessage"
            name="Message"
            label="Message"
            type="email"
            fullWidth
            variant="standard"
          />
           </div>
          </DialogContentText>
        </DialogContent>
       
        <DialogActions >
          <Button onClick={handleMessage} color='success'>Message</Button>
          
          <Button onClick={handleClose}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
