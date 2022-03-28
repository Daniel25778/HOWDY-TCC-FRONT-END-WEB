import { Flex, Heading, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { BiTargetLock } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import StarRatings from "react-star-ratings";
import ProfilePhotoAndPatent from "../ProfilePhotoAndPatent/ProfilePhotoAndPatent";


export function Activity(){
    return(
        <>
        
           <Flex borderRadius="20px"  width="50%" mt="5%"  flexDir="column" bgColor="howdyColors.mainWhite">

                <Flex mb="2%" width="100%">
                    <Flex width="70%" gap="3%" align="center">
                        <ProfilePhotoAndPatent size='9rem'></ProfilePhotoAndPatent>
                        <Heading>Roger Guedes</Heading>
                        <Text color="howdyColors.mainBlack" opacity="60%" fontSize={['sm', 'md', 'xx-large']}>● 19 Nov</Text>
                    </Flex>
                  
                   <Flex>
                        <Flex width="50%" gap="5%" ml="6%" justify={'center'} align={'center'}>
                            <Icon w="40%" height="40%" color="howdyColors.mainBlue" fontSize="larger">
                                <BiTargetLock />
                            </Icon>
                            <Text fontSize={['sm', 'md', 'xx-large']} color="howdyColors.mainBlack" opacity="60%">Inglês</Text>
                        </Flex>
                    </Flex>
                </Flex>


                <Flex>

                    <Flex width="50%" bgColor="howdyColors.mainGreen">
                        <Image
                        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                        objectFit="cover"
                        w="100%"
                        h="20rem"
                        src="/images/Tests/image 22.png"
                        >

                        </Image>
                    </Flex>

                    <Flex  gap="10%" flexDir="column" p="2%"  width="50%" bgColor="howdyColors.mainBlue">
                        <Heading color="howdyColors.mainWhite">Present Simple</Heading>
                        <Text color="howdyColors.mainWhite">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                        </Text>
                        
                        <Flex width="20%" gap="5" borderRadius="60px" bg="howdyColors.mainYellow" align="center">
                            <Image
                                height="2.5rem"
                                src="/images/howdy-images/howdy-coin/Howdy coin.svg"
                                alt="howdy coin"
                            ></Image>
                            <Text fontWeight="semibold" color="howdyColors.brownHowdyCoin">
                                0
                            </Text>
                            <IconButton
                                variant="unstyled"
                                aria-label="Open navigation"
                                fontSize="2rem"
                                bg="howdyColors.brownHowdyCoin"
                                borderRadius="0px 15px 15px 0px"
                                color="white"
                                icon={<Icon opacity="2" as={IoMdAdd} fontWeight="black" />}
                            />
                        </Flex>
                        <StarRatings rating={2} starRatedColor="#F2D63F" numberOfStars={5} name="rating" />
                    </Flex>

                </Flex>

           </Flex>
        

        </>
    )
}