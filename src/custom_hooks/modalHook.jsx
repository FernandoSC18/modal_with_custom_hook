import styled, {keyframes} from 'styled-components';   
import React, {  useEffect, useState } from "react" 

function useModal ( textTitle ) {  
    
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState('Modal')

    useEffect(()=>{
        setTitle(textTitle)
    }, [])

     
    const changeShow = () => {
        setShow(!show)
    } 

    return {
        changeShow, 
        show, 
        title, 
    }
}

function ModalHook ( {modalHook, content} ) {

    // Estado actual modalHook.show 
    // Cambio del estado modalHook.changeShow 
  
    return modalHook.show 
    ? <ModalBackArea onClick={modalHook.changeShow }>
                <ModalArea onClick={(e) => e.stopPropagation() }> 
                    <Title> {modalHook.title} </Title>
                    <BtnClose onClick={modalHook.changeShow }> X </BtnClose>
                    <br /> 
                    {content}
                </ModalArea>
            </ModalBackArea>  
    : null

}

export default ModalHook 
export {
    useModal 
}

const started = keyframes`    
  from {opacity: 0;} 
  to {opacity: 1;}
`;


const ModalBackArea = styled.div` 
    width: 100%;
    height: 100%;
    background: #ffffff88;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;  
    z-index: 999999999;
`

const ModalArea = styled.div`  
    max-width: 90%;
    max-height: 90%;
    padding: 20px;
    background: #80ccff;
    position: relative;
    display: block;
    width: max-content;
    height: max-content;
    top: 50%;
    margin: auto;
    box-sizing: border-box;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);  
    animation: ${started} 500ms normal ; 
    -webkit-box-shadow: 0 0 10px 0px #000000;
    box-shadow: 0 0 10px 0px #000000; 
`

const Title = styled.p` 
    text-align: left;
    top: 0;
    left: 0;
    z-index: 1; 
    position: absolute;
    display: inline-block;      
    font-size: 18px;
    font-weight: bold;  
    padding: 10px; 
    margin: 5px;
    box-sizing: border-box;
    width: 100%;
    &&::after{ 
        content: "";
        position: absolute; 
        bottom: -5px;
        left: 0;
        width: 95%;
        height: 2px;
        background: #000000;
    }
`

const BtnClose = styled.button` 
    z-index: 1; 
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;    
    color: #FFF;   
    background: #ff757c;     
    font-size: 18px;
    font-weight: bold;  
    padding: 10px; 
    margin: 5px;   
    border-radius: 10px;
    width: max-content;
    height: max-content;  
    outline: none;
    border: none; 
    cursor: pointer;   
    &&:hover{ 
        background: #FFF;
        color: #ff757c;    
    }
`
