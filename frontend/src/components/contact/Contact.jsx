import React from 'react'
// import 'contact.css'
// import styles from './contact.module.css'

const Contact = () => {
  return (
    <div>
    <div className="container">
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title" style="color: #458FF6;">Let's get in touch</h3>
          <p className="text">
            Got questions or feedback? We're all ears! Reach out to us today and let's start a conversation.
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>GLA University</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>Doc4U@gmail.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p></p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>

    <script src="app.js"></script>
    </div>
  )
}

export default Contact
