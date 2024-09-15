import React, { useEffect } from 'react';

const RazorpayForm = ({fullName,email,phone}) => {
    useEffect(() => {
        // Load Razorpay script dynamically
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    
        // Cleanup function to remove the script when component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  const handlePayment = async () => {
    //e.preventDefault();
    console.log("submit paiasa");
    const options = {
      key: "rzp_test_oFBRvJdr2VSue5",
      //WAGtKbCkWvevlDQMS4506Cn6
      amount: 100, // Amount in paise
      currency: 'INR',
      name: 'Next Toppers LAB',
      description: 'Test Transaction',
      image:'/assets/images/freelanceitlogo.png',
      //'https://example.com/your_logo.png',
      
      //order_id: 'order_12345',
      handler: function(response) {
        alert(response.razorpay_payment_id);
       // alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
        console.log(response);
      },
      prefill: {
        name: fullName,
        email,
        contact:phone,
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#3399cc'
       // #F37254'
      }
    };
    const razorpay = new window.Razorpay(options);
    const data=razorpay.open();
    console.log(data);
    // const rzp1 = new window.Razorpay(options);
//     razorpay.on('payment.failed', function (response){
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
// });
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default RazorpayForm;
