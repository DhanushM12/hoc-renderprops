import React from 'react';

const WithCounter = Component => class HOC extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }
    update = type => {
        if(type === "Inc"){
            this.setState(({count}) => ({count : count+1}));
        }
        else if(type === "Dec"){
            this.setState(({count}) => ({count : count-1}));
        }
    }
    render(){
        return <Component 
        {...this.state}
        {...this.props}
        update = {this.update}
        />

    }
}
export default WithCounter;