import React from 'react'
import { useRef, useState } from "react"

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.length === 10;
export default function Beforelogin() {
    const [valid, setvalid] = useState(false)
    const [names, setnames] = useState("")
    const [phones, setphones] = useState("")
    const [mails, setmails] = useState("")
    const [formInputValidty, setFormInputValidity] = useState({
        name: true,
        phone: true,
        mail: true,
    });
    const urname = useRef()
    const urphone = useRef()
    const urmail = useRef()
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredNameIsValid = !isEmpty(urname.current.value);
        const enteredPhoneIsValid = isTenChars(urphone.current.value);
        const enteredMailIsValid = !isEmpty(urmail.current.value);
        setFormInputValidity({
            name: enteredNameIsValid,
            phone: enteredPhoneIsValid,
            mail: enteredMailIsValid,
        })
        if (enteredNameIsValid && enteredPhoneIsValid && enteredMailIsValid) {
            setvalid(true)
            setnames(urname.current.value)
            setphones(urphone.current.value)
            setmails(urmail.current.value)
            urname.current.value = ""
            urphone.current.value = ""
            urmail.current.value = ""
        }
    }
    const logoutHandler = (e) => {
        e.preventDefault()
        setvalid(false)
    }
    return (
        <div>
            {valid ?
                (<form className="pt-5" onSubmit={logoutHandler}>
                    <span>You have successfully logedin, Welcome!</span>
                    <input className="ml-5" type="submit" value="Logout" />
                </form>)
                :
                (<form className="pt-5" onSubmit={submitHandler}>
                    <label htmlFor="name"> Enter Name :
                        <input data-testid="name-input" ref={urname} type="text" name="name" id="name" placeholder="Silky Priya" />
                        {!formInputValidty.name && <p>empty</p>}
                    </label>
                    <label className="ml-5 mr-5" htmlFor="phone"> Enter Number :
                        <input data-testid="phone-input" ref={urphone} type="tel" id="phone" name="phone" placeholder="9835909490" />
                        {!formInputValidty.phone && <p>empty</p>}
                    </label>
                    <label htmlFor="mail"> Enter Email :
                        <input data-testid="email-input" ref={urmail} type="email" name="mail" id="mail" placeholder="march10@gmail.com" />
                        {!formInputValidty.mail && <p data-testid="error-msg">empty</p>}
                    </label>
                    <input className="ml-5" type="submit" value="Login" />
                </form>)
            }
            {valid && (<h5 className="pt-5">
                <p>Name : <span>{names}</span></p>
                <p>Phone : <span>{phones}</span></p>
                <p>Mail : <span>{mails}</span></p>
            </h5>)}
        </div>
    )
}
