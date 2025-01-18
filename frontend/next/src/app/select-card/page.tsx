import { HStack } from "@chakra-ui/react"
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card"

export default function Demo() {
  return (
    <RadioCardRoot defaultValue="next">
      <RadioCardLabel>Select framework</RadioCardLabel>
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCardItem
            label={item.title}
            description={item.description}
            key={item.value}
            value={item.value}
          />
        ))}
      </HStack>
    </RadioCardRoot>
  )
}

const items = [
  { value: "next", title: "Next.js", description: "Best for apps" },
  { value: "vite", title: "Vite", description: "Best for SPAs" },
  { value: "astro", title: "Astro", description: "Best for static sites" },
]
