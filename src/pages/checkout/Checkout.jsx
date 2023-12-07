import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/cash-on-delivery (1).png";
import PaystackPop from "@paystack/inline-js";
import Navbar from "../../components/navbar/Navbar";

const Checkout = () => {
  const navigate = useNavigate();
  // const [emoney, setEmoney] = useState(false)
  // const [cash, setCash] = useState(false)
  const [input, setInput] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [error, setError] = useState(false);
  const [uniqueArray, setUniqueArray] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  // const [amount, setAmount] = useState('')
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const emailRegEx = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

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
      name.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      address.trim() === "" ||
      city.trim() === "" ||
      country.trim() === ""
    ) {
      setError("Please fill out all fields");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_test_ffe006deaf4e9dd01c7d2bc258f09e3e5c5cacfd",
        name,
        email,
        phoneNumber,
        address,
        amount: amount * 100,
        city,
        country,
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

  // const decrement = () => {
  //     setCount(count - 1)
  // }
  // const handleSubmit = () => {
  //     if(input.trim() === ''){
  //         setError('Please fill out all fields')
  //     }
  // }
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const uniqueObjects = new Set(cartItems);
  cartItems &&
    cartItems.forEach((obj) => {
      // console.log(obj);
      // Check if the object's ID is not already in the set
      if (!uniqueObjects.has(obj.id)) {
        // console.log(uniqueArray);
        uniqueObjects.add(obj.id); // Add the ID to the set
        uniqueArray.push(obj); // Add the object to the unique array
      }
    });

  const removeItem = (id) => {
    let index = uniqueArray.findIndex((movie) => movie.id === id);
    uniqueArray.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(uniqueArray));
    location.reload();
  };
  const totalPrice = uniqueArray.reduce((total, item) => total + item.price, 0);
  const [amount, setAmount] = useState(`${+totalPrice * 100 + 1200 + 1690}`);

  return (
    <div className="text min-h-[100vh] pt-[5rem] bg-white text-black">
      <Navbar uniqueArray={uniqueArray} />
      {/* {checkout &&  <div className="alert bg-purple-800 text-white w-[50%] sticky top-20 left-[50%] -translate-x-[50%]">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your order is being processed!</span>
        </div>} */}
      {uniqueArray.length === 0 ? (
        <div className="absolute top-[45%] left-[50%] -translate-x-[50%]">
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
        <div className="ps-10">
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
                      onChange={(e) => setName(e.target.value)}
                      name=""
                      id=""
                      className="block border p-2 rounded bg-white"
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
                  name=""
                  id=""
                  className="block border p-2 rounded bg-white"
                  required
                  placeholder="1137 Williams Avenue"
                />

                <div className="flex flex-col md:flex-row gap-6 my-4">
                  <div>
                    <label htmlFor="name">Amount</label>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      name=""
                      id=""
                      className="block border p-2 rounded bg-white"
                      required
                      placeholder="1001"
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
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
                  onChange={(e) => setCountry(e.target.value)}
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
              {uniqueArray.map((element) => (
                <div>
                  <div>
                    <div className="flex rounded-lg bg-gray-200 shadow-xl p-3 items-center mt-4">
                      <div key={element.id} className="flex gap-[.7rem]">
                        <img
                          src={element.image}
                          alt=""
                          className="rounded-lg hover:scale-105 duration-1000 cursor-pointer w-[40%] md:w-[20%]"
                        />
                        <div>
                          <h2 className="pt-5">{element.title}</h2>
                          <div className="flex gap-5">
                            <p className="font-bold">#{element.price * 100}</p>
                            {/* <p><span className='font-bold'>X</span> {count}</p> */}
                          </div>
                          <button
                            onClick={() => removeItem(element.id)}
                            className="bg-red-500 p-3 mt-6 rounded text-white"
                          >
                            Remove item
                          </button>
                        </div>
                      </div>
                      {/* <div className="bg-gray-100 flex p-3 rounded">
                                    <button onClick={() => increment(element.id)}>+</button>
                                    <p className='px-3'>{count}</p>
                                    <button onClick={() => decrement(element.id)}>-</button>
                                </div> */}
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-2 justify-between mt-5">
                <p>TOTAL</p>

                <h1 className="font-bold">#{totalPrice * 100}</h1>
              </div>
              <div className="flex gap-2 justify-between my-3">
                <p>SHIPPING</p>
                <h1 className="font-bold">#1,200</h1>
              </div>
              <div className="flex gap-2 justify-between">
                <p>VAT (INCLUDED)</p>
                <h1 className="font-bold">#1,690</h1>
              </div>
              <div className="flex gap-2 justify-between my-10">
                <p> GRAND TOTAL</p>
                <h1 className="font-bold text-purple-800">
                  #{+totalPrice * 100 + 1200.0 + 1690.0}
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
    </div>
  );
};

export default Checkout;
