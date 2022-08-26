import { Box } from "components/Box"
import { ThreeDots } from "react-loader-spinner"

export const Loader = () => {
    return (
        <Box display="flex" justifyContent="center">
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#6B97E0" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </Box>
    )
}