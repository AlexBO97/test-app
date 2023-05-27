import React, { Component } from 'react'
import styles from './Stats.module.scss'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    getStatsStyle = () => {
        // return this.props.isModalOpen ?
        //     styles.statsContainer :
        //     `${styles.statsContainer} ${styles.statsHidden}`
        return styles.statsContainer;
    }

    render() {
        return (
            <div className={this.getStatsStyle()}>
                <div className={styles.stats}>Age: {this.props.age}</div>
                <div className={styles.stats}>Superpower: {this.props.superpower}</div>
                <div className={styles.stats}>Color: {this.props.color}</div>
                <div className={styles.stats}>Speed: {this.props.speed}</div>
            </div>
        )
    }
}
