import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps
{
    name: string;
    label?: string;
}

export function Input  ({name, label, ...props}: InputProps): JSX.Element
{
    return (
        <FormControl>
            {!!label &&
                <FormLabel
                htmlFor={name}
                >
                {label}
                </FormLabel>
            }
            <ChakraInput
              {...props}
              name={name}
              type="email"
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
            />
        </FormControl>
    );
}