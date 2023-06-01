import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        number: '',
        name: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {number, name} = this.state;
        return(
            <form>
                <label htmlFor="number">Course Number</label>
                <input 
                    type="text"
                    name="number"
                    id="number"
                    value={number}
                    onChange={this.handleChange} />
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}
export default Form;