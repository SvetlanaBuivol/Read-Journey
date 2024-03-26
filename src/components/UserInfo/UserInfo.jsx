import { useSelector } from "react-redux";
import { Box, UserAvatar, UserName } from "./UserInfo.styled";
import { getUserName } from "../../redux/auth/authSelectors";

const UserInfo = () => {
    const name = useSelector(getUserName)
    const firstLetter = name[0]

    return (
        <Box>
            <UserAvatar>{firstLetter}</UserAvatar>
            <UserName>{name}</UserName>
        </Box>
    )
}

export default UserInfo;