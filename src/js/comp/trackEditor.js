import './trackeditor.scss';
import colors from './colorlist';

import React from 'react';
const track = {
    numberOfSegments: 13,
    segmentIndices: [1, 1, 6, 2, 4, 6, 3, 4, 8, 4, 3, 2, 1]
};

class TrackRowItem extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const itemStyle = {
            backgroundColor: colors[this.props.index],
        };
        return <li className={this.props.highlight ? 'highlight' : ''} style={itemStyle}></li>
    }
}

class TrackRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const items = track.segmentIndices.map((x, i) => <TrackRowItem highlight={i == this.props.step?'true':''} key={i.toString()} index={x.toString()} />);
        return <ul className="trackDesigner-element">
            {items}
        </ul>
    }
}

class TrackEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log('initializing trackEditor');
    }

    render() {
        return (
            <section className="editor-border flex-container" id="trackEditor">
                <div className="flex-item">
                    <h2 className="editor-title"><span className="minimize-button" data-target="trackEditor">&nbsp;</span></h2>
                </div>
                <div className="ms-grid flex-item">
                    <div className="ms-row">
                        <div className="col-1-1">
                            <div className="trackDesigner" id="trackDesigner" data-win-control="uj.UI.trackDesigner">
                                <TrackRow step="0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = TrackEditor;
