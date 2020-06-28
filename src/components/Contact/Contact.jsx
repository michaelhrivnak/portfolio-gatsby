import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Contact = (props) => {
   
    return (
    <section id="contact" className="text-2xl tracking-widest">
        <h1>CONTACT</h1>
        <hr/>
        <div className="flex">
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                <p className="hidden">
                    <label htmlFor="bot-field">Don’t fill this out if you're human:</label>
                    <input id="bot-field" type="text" name="bot-field" />
                </p>
                <div className="input">
                    <label id="lblContactName" htmlFor="contactName" className="input-title">NAME</label>
                    <input id="contactName" aria-labelledby="lblContactName" type="text" name="name" placeholder="John Doe"/>
                </div>
                <div className="input">
                    <label id="lblEmailAddress" htmlFor="emailAddress" className="input-title">EMAIL</label>
                    <input id="emailAddress" aria-labelledby="lblEmailAddress" type="email" name="_replyto" placeholder="example@domain.com" />
                </div>
                <div className="input">
                    <label id="lblMessageBox" htmlFor="messageBox" className="input-title">MESSAGE</label>
                    <textarea id="messageBox" name="message" aria-labelledby="lblMessageBox"></textarea>
                </div>
                <button id="submit" type="submit" className="btn submit" aria-label="submit">SUBMIT</button>
            </form>
            <div id="externalLinks" className="w-2 pl-5">
                <h4 className="block">LINKS</h4>                        
                <div className="inline-flex">
                    <a href="https://github.com/michaelhrivnak" aria-label="github"><FontAwesomeIcon size="4x" icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/michael-hrivnak-9a81aa38" aria-label="linkedIn"><FontAwesomeIcon size="4x" icon={faLinkedin}/></a>
                </div>    
            </div>
        </div>
        <style jsx>{`
        #externalLinks{
            padding-left: 1rem;
        }
        #externalLinks h4{
            font-size:1.5rem;
            letter-spacing: 0.1em;
            font-weight:inherit;
        }
        .flex{
            display:flex;
            /*flex-wrap:wrap;*/
        }
        .inline-flex{
            display: inline-flex;
        }
        a{
            margin-right:1rem;
        }
        /*contact*/
        .input{    
            margin-bottom: 10px;
        }
        .input-title{
            margin-bottom:5px;
        }
        input{
            color: #777777;
            width:100%;
            padding: 5px 0 5px 5px;
        }
        #messageBox{
            height: 100px;
            width: 100%;
            padding: 5px 0 5px 5px;
            font-family: Arial, Helvetica, sans-serif;
            color: #777777;
        }
        form{
            padding-right:5px;    
            min-width:50%;        
        }       
        form > .hidden{
            display: none;
        }
        .btn.submit{
            background-color: #467C8A;
            color: #ffffff;
            font-size: 15px;
            width: unset;
            padding: 10px 20px;
            border: 1px solid #666666;
            border-radius: 2px;    
            cursor:pointer;
        }
        .btn.submit:hover{
            background-color: rgb(53, 99, 109);
            border: 1px solid #777777;
            cursor: pointer;
        }
        `}</style>
    </section> )
}

export default Contact;