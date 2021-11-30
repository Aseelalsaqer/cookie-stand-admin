import React from 'react'

export default function CreateForm(props) {
    
    return (
        <div >
            <form className="flex flex-col items-center justify-center h-40 bg-green-300 " onSubmit={props.formHandle}>
          <legend>Cookie Stand Admin</legend>
          <div className ="inline-flex">
          <label className="object-left pr-4">Location</label>
          <input className="w-72 " name = "loc" type="text"></input>
          </div>
          <div className="flex justify-center py-5 text-xs ">
            <div className="grid justify-items-start ">
              <label className="pr-10">Min. Customer per hour</label>
              <input className="w-24 " name = "min"  type="number"></input>
            </div>
            <div className="grid justify-items-start">
            <label className="pr-10">Max. Customer per hour</label>
            <input className="w-24 pl-7" name = "max" type="number"></input>
            </div>
            <div className="grid justify-items-start">
            <label className="pr-10">Average Cookie per Sale</label>
            <input className="w-24 pl-3 " name = "avg" type="number" step="0.1"></input>
            </div>
            <button className="w-3/12 pr-6 bg-green-500 " type="submit" >Create</button>
          </div>

          
        </form>
        </div>
    )
}
