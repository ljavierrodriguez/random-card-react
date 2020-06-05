import React, { useEffect } from 'react';


const Card = ({ numero, pinta }) => {

    useEffect(() => {
        // componendDidMount
        console.log("Card Rendered")
    }, [])

    const getValue = nro => {
        switch (nro) {
            case 1: return "A";
            case 11: return "J";
            case 12: return "Q";
            case 13: return "K";
            default: return nro;
        }
    }

    return (
        <div className="card">
            <div className={`numero ${pinta}`}>
                {getValue(numero)}
            </div>
        </div>
    )
}

export default Card;