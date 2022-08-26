import { Box } from "components/Box"
import { ButtonWraper } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({onClick}) => {
    return (
        <Box display="flex">
            <ButtonWraper onClick={onClick}>Load more</ButtonWraper>
        </Box>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}