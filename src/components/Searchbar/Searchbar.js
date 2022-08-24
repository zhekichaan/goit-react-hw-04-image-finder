import { Component } from "react"

export class Searchbar extends Component {
    state = {
        query: "",
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
        this.setState({
            query: ""
        })
    }

    render() {
        return (
            <header>
                <form class="form" onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>
                    <input
                        name="query"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={this.state.query} 
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
}