import { Flex, Image, Text } from "@chakra-ui/react";

interface ListFriendsProps{
    friendName?: string;
    friendProfilePhoto?: string;
}

export default function ListFriends(props: ListFriendsProps){
    return(
        <>
        
        <Flex mb="5%" gap="5%" align="center">
            <Image
            borderRadius="100%"
            h="4rem"
            w="4rem"
            objectFit="cover"
            src={ props?.friendProfilePhoto
                ? props?.friendProfilePhoto
                : '/images/default-images/default-profile-photo.svg'
             }
            alt="profilePhoto"
            ></Image>
            <Text fontWeight="medium" fontSize ={['sm', 'medium', 'x-large']}>{props.friendName}</Text>
        </Flex>
        
        
        </>
    )
}