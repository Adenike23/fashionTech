import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/cash-on-delivery (1).png";
import PaystackPop from "@paystack/inline-js";
import CartContext from "../../context/CartContext";
import { CurrencyFormatter } from "../../components/CurrencyFormatter";
import { motion } from "framer-motion";

const Checkout = () => {
  const navigate = useNavigate();
  // const [emoney, setEmoney] = useState(false)
  // const [cash, setCash] = useState(false)
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: '',
  })

  const cartCtx = useContext(CartContext)
  
  const handleInputChange = (identifier, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))
  }

  const totalPrice = cartCtx.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const amount = `${+totalPrice * 100 + 1200 + 1690}`

  // const payOnDelivery = () =>{
  //     // alert('Your order is being processed!')
  //     setCheckout(true)
  //     localStorage.clear()

  //     setTimeout(() => {
  //         // setCheckout(true)
  //         navigate('/')
  //       }, 3000);
  // }
  const payWithPaystack = (e) => {
    e.preventDefault();
    if (
      values.name.trim() === "" ||
      values.email.trim() === "" ||
      values.phoneNumber.trim() === "" ||
      values.address.trim() === "" ||
      values.city.trim() === "" ||
      values.country.trim() === ""
    ) {
      setError("Please fill out all fields");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_test_ffe006deaf4e9dd01c7d2bc258f09e3e5c5cacfd",
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        address: values.address,
        amount: amount * 100,
        city: values.city,
        country: values.country,
        onSuccess(transaction) {
          let message = `Payment complete! Reference ${transaction.reference}`;
          alert(message);
          localStorage.clear();
          navigate("/");
        },
        oncancel() {
          alert("You have canceled the transaction");
        },
      });
    }
  };

  // const updateEMoney = () => {
  //     payWithPaystack()
  //     setCash(false)
  // }
  // const updateCash = () => {
  //     setCash(true)
  // }

  // const increment = (id) => {
  //     uniqueArray.map(cloth => {
  //         if(cloth.id === id) {
  //             // console.log(uniqueArray);
  //             console.log(cloth.id);
  //          setCount(count + 1)
  //         }
  //     })
  // }

  const handleAddItem = (item) => {
    cartCtx.addItem(item)
  }

  const handleRemoveItem = (id) => {
    cartCtx.removeItem(id)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1.5 }} 
      exit={{y: '-100vh', transition: 'easeInOut'}}
      className="text min-h-[100vh] pt-[5rem] bg-white text-black">
      {cartCtx.items.length === 0 ? (
        <div className="absolute top-[35%] left-[50%] -translate-x-[50%]">
          <p className="font-bold text-2xl">
            Your Cart is empty, Go back to shop some items...
          </p>
          <button
            onClick={() => navigate("/")}
            className="btn bg-purple-600 mt-5 text-amber-300 border-none"
          >
            Go to home page
          </button>
        </div>
      ) : (
        <div className="px-5">
          <p className="text-amber-300 font-bold text-2xl md:pt-[1rem]">
            CHECKOUT
          </p>
          {error && (
            <div className="text-red-900 rounded text-lg bg-red-200 text-center max-w-xs mt-2">
              {error}
            </div>
          )}
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <div className="">
              <h1 className="mb-5 md:mt-6 text-purple-800">BILLING ADDRESS</h1>

              <form>
                <div className="flex flex-col md:flex-row gap-6 mb-3">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      name=""
                      id=""
                      className="block border p-2 rounded bg-white"
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      name=""
                      id=""
                      className="block border p-2 rounded bg-white"
                      required
                      placeholder="johndoe@mail.com"
                    />
                  </div>
                </div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  name=""
                  id=""
                  className="block border p-2 rounded bg-white"
                  required
                  placeholder="+123456789"
                />

                <p className="mt-[4rem] mb-5 text-purple-800">SHIPPING INFO</p>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  name=""
                  id=""
                  className="block border p-2 rounded bg-white"
                  required
                  placeholder="1137 Williams Avenue"
                />

                <div className="flex flex-col md:flex-row gap-6 my-4">
                  <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                      type="text"
                      value={amount}
                      name=""
                      id=""
                      className="block border p-2 rounded bg-white"
                      required
                      readOnly
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      name=""
                      id=""
                      className="block border bg-white p-2 rounded"
                      required
                      placeholder="New York"
                    />
                  </div>
                </div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  name=""
                  id=""
                  className="block border bg-white p-2 rounded"
                  required
                  placeholder="United States"
                />

                {/* <p className='mt-[4rem] mb-5 text-purple-800'>PAYMENT DETAILS</p>
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <p className='border border-gray-300 w-[60%] md:w-[40%] p-2 rounded mt-4'><input type="radio" name="radio" id="" className='mx-2 cursor-pointer' onClick={updateEMoney} required/>e-Money</p>
                        <p className='border border-gray-300 w-[60%] md:w-[40%] p-2 rounded my-4'><input type="radio" name="radio" id="" className='mx-2 cursor-pointer' onClick={updateCash} required/>Cash on Delivery</p> */}

                {/* {emoney && <div className="flex flex-col md:flex-row gap-6">
                            <div>
                                <label htmlFor="eMoneyNumber">e-Money Number</label>
                                <input type="number" name="" id="" className='block border bg-white p-2 rounded' placeholder='1001'/>
                            </div>
                            <div>
                                <label htmlFor="eMoneyPin">e-Money Pin</label>
                                <input type="text" name="" id="" className='block border bg-white p-2 rounded' placeholder='New York'/>
                            </div>
                        </div>} */}

                {/* {cash && <div className="flex items-center flex-row gap-6 w-[80%] md:w-[50%]">
                            <img src={image} className='w-[20%] md:w-[9%] h-[20%]'/>
                            <p className='text-sm text-purple-800'>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so your order will not be cancelled.</p>
                        </div>} */}
                {/* <button onClick={payWithPaystack} className='bg-purple-800 font-bold text-sm px-6 py-3 my-5 rounded shadow-lg text-white hover:scale-110 duration-1000 w-[80%] md:[40%] lg:w-[60%]'>CONTINUE & PAY</button> */}
              </form>
            </div>

            <div className="bg-gray-100 px-2 md:px-4 rounded py-10 my-2">
              <p>SUMMARY</p>
              {cartCtx.items.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="flex rounded-lg bg-gray-200 shadow-xl p-3 items-center mt-4">
                      <div className="flex gap-[.7rem]">
                        <img
                          src={item.image}
                          alt=""
                          className="rounded-lg hover:scale-105 duration-1000 cursor-pointer w-[40%] md:w-[20%]"
                        />
                        <div className="md:flex items-center gap-10">
                          <div>
                          <h2 className="pt-5">{item.title.length > 15 ? item.title.substring(0,12) + '...' : item.title}</h2>
                          <div className="flex gap-5">
                            <p className="font-bold">{CurrencyFormatter.format(item.price * 100)}</p>
                          </div>
                          </div>
                          <p className="flex gap-[1rem] items-center mt-4 md:mt-0">
                            <button onClick={() => handleRemoveItem(item.id)} className="cursor-pointer w-[1.5rem] h-[1.5rem] font-lg rounded-lg bg-zinc-400 text-white flex items-center justify-center">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleAddItem(item)} className="cursor-pointer w-[1.5rem] h-[1.5rem] font-lg rounded-lg bg-zinc-400 text-white flex items-center justify-center">+</button>
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-2 justify-between mt-5">
                <p>TOTAL</p>

                <h1 className="font-bold">{CurrencyFormatter.format(totalPrice * 100)}</h1>
              </div>
              <div className="flex gap-2 justify-between my-3">
                <p>SHIPPING</p>
                <h1 className="font-bold">{CurrencyFormatter.format(1200)}</h1>
              </div>
              <div className="flex gap-2 justify-between">
                <p>VAT (INCLUDED)</p>
                <h1 className="font-bold">{CurrencyFormatter.format(1690)}</h1>
              </div>
              <div className="flex gap-2 justify-between my-10">
                <p> GRAND TOTAL</p>
                <h1 className="font-bold text-purple-800">
                  {CurrencyFormatter.format(+totalPrice * 100 + 1200.0 + 1690.0)}
                </h1>
              </div>

              <button
                onClick={payWithPaystack}
                className="bg-purple-800 text-sm px-6 py-3 rounded shadow-lg text-white hover:scale-110 duration-1000 w-[80%] md:[70%] lg:w-[40%] relative left-[50%] -translate-x-[50%]"
              >
                CONTINUE & PAY
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Checkout;
