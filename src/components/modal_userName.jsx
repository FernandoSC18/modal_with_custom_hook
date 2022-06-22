import { useState } from "react"
import styled from 'styled-components';  


export default function UserName () {

    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')
 
    return <Container>
 
        <Label>
            Please write your user name
            <Input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} />
        </Label>
        <Label>
            Please write your user last name
            <Input type="text" value={userLastName} onChange={(e) => {setUserLastName(e.target.value)}} />
        </Label>
    </Container>
}
 
const Container = styled.div`
    position: relative;
    width: 100%;
`

const Label = styled.label`
    position: relative;
    display: block;
    text-align: left;
    font-size: 18px;
    width: 100%; 
    padding: 10px 0 0 0; 

`

const Input = styled.input`
    width: 100%; 
    position: relative; 
    display: block;  
    margin: 5px 0; 
    padding: 5px; 
    font-size: 18px;
    outline: auto;
    border: none; 
    box-sizing: border-box;
`