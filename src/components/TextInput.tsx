import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode,
}

function TextInputRoot({children}:TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 px-3  rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 transition-shadow'>
      {children}
    </div>
  )
}

TextInputRoot.displayName = "TextInput.Root"

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({children}:TextInputIconProps) {
  return (
    <Slot className='text-gray-200 w-6 h-6'>
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = "TextInput.Icon"

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

function TextInputInput(props:TextInputInputProps) {

  return (
    <input 
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none py-4 "
      {...props}
    />
  )
}

TextInputInput.displayName = "TextInput.Input"

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}