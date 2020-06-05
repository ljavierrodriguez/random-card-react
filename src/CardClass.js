import React from 'react';

class CardClass extends React.Component {

    getValue = nro => {
        switch (nro) {
            case 1: return "A";
            case 11: return "J";
            case 12: return "Q";
            case 13: return "K";
            default: return nro;
        }
    }

    render() {
        return (
            <div className="card">
                <div className={`numero ${this.props.pinta}`}>
                    {this.getValue(this.props.numero)}
                </div>
            </div>
        )
    }
}

export default CardClass;