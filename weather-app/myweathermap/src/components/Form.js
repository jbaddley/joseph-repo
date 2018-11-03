import React from "react";

const Form = props => (
    <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="city..." />
                <input type="text" name="country" placeholder="Country... " />
                <button>Get Weather</button>
            </form>
            //need to use props so that the button calls function
)

export default Form;