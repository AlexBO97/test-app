import React, { Component } from 'react'
import styles from './ModalContainer.module.scss'
import Stats from '../Stats/Stats'

export default class ModalContainer extends Component {
    render() {
        return (
            <div className={styles.modal}>
                <div className={styles.title}>Hello, {this.props.userName}</div>
                
                {this.props.isModalOpen &&
                    <Stats
                        age={this.props.age}
                        superpower={this.props.superpower}
                        color={this.props.color}
                        speed={this.props.speed}
                        isModalOpen={this.props.isModalOpen}
                    />
                } 
                
            </div>
        )
    }
}
