import React from 'react';

export default class App extends React.Component{
    constructor (props){
        super(props);
    }

    render() {
        return (
            <div>
            <div class="collection">
                <a href="" class="colletion-header black-text"> <h4>Eventos</h4></a>
                <a href="https://www.facebook.com/events/603918776615154/" class="collection-item">
               {this.props.title}</a>
            </div> 
            
        </div>
        );
    }
}
