import React from 'react'

const Main = () => {
  return (
    <section class="hero-section">
        <div class="left">
            <h1>Track Your <br /><span>Attendance</span></h1>
            <p>
                This web application is a smart automation-based portal to track
                students' mobility and to help in remote monitoring via the camera
                feed transmit method, crafted under the laws and guidelines,of the
                school security system.
            </p>
            {/* <!-- <image src="{{url_for('static',filename='img/shape3.svg')}}" alt="img" class="vector3" /> --> */}

            {/* <!-- <submit type="button" class="btn" a href="{{url_for('register')}}">
                Let's Go <i class="fa-solid fa-arrow-right-long"></i>
            </button> --> */}
            <a class ="btn" href="{{url_for('option')}}" >Register Here <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div class="right">
            <img src="{{url_for('static',filename='img/20945183-removebg-preview.png')}}"   alt="img" />
        </div>
        {/* <!-- <image src="{{url_for('static',filename='img/shape4.svg')}}" alt="img" class="vector4" /> --> */}
    </section>
  )
}

export default Main
