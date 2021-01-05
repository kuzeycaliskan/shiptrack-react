import GoogleMapReact from 'google-map-react';
import React from "react";

class Maps extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        const AnyReactComponent = ({ text }) => <div>{text}</div>;
        return(
            <div style={{ height: '67vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBogH07PX4MlypwByPDI4VJY7ZsUrO5Ow8" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Maps;