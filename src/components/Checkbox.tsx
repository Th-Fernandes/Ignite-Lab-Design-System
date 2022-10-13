import { clsx } from 'clsx';
import * as RCheckbox from '@radix-ui/react-checkbox';

export interface CheckboxProps {

}

export function Checkbox({}:CheckboxProps) {

  return (
    <RCheckbox.Root>
      <RCheckbox.Indicator />
    </RCheckbox.Root>
  )
}