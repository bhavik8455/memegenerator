import React, { useState } from "react";
import Draggable from "react-draggable";



const Text = (props) => {
    const [editMode, SeteditMode] = useState(false);
    const [val, SetVal] = useState("Double click to Edit");


    return (
        <Draggable>
            {
                editMode ? (<input style={{ border: "unset" }} onDoubleClick={(e) => SeteditMode(false)}
                    value={val} onChange={(e) => SetVal(e.target.value)} />)
                    : (<h1 onDoubleClick={(e) => SeteditMode(true)}>{val}</h1>)
            }

        </Draggable>
    );
};

export default Text;