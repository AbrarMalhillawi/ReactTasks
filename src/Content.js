
import React from 'react';
import './Header.css';


class Content extends React.Component{

    state={
        name:"Haneen",
        age:31
    }

    change = () =>{
       this.setState ({
        name:"Abrar"
       
       })


     
    }
    

    render(){
        return ( 
                <>

            <p className='text'>
                Hello Here is Aqaba Cohort ❤
            </p>
            <button className='text' onClick={this.change}>change state</button>
            <p>{this.state.name}</p>
            <p>{this.props.test}</p>
       
            </>
        )

    }
    }
    
 export default  Content;