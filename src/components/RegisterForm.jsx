import React, {useState} from 'react';

function RegisterForm() {

    const Paddle = window.Paddle;

    const [Email, setEmail] = useState("")

    const email = (e) => {

        setEmail(e.target.value)

    }

    const handlePayment = (e) => {
        e.preventDefault();
        if(Email.length > 0){
            Paddle.Checkout.open({
                product: 567487,
                email: Email,
                successCallback: (data, err) =>{
                    console.log(data);

                    //ADD YOUR EXTRA LOGIC TO SEND TO BACKEND 
                }
            });
        } else {

            alert("Please enter an Email Address")

        }
  };





  return (
<>

<form onSubmit={handlePayment}>

  <label>
Email
    <input onChange={email} type="email" name="email" placeholder="hi@ronaldlangeveld.com" value={Email} />
  </label>
  <br/>
<input type="submit" value="Make Payment"/>

</form>


</>
  );
}

export default RegisterForm;
