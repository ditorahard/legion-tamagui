import { styled, Checkbox as TamaguiCheckbox, Label, SizeTokens, XStack, YStack } from 'tamagui'
import { Check as CheckIcon,} from '@tamagui/lucide-icons'

export const Checkbox = styled(TamaguiCheckbox, {
  name: 'Checkbox',
  borderRadius:5,

  variants: {
    primary: {
      true:{
        backgroundColor: '#875bf7',
        color: '#fff'
      }
    },
    warning: {
      true: {
        backgroundColor: '#ffb020',
        color: '#000'
      },
    },
  } as const,
})


// export function CheckboxWithLabel(props: { text: string, size: SizeTokens; defaultChecked?: boolean }) {
//     const id = `checkbox-${props.size.toString().slice(1)}`
//     return (
//       <XStack w={300} ai="center" space="$4">
//         <Checkbox id={id} size={props.size} defaultChecked={props.defaultChecked}>
//           <Checkbox.Indicator>
//             <CheckIcon />
//           </Checkbox.Indicator>
//         </Checkbox>
  
//         <Label size={props.size} htmlFor={id}>
//           {props.text}
//         </Label>
//       </XStack>
//     )
//   }
  
