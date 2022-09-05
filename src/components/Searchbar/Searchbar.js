import { Box } from "components/Box";
import PropTypes from 'prop-types';
import { useState } from "react"
import { FormWrapper } from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setQuery(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(query)
        setQuery('')
    }

    return (
        <Box as="header" p="8px" display="flex" justifyContent="center" bg="#3f51b5">
            <FormWrapper onSubmit={handleSubmit}>
                <button type="submit">
                    <span>Search</span>
                </button>
                <input
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query} 
                    onChange={handleChange}
                />
            </FormWrapper>
        </Box>
    )

}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
} 