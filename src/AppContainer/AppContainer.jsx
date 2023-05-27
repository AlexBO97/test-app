import React, { Component } from 'react'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import ModalContainer from '../ModalContainer/ModalContainer'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "Alex",
            age: 25,
            superpower: "Flight",
            color: "Blue",
            speed: "150kph",

            isModalOpen: false,
        }
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    render() {
        return (
            <div>
                <ButtonContainer
                    toggleModal={this.toggleModal}
                />
                <ModalContainer
                    userName={this.state.userName}
                    age={this.state.age}
                    superpower={this.state.superpower}
                    color={this.state.color}
                    speed={this.state.speed}
                    isModalOpen={this.state.isModalOpen}
                />
            </div>
        )
    }
}
