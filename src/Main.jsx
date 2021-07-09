import React from "react";
import Content from "./Content.jsx"

function Main() {


    const [valueEntering, modifyEnteringValue] = React.useState("")
    const [value1, changeValue] = React.useState([])

    function onInputChange(event) {

        console.log(event.target.value)

        modifyEnteringValue(event.target.value)

    }

    function onButtonClick(event) {

        changeValue((prevVal) => {
            return [...prevVal, valueEntering]
        });

        console.log(value1)

        modifyEnteringValue("");

        event.preventDefault()
    }

    return (
        <div className="card-body">
            <h5 className="card-title">Add your story here</h5>
            <p className="card-text">Type in the textbox below</p>
            <form>

                <div className="input-group">
                    <span className="input-group-text">Here</span>
                    <textarea autoFocus="true" value={valueEntering} onChange={onInputChange} className="form-control" ></textarea>
                </div>

                <br></br>

                <button className="btn btn-primary" onClick={onButtonClick}>Submit</button>

            </form>

            <br></br>


            {value1.map(post => {
                return <div className="card">
                    <div className="card-body">

                        {post}

                    </div>
                </div>
            })}


{/* The <Content /> component has to be rendered properly, hopefully post practice of the whole react module. */}
            {/* <Content valueOne={value1} /> */}






        </div>
    )
}



export default Main