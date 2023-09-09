import Planet from "./planet";

import { Fragment } from "react";
const Planets = () =>{
    return(
        <Fragment>
            <h3>Planet list</h3>
            <hr></hr>
            <Planet name= "Mercúrio"
                    description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"

        />
        </Fragment>
    )
}

export default Planets;