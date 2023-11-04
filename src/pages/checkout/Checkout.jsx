import React, { useState } from 'react'
import image3 from '../../assets/images/jewelry.webp'
const Checkout = () => {
    // console.log(location);
    const [emoney, setEmoney] = useState(true)

    const hideEMoney = () => {
        setEmoney(false)
    }
    const showEMoney = () => {
        setEmoney(true)
    }


  return (
    <div className='p-10'>
        <p className='text-amber-300 font-bold text-2xl'>CHECKOUT</p>
        <div className='flex gap-[15rem] items-center'>
            <div className=''>
                <h1 className='mb-5 mt-12 text-purple-800'>BILLING ADDRESS</h1>
                <form action="">
                    <div className="flex gap-6 mb-3">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='John Doe' required/>
                        </div>
                        <div>
                            <label htmlFor="name">Email</label>
                            <input type="email" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='johndoe@mail.com' required/>
                        </div>
                    </div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='+123456789' required/>

                    <p className='mt-[4rem] mb-5 text-purple-800'>SHIPPING INFO</p>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='1137 Williams Avenue' required/>
                            <div className="flex gap-6 my-4">
                            <div>
                                <label htmlFor="name">ZIP Code</label>
                                <input type="number" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='1001' required/>
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <input type="text" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='New York' required/>
                            </div>
                        </div>
                            <label htmlFor="country">Country</label>
                            <input type="text" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='United States' required/>


                    <p className='mt-[4rem] mb-5 text-purple-800'>PAYMENT DETAILS</p>
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <p className='border border-gray-300 w-[40%] p-2 rounded mt-4'><input type="radio" name="radio" id=""  className='mx-2' onClick={showEMoney}/>e-Money</p>
                        <p className='border border-gray-300 w-[40%] p-2 rounded my-4'><input type="radio" name="radio" id="" className='mx-2' onClick={hideEMoney}/>Cash on Delivery</p>
                            {emoney && <div className="flex gap-6">
                            <div>
                                <label htmlFor="eMoneyNumber">e-Money Number</label>
                                <input type="number" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='1001'/>
                            </div>
                            <div>
                                <label htmlFor="eMoneyPin">e-Money Pin</label>
                                <input type="text" name="" id="" className='block border border-gray-400 p-2 rounded' placeholder='New York'/>
                            </div>
                        </div>}
                </form>
            </div>


            <div className='bg-gray-100 px-4 rounded py-10'>
                <p>SUMMARY</p>
                <div className="flex rounded-lg bg-gray-200 shadow-xl p-3 items-center mt-4">
                    <div className="flex gap-[.7rem]">
                        <img src={image3} alt="" className='rounded-lg hover:scale-105 duration-1000 cursor-pointer w-[20%]'/>
                            <div>
                                <h2 className="pt-5">lorem5</h2>
                                <p>$122</p>
                            </div>
                    </div>
                    <p>x2</p>
                </div>
                <div className="flex rounded-lg bg-gray-200 shadow-xl p-3 items-center my-2">
                    <div className="flex gap-[.7rem]">
                        <img src={image3} alt="" className='rounded-lg hover:scale-105 duration-1000 cursor-pointer w-[20%]'/>
                            <div>
                                <h2 className="pt-5">lorem5</h2>
                                <p>$122</p>
                            </div>
                    </div>
                    <p>x2</p>
                </div>
                <div className="flex rounded-lg bg-gray-200 shadow-xl p-3 items-center my-2">
                    <div className="flex gap-[.7rem]">
                        <img src={image3} alt="" className='rounded-lg hover:scale-105 duration-1000 cursor-pointer w-[20%]'/>
                            <div>
                                <h2 className="pt-5">lorem5</h2>
                                <p>$122</p>
                            </div>
                    </div>
                    <p>x2</p>
                </div>
                <div className="flex gap-2 justify-between mt-5">
                    <p>TOTAL</p>
                    <h1 className='font-bold'>$5,432</h1>
                </div>
                <div className="flex gap-2 justify-between my-3">
                    <p>SHIPPING</p>
                    <h1 className='font-bold'>$50</h1>
                </div>
                <div className="flex gap-2 justify-between">
                    <p>VAT (INCLUDED)</p>
                    <h1 className='font-bold'>$1,023</h1>
                </div>
                <div className="flex gap-2 justify-between my-10">
                    <p> GRAND TOTAL</p>
                    <h1 className='font-bold text-purple-800'>$6,453</h1>
                </div>  

                <button className='bg-purple-800 text-sm px-6 py-3 rounded shadow-lg text-white hover:scale-110 duration-1000 w-[40%] relative left-[50%] -translate-x-[50%]'>CONTINUE & PAY</button>
            </div>
        </div>
    </div>
  )
}

export default Checkout