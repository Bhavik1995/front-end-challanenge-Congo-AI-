import React from 'react';
import './chatbot.css';
import { FaRobot } from 'react-icons/fa';
import { GrChatOption } from 'react-icons/gr';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

const Chatbot = () => {

    return (
        <div className="gpt3__cta">
         <div className="gpt3__cta-content">
            <h2>IRIS</h2>
            <h3>Hello ✋</h3>
            <p>I am Iris, a Virtual Assistant <br/> How may I help you</p>
        </div>

        <div className="gpt3__cta-second-content">
        </div>

        <div className="gpt3__cta-overlap">
                 <div className="circle">
                <div className='robot-icon'>
                    <FaRobot className='fa-robot'/>
                </div>

                </div>

                   <p>Frequently Asked Questions <BsFillQuestionCircleFill style={{ marginLeft: "10px", color:"#F7B731" }}/></p> 
                  

                
                <div className='info-div-1'>
                <div className="info-circle-outer-1">
                    <div className="info-circle-inner-1"></div>
                </div>
                    <h6>Can I redeem my FB before the original term</h6>
                </div>

                <div className='info-div-2'>
                <div className="info-circle-outer-2">
                    <div className="info-circle-inner-2"></div>
                </div>
                    <h6>How do I pay my Credit card bill?</h6>
                </div>

                <div className='info-div-3'>
                <div className="info-circle-outer-3">
                    <div className="info-circle-inner-3"></div>
                </div>
                    <h6> How can I get my Account Statement?</h6>
                </div>

                <div className='info-div-4'>
                <div className="info-circle-outer-4">
                    <div className="info-circle-inner-4"></div>
                </div>
                 <h6> What is the tenure of Fixed Deposit?</h6>
                </div>

                <button>
                <div className='chat-icon'>
                <GrChatOption  style={{height: "18px", width: "18px"}}/>
                </div>
                    <p>Start a New Conversation</p>
                </button> 
            </div> 



    </div>
    )
}

export default Chatbot
