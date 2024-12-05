import { useCallback } from "react";
import { Stack, Text, TextInput, Button, Inline, Card } from "@sanity/ui";
import { set, unset } from "sanity";

export function PinInput(props){
    const {elementProps, onChange, value = 0} = props



    const handlePress = (event) => {
        set(Math.floor(1000 + Math.random() * 9000))
    }

    return(
        <Card padding={1} >
  <Inline space={[3, 3, 6]}>
    <Text 
    {...elementProps}
        value={value}
        size={3}>
        Pin: {value}</Text>
    <Button
      fontSize={[2, 2, 3]}
      tone="critical"
      padding={[3, 3, 4]}
      text="Create"
        onClick={handlePress}
    />
  
  </Inline>
</Card>
    )
}