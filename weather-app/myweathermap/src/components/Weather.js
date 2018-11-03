import React from "react";
// since this component doesnt use "state", we dont need a class, so we do a function instead. keep in mind that keyword "this" wont work if there is no class, so we need to fix that by passing an aurgument of props
//we can also remove curly brace too
//if only returning one aurgument, then you can get rid of parenthesis
const Weather = props => (
    <div>
                {/* the pure text will show when we havent selected a city so we need to do some stuff using conditional operators
                Location: { this.props.city}, { this.props.country} */}

                {props.city && props.country && <p>Location: { props.city}, { props.country}</p>}
                {props.temperature && <p>Temperature: { props.temperature} </p>}
                {props.humidity && <p>Humidity: { props.humidity}</p>}
                {props.description && <p>Conditions: { props.description}</p>}
                {props.error &&<p>{props.error}</p>}
            </div>
)

export default Weather;