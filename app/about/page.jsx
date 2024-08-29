import Content from "../components/content"

export const metadata = {
    title: 'About | Meegan Farrell',
    description: "About Meegan Farrell",
  }
  
  export default function About() {
      return <Content fileName="Bio.md" headerText="Bio"/>
    }