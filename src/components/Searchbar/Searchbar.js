import { Box } from "components/Box";
import { Component } from "react"
import styled from "styled-components";

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
                <FormWrapper class="form" onSubmit={this.handleSubmit}>
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
                </FormWrapper>
            </Box>
        )
    }
}

const FormWrapper = styled.form`
    display: flex;
    align-items: center;

    & input {
        border-radius: 0px 4px 4px 0px;
        border: none;
        height: 40px;
        width: 300px;
        font-size: 14px;
        padding-left: 8px;
        padding-right: 8px;
    }
    & button {
        background-color: #E0E0E0;
        font-size: 16px;
        border: none;
        border-radius: 4px 0px 0px 4px;
        height: 40px;
        padding-left: 12px;
        padding-right: 12px;
    }
`