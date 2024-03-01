import { Wrapper } from "./Dashboard.styled";

const Dashboard = ({children, $gap}) => {
    return (
        <Wrapper $gap={$gap}>
            {children}
       </Wrapper>
   )
}

export default Dashboard;