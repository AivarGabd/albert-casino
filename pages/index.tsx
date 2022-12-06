import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import {AiOutlineLogin} from 'react-icons/ai'
const link = 'https://strd-irrs01.com/c27d7c9c6'


const navbarElements = [
  {
    name: 'Слоты',
    href: ''
  },
  {
    name: 'Live Casino',
    href: ''
  },
  {
    name: 'Спорт',
    href: ''
  },
  {
    name: 'V-Спорт',
    href: ''
  },
  {
    name: 'Настольные',
    href: ''
  },
  {
    name: 'Instant Games',
    href: ''
  },
  {
    name: 'Bonus Buy',
    href: ''
  }
]



export default function Home() {
  return (
    <div>
      <Navbar isBordered variant={'floating'}>
        <Navbar.Brand>

          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" enableCursorHighlight>
          {navbarElements.map((item:any,index:any)=>(
            <Navbar.Link href={link} key={index}>{item.name}</Navbar.Link>
          ))}
         

        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href={link}>
            <AiOutlineLogin size={30} color='#2E3033' />
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href={link} color='error'>
              Регистрация
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}
