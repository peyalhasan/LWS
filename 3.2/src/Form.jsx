import React, { useState } from 'react';

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}



const Form = () => {

    // Mandatory data State
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);

    // Visual State theke paoa final state
    const [status, setStatus] = useState('typing')

    if (status === 'success') return <><h1>That's right!</h1> <hr /> </>

    // handlers

    const handlTextChange =(e)=>{
        setError(null);
        setAnswer(e.target.value)
    }

     async function handleSubmit (e){
        e.preventDefault();
        setStatus('submitting')
        try{
            await submitForm(answer);
            setStatus('succss')
        }catch(err){
            setStatus('typing');
            setError(err.message)
        }
    }

    return (
        <div>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form onSubmit={handleSubmit} >
                <textarea value={answer}  onChange={handlTextChange} disabled={status==='submitting'} ></textarea>
                <br />
                <button disabled={answer.length===0 || status === 'submitting' }
                >Submit</button>
                { status === 'submitting' && <p >Loading...</p>}
                { error && <p className='Error'> {error} </p>}
            </form>
        </div>
    );
};

export default Form;