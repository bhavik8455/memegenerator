import React from "react";
import Text from "../components/Text";
import { Button } from "react-bootstrap";
import { useState, createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

import { useParams, useSearchParams } from "react-router-dom";


const Edit = () => {


    const [params] = useSearchParams();
    const [count, Setcount] = useState(0);
    const memeref = createRef();

    const addText = () => {
        Setcount(count + 1);

    }




    return (
        <div className="memeref">
            <div ref={memeref} style={{ width: "20rem" }}>
                <img style={{ width: "25rem", height: "25rem" }} src={params.get('url')}></img>

                {
                    Array(count).fill(0).map((e) => (
                        <Text />
                    ))
                }

            </div>
            <button class="btn btn-success" onClick={addText}  >Add Text</button>
            <Button style={{ margin: "4px" }} class="btn btn-danger"
                onClick={() => exportComponentAsJPEG(memeref)}>Save</Button>
        </div >
    );
};

export default Edit;