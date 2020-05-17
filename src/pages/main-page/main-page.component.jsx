import React from 'react';

export const MainPage = () => {
    const [city, setCity] = React.useState('Boulder')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(city)
    }

    return(
        <div className='main'>
            <h1>If you need help with services, pick a location!</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Where are you?</legend>
                    <p>
                        <label>Cities</label>
                        <select id = "myList" onChange={(e) => setCity(e.target.value)}>
                            <option >Boulder</option>
                            <option >Denver</option>
                        </select>
                    </p>
                </fieldset>
                <button type="submit">Let's find some resources!</button>
            </form>
        </div>
    )
}