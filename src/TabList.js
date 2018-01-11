import React, { Component } from 'react';

class TabList extends Component {


    render() {
        return (
            <ul>
                {
                    this.props.tab.map((el, i) => {
                        return (
                            <li key={i}>{el}<button onClick={() => this.props.delete(i)}>{i}</button></li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default TabList;