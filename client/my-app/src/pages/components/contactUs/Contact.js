import React from 'react'

const Contact = () => {
  return (
    <section class="contact-section">
        <div class="contact-left">
            <form>
                <div>
                    <input type="text" name="name" placeholder="Name" class="box"/>
                </div>
                <div>
                    <input type="text" name="email" placeholder="Email" class="box"/>
                </div>
                <div>

                    <textarea name="message" placeholder="Message" class="box-msg"></textarea>
                </div>
                <button type="submit" class="btn-contact">Submit</button>
            </form>
        </div>
        <div class="contact-right">
            <img class="contact-img"
                src="{{url_for('static',filename='img/back.png')}}" alt="img"/>
        </div>

    </section>
  )
}

export default Contact
