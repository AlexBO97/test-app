import React, { Component } from 'react'
import styles from './ButtonContainer.module.scss'

export default class ButtonContainer extends Component {
    toggleModal = () => {
        this.props.toggleModal();
    }

    render() {
        return (
            <div className={styles.button} onClick={this.toggleModal}>Toggle Modal</div>
        )
    }
}
