import Button from "../src/components/Button/Button";
import Text from "../src/components/Text/Text";

export default function Home() {
  return (
    <div className="m-8">
      <Text>Heading-1</Text>
      <Text tag="h2">Heading-2</Text>
      <Text tag="h3">Heading-3</Text>
      <Text tag="h4">Heading-4</Text>
      <Text tag="p">Paragraph</Text>
      <div className="space-x-2">
        <Button label="Click me" />
        <Button label="Click me" primary={false} />
      </div>
    </div>
  )
}
