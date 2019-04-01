import React, {Component} from 'react';
import "../dummyWeb.css";

class Toggle extends Component{

    constructor(){
        super()
        this.state={
            showMe:false
        }
    }
    operation()
    {
        this.setState({
            showMe: true
        })
    }

    render() {
        return(
            <div>
                <button onClick={()=>this.operation()}>Menu</button>
                {
                    this.state.showMe?
                        <div>
                            <ul>
                                <a href=""> <li>Menu</li></a>
                                <a href=""> <li>Menu</li></a>
                                <a href=""> <li>Menu</li></a>
                            </ul>
                        </div>
                        :null
                }
            </div>
        )
    }

}

export default Toggle;

