import { Wrapper } from "./Dashboard.styled";

const Dashboard = ({children, $gap, $padding}) => {
    return (
        <Wrapper $gap={$gap} $padding={$padding}>
            {children}
       </Wrapper>
   )
}

export default Dashboard;