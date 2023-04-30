import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import classes from "../UI/Form.module.css";

function Form(props) {
    const isLoginPage = props.signUp_option;
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const usernameInputHandler = event => {
        setUsername(event.target.value)
    }
    const emailInputHandler = event => {
        setEmail(event.target.value)
    }
    const passwordInputHandler = event => {
        setPassword(event.target.value)
    }

    const formSubmissionHandler = event => {
        event.preventDefault()

        let redirectUrl = !isLoginPage ? '/login' : '/homePage';
        navigate(redirectUrl);

    }

    return (
        <div className={classes.container}>
            <div className={classes.auth_form}>
                <div className={classes.title_box}>
                    <span> {props.title} </span>
                </div>

                <form onSubmit={formSubmissionHandler}>
                    <input
                        type="hidden"
                        name="path"
                        value={props.value}
                    />
                    {!isLoginPage ? (
                        <div className={classes.auth_input}>
                            <input
                                name='username'
                                type='text'
                                placeholder='Username'
                                onChange={usernameInputHandler}
                                value={username}
                            />
                        </div>
                    ) : ''}
                    <div className={classes.auth_input}>
                        <input
                            name='email'
                            type='email'
                            placeholder='Email'
                            onChange={emailInputHandler}
                            value={email}
                        />
                    </div>
                    <div className={classes.auth_input}>
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                            onChange={passwordInputHandler}
                            value={password}
                        />
                    </div>
                    {isLoginPage ?
                        (
                            <a className={classes.change_password_option}>Forgot password?</a>
                        ) : ''
                    }

                    <div className={classes.auth_button}>
                        <button type='submit'>
                            {isLoginPage ? 'LOGIN' : 'SIGN UP'}
                        </button>
                    </div>
                    {isLoginPage ?
                        (
                            <div className={classes.auth_option}>
                                <span>
                                    Don't have an account? <a className={classes.auth_option_link} href={'http://localhost:3000/signUp'}>Sign Up</a>
                                </span>
                            </div>
                        ):
                        (
                            <div className={classes.auth_option}>
                                <span>
                                    Already have an account? <a className={classes.auth_option_link} href={'http://localhost:3000/login'}>Login</a>
                                </span>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default Form;