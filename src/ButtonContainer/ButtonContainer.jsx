import React, { Component } from 'react'
import styles from './ButtonContainer.module.scss'
import AppContext from '../Context/AppContext';

export default class ButtonContainer extends Component {
    render() {
        return (
            <div className={styles.button} onClick={this.context.toggleModal}>Toggle Modal</div>
        )
    }
}

ButtonContainer.contextType = AppContext;
