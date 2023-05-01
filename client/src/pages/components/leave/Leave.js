import React from 'react'

const Leave = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form>
        <div className="flex flex-col justify-center w-[550px] h-[620px] rounded-[7px] bg-white">
          <h1 className="text-xl font-medium text-[#6b6a6c] m-0">Leave Application</h1>
          <hr />

          <div class="form-item">
            <label for="email" id="name">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="text"
              id="name"
              required
            />
          </div>

          <div class="form-item">
            <label for="identity" id="identity">Student Id</label>
            <input
              type="text"
              placeholder="xyz121"
              name="identity"
              id="identity"
              required
            />
          </div>
          <div class="form-item">
            <label for="date" id="date">Start Date</label>
            <br/>
            <input
              type="date"
              placeholder="01/01/2000"
              name="date"
              id="date"
              required
            />
        </div>
            
            <div class="form-item">
            <label for="date" id="date">End Date</label>
            <br/>
            <input
              type="date"
              placeholder="01/01/2000"
              name="date"
              id="date"
              required
              />
          </div>
          

            <div class="form-item">
                <label for="reason" id="reason">Reason</label>
                <br/>
                <textarea
                
                placeholder="Reason for leave"
                name="reason"
                id="reason"
                required
                
                ></textarea>
                </div>

          <div class="form-item">
            <label for="psw" id="pnumber">Parent's Phone Number</label>
            <input
              type="text"
              placeholder="+91- XXXXXXXXXX "
              name="studphone"
              id="studphone"
              required
            />
          </div>
          <br />
        
            <div class="button">
               
                <a  href="{{url_for('leaves')}}" class="registerbtn">Submit</a>
            </div>
            
        </div>
    
      </form>
    </div>
  )
}

export default Leave
