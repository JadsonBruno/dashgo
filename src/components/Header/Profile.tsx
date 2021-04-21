import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface IProfile {
    shouldShowProfileData: boolean;
}

export function Profile({shouldShowProfileData = true}: IProfile) {
    return (
        <Flex
            align="center"
        >
            {shouldShowProfileData === true &&
                <Box
                    mr="4"
                    textAlign="right"
                >
                    <Text>
                        Jadson Bruno
                    </Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >
                        jadsombruno2016@gmail.com
                    </Text>
                </Box>
            }

            <Avatar
                size="md"
                name="Jadson Bruno"
                src="https://github.com/jadsonbruno.png"
            />
        </Flex>
    );
}