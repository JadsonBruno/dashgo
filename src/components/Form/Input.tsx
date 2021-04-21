import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps
} from "@chakra-ui/react";
import {FieldError} from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from "react";

interface IInputProps extends ChakraInputProps
{
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
    {name, label, error = null, ...props},
    ref
): JSX.Element => {
    return (
        <FormControl isInvalid={!!error}>
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
              id={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
              ref={ref}
            />

            {!!error && 
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            }
        </FormControl>
    );
}

export const Input = forwardRef(InputBase);
