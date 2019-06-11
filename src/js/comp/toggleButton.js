import React from 'react';
class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button type="button" onClick={e => this.props.onClick(e)} className="btn btn-primary">Primary</button>
    }
}
module.exports = ToggleButton;