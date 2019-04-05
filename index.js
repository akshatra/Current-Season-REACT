import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
//will determine the locaiton using the app component and Season Display to display components.


class App extends React.Component{
//    constructor(props){
//        super(props);
//        this.state={ lat: null, errorMessage: '' }; //we set default value null only for the integers.
//    }    

state={ lat: null, errorMessage: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=> {
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message });
            }
        ); 
    };

    render(){ //reruns and prints the location again.
    if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>    
    }

    return <Loader/>; 
    };
};


ReactDOM.render(<App/>, document.querySelector('#root'));