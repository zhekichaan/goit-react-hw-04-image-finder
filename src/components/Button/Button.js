import { Box } from "components/Box"
import { ButtonWraper } from "./Button.styled"

export const Button = ({onClick}) => {
    return (
        <Box display="flex">
            <ButtonWraper onClick={onClick}>Load more</ButtonWraper>
        </Box>
    )
}