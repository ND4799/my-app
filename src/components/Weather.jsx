import React from 'react';
import Style from './Weather.module.css';
/* class Weather extends react.Component {
    render() {
        return (
            <h2 className={Style.title}>
                类组件里面有this，有state，有生命周期
            </h2>
        )
    }
} */
const Weather = () => {
    return (
        <h2 className={Style.title} id='weather'>
            函数组件里面没有this，没有state，没有生命周期，以后可以用hooks实现！
        </h2>
    )
};

export default Weather;