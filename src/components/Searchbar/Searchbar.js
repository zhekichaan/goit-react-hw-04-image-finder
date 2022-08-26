import { Box } from "components/Box";
import { Component } from "react"
import { FormWrapper } from "./Searchbar.styled";

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
            <Box as="header" p="8px" display="flex" justifyContent="center" bg="#3f51b5">
                <FormWrapper onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>
                    <input
                        name="query"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query} 
                        onChange={this.handleChange}
                    />
                </FormWrapper>
            </Box>
        )
    }
}