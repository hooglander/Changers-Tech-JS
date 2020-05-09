import React, { Component } from 'react'

export class AddPokemon extends Component {
    state = {
        name: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPokemon(this.state.name);
        this.setState({name: ''});
    }

    onChange = (e) => {
        this.setState({name: e.target.value.toLowerCase().replace(/^\w/, c => c.toUpperCase())});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Type in Pokemon name"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Add!"
                />
            </form>
        )
    }
}

export default AddPokemon
