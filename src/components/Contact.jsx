import React from 'react'

function Contact() {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='abc' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='abc@xyz.com'/>
                </div>

                <div>
                    <label>Massage</label>
                    <input type="text" required placeholder='tell us about your quevry....' />
                </div>
                <button type="submit">Send</button>
            </form>
        </main>
    </div>
   
  )
}

export default Contact