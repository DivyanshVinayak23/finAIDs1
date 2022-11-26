import React, { Component } from 'react'

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userdata:"",
            fname: "dsgsdg",
            email: "",
        }
        //this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("http://localhost:5000/userData", {
            method: 'POST',
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token:window.localStorage.getItem("token"),
            }),

        })
            .then(res => res.json())
            .then((data) => {
                console.log(data, "userdata")
                this.setState({userdata:data.data})
            })
    }
    render() {
        //console.log(this.state.fname)
        return (
            <div >
                Name:<h1>{this.state.userdata.fname}</h1>
                Email:<h1>{this.state.userdata.email}</h1>
            </div >

        )
    }
}
