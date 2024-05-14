import React from 'react'
import res1 from '../img/res1.jpg'
import res2 from '../img/res2.jpg'
import res3 from '../img/res3.jpg'
import res4 from '../img/res4.jpg'
import res5 from '../img/res5.jpg'
import res6 from '../img/res6.jpg'
import res7 from '../img/res7.jpg'
import res8 from '../img/res8.jpg'
import './Body.css'

const Bodyy = () => {

    let items = [
        {
            img: res1,
            landmark: "Chennai,india",
            away:"50 Kilometer away",
            meter: "7-12",
            fee: "$30 - Night"
        },
        {
            img: res2,
            landmark: "Chennai,india",
            away:"90 Kilometer away",
            meter: "7-12",
            fee: "$70 - Night"
        },
        {
            img: res3,
            landmark: "Chennai,india",
            away:"50 Kilometer away",
            meter: "7-12",
            fee: "$20 - Night"
        },
        {
            img: res4,
            landmark: "Chennai,india",
            away:"50 Kilometer away",
            meter: "7-12",
            fee: "$30 - Night"
        },
        {
            img: res5,
            landmark: "Chennai,india",
            away:"50 Kilometer away",
            meter: "7-12",
            fee: "$30 - Night"
        },
        {
            img: res6,
            landmark: "Chennai,india",
            away:"50 Kilometer away",
            meter: "7-12",
            fee: "$30 - Night"
        },
        {
            img: res7,
            landmark: "Chennai,india",
            away:"50 Kilometer away",
            meter: "7-12",
            fee: "$30 - Night"
        },
        {
            img: res8,
            landmark: "Chennai,india",
            away:"50 Kilometer away",
            meter: "7-12",
            fee: "$30 - Night"
        },
       

    ]
    return (
        <div className="container w-full  flex   flex-wrap  m-0 p-1">
            {items.map((a, i) => (
                <div className="box-1 flex flex-col justify-center items-center sm:w-1/4 w-1/2  ">
                    <div className="box w-full p-2  flex flex-col justify-center overflow-hidden  " key={i}>
                        <img src={a.img} className='w-full h-[200px] h   rounded' alt="" srcset="" />
                        <div className="details w-full h-fit">
                            <p className='f font-bold'>{a.landmark} </p>
                            <small className='f font-semibold'>{a.away}</small><br />
                            <small className='f font-semibold'>{a.meter}</small><br />  
                            <small className='f font-semibold'>{a.fee}</small>
                           
                        </div>
                       

                    </div>
                </div>
            ))}

        </div>
    )
}

export default Bodyy



