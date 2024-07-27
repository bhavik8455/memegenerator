import React from "react";
import MemeApi from "../memeapi/memeapi";
import { useEffect, useState } from 'react';
import Carddetails from "../components/card";



const Homepage = (props) => {
    const [data, Setdata] = useState([]);

    useEffect(() => {
        MemeApi().then((memes) => Setdata(memes.data.memes))
    }, []);



    return (
        <div className="row">
            {
                data.map((el) => (
                    <Carddetails img={el.url} title={el.name} />
                ))
            }

        </div>
    );
};

export default Homepage;