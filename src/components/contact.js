import React from 'react';
import emailjs from 'emailjs-com';
import { Frame, Stack } from "framer";
import { useAlert } from 'react-alert'
import '../App.scss';
import Responsive from 'react-responsive';

// Screen sizes for responsive design
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
export default function ContactUs() {
  //Email function for contact form
  const alert = useAlert()
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_kfof21m5Ry8f1KhhBfY5J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    <Desktop>
    <Frame
      background={'black'}
      height={650}
      >
      <Stack
        style={{ fontWeight: 'bold'}}
        size={300}
        gap={40}
        paddingBottom={60}
        paddingLeft={70}
        alignment="start"
        >
        <Frame background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span><span style={{color:'#00fff5'}}>Our</span> journey doesn't end here. Let's have a <span style={{color:'#00fff5'}}>chat</span>.</span></Frame>
      </Stack>
    <Frame width={650} height={400} top={175} left={350}  background="transparent">
      <form className="contact-form" onSubmit={sendEmail}>

        <div className="name-form">
          <label className="label_name">What's your name?</label>
          <input className="input_name" type="text" name="user_name" />
        </div>

        <div className="email-form">
          <label className="label_email">Email</label>
          <input className="input_email" type="email" name="user_email" />
        </div>

        <div className="message-form">
          <div><label className="label_message">Message</label></div>
          <div><textarea className="textarea_message" name="message" /></div>
          <div><input className="text_button" type="submit" value="⇨" onClick={() => {alert.show('Thanks! I have recieved your message and will get back to you in a bit.', {type: 'success'} )}}/></div>
        </div>
      </form>
    </Frame>
    </Frame>
    </Desktop>

    <Tablet>
    <Frame
      background={'black'}
      height={850}
      >
      <Stack
        style={{ fontWeight: 'bold'}}
        size={300}
        gap={40}
        paddingBottom={60}
        paddingLeft={40}
        alignment="start"
        >
        <Frame background="black" width={760} height={70} radius="5%" style={{color:'white', fontSize:60}}><span><span style={{color:'#00fff5'}}>Our</span> journey doesn't end here. Let's have a <span style={{color:'#00fff5'}}>chat</span>.</span></Frame>
      </Stack>
    <Frame width={650} height={400} top={175} left={50}  background="transparent">
      <form className="contact-form" onSubmit={sendEmail}>

        <div className="name-form">
          <label className="label_name">What's your name?</label>
          <input className="input_name" type="text" name="user_name" />
        </div>

        <div className="email-form">
          <label className="label_email">Email</label>
          <input className="input_email" type="email" name="user_email" />
        </div>

        <div className="message-form">
          <div><label className="label_message">Message</label></div>
          <div><textarea className="textarea_message" name="message" /></div>
          <div><input className="text_button" type="submit" value="⇨" onClick={() => {alert.show('Thanks! I have recieved your message and will get back to you in a bit.', {type: 'success'} )}}/></div>
        </div>
      </form>
    </Frame>
    </Frame>
    </Tablet>

    <Mobile>
    <Frame
      background={'black'}
      height={1100}
      >
      <Stack
        style={{ fontWeight: 'bold'}}
        size={300}
        gap={40}
        paddingBottom={60}
        paddingLeft={40}
        alignment="start"
        >
        <Frame background="black" width={300} height={70} radius="5%" style={{color:'white', fontSize:60}}><span><span style={{color:'#00fff5'}}>Our</span> journey doesn't end here. Let's have a <span style={{color:'#00fff5'}}>chat</span>.</span></Frame>
      </Stack>
    <Frame width={310} height={400} top={475}  background="transparent">
      <form className="contact-form" onSubmit={sendEmail}>

        <div className="name-form">
          <label className="label_name">What's your name?</label>
          <input className="input_name" type="text" name="user_name" />
        </div>

        <div className="email-form">
          <label className="label_email">Email</label>
          <input className="input_email" type="email" name="user_email" />
        </div>

        <div className="message-form">
          <div><label className="label_message">Message</label></div>
          <div><textarea className="textarea_message" name="message" /></div>
          <div><input className="text_button" type="submit" value="⇨" onClick={() => {alert.show('Thanks! I have recieved your message and will get back to you in a bit.', {type: 'success'} )}}/></div>
        </div>
      </form>
    </Frame>
    </Frame>
    </Mobile>
  </>
  );
}
