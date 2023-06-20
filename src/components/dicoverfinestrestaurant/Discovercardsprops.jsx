import React from 'react'

const Discovercardsprops = (props) => {
  return (
    <>
    <div className=" min-w-max lg:min-w-fit">
        <div className="card bg-base-100  w-[95%] hover:shadow-[#BC172F]">
        <div className="">
            <img src={props.image} alt="" />
          </div>

          <div className='font-medium pt-2'>
            <h1>{props.text}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Discovercardsprops