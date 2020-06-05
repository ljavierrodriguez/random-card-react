import React from 'react';
import CardClass from './CardClass';

class AppClass extends React.Component {
    constructor() {
        super();

        this.state = {
            cartas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            pintas: ["spades", "clubs", "hearts", "diamonds"],
            randomNumberCarta: null,
            randomNumberPinta: null,
        }
    }

    componentDidMount() {
        this.setState({
            randomNumberCarta: this.randomContent(this.state.cartas),
            randomNumberPinta: this.randomContent(this.state.pintas),
        })
    }

    randomContent = (arr = []) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    render() {
        return (
            <>
                <CardClass
                    numero={this.state.randomNumberCarta}
                    pinta={this.state.randomNumberPinta}
                />
                <CardClass
                    numero={"A"}
                    pinta={"clubs"}
                />
            </>
        )
    }
}

export default AppClass;