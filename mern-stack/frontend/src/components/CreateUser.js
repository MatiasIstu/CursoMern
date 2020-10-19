import React, { Component } from 'react'
import axios from 'axios';
export default class CreateUser extends Component {

    state={
        users: []
    }

    async   componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({users:res.data});
        console.log(this.state.users)
    }


    render() {
        return (
            <div className="row">
                    <div className="col-md-4">
                       form user
                    </div>
                    <div className="col-md-8">
                         <ul className="list-group">
                        {
                            this.state.users.map(user=> (
                            <li className="list-group-item list-group-item-action" key = {user._id}>
                                {user.username}
                            </li>)
                            )
                        }
                    </ul>
                    </div>
            </div>
        )
    }
}
