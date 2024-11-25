import Button from "../src/components/Button/Button";
import Text from "../src/components/Text/Text";

export default function Home() {
  return (
    <div>
      <Text>H-1</Text>
      <Text tag="h2">H-2</Text>
      <Text tag="h3">H-3</Text>
      <Text tag="h4">H-4</Text>
      <Text tag="p">Paragraph</Text>
      <Button label="Click me" />
      <Button label="Click me" primary={false} />
    </div>
  )
}
