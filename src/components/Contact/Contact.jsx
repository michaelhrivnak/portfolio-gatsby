import React from 'react';

const Contact = (props) => {
   
    return (
    <section id="contact" className="text-2xl tracking-widest">
        <h1>CONTACT</h1>
        <hr/>
        <div className="w-full flex pt-3">
            <form className="text-lg inline-block tracking-normal" action="https://formspree.io/mwkpvwjv" method="POST">
                <div className="input">
                    <label className="input-title">NAME</label>
                    <input id="contactName" type="text" name="name" defaultValue="John Doe" onFocus={function(e){e.target.value=''}}/>
                </div>
                <div className="input">
                    <label className="input-title">EMAIL</label>
                    <input id="emailAddress" type="email" name="_replyto" defaultValue="example@domain.com" onFocus={function(e){e.target.value=''}}/>
                </div>
                <div className="input">
                    <label className="input-title">MESSAGE</label>
                    <textarea id="messageBox" name="message" ></textarea>
                </div>
                <input id="submit" type="submit" className="btn submit" defaultValue="SUBMIT"/>
            </form>
            <div id="externalLinks" className="w-2 pl-5">
                <label className="block">LINKS</label>                        
                <div className="inline-flex">
                    <a href="https://github.com/michaelhrivnak"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/michael-hrivnak-9a81aa38"><i className="fab fa-linkedin"></i></a>
                </div>    
            </div>
        </div>
    </section> )
}

export default Contact;