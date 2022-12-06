import { Navbar, Button, Link, Text, Card, Radio, Badge } from "@nextui-org/react";
import { AiOutlineLogin } from 'react-icons/ai'
import { MainLogo } from "./MainLogo";
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

const textArray = [
  'круглосуточный доступ на сайт в обход блокировки;',
  'пополнение счета и быстрый вывод;',
  'участие в акциях, онлайн турнирах, лотереях;',
  'ставки на реальные деньги и бонусы;',
  'живое казино через видеотрансляции;',
  'участие в программе лояльности.',
]



export default function Home() {
  return (
    <div>
      <Navbar isBordered variant={'floating'}>
        <Navbar.Brand>

          <Link href={link}>
            <MainLogo />
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" enableCursorHighlight>
          {navbarElements.map((item: any, index: any) => (
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
      <div style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}>
        <Card css={{ mw: "500px" }}>
          <Card.Body>
            <article>
              <Text h1 css={{
                lineHeight: 'normal'
              }}>Актуальное зеркало <span style={{ color: '#eb273f' }}>Starda</span></Text>
            </article>
            <Text h4>
              <Link block isExternal href={link} color="secondary">Перейти на сайт казино</Link>
            </Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{
        width: '100vw',
        textAlign: 'center'
      }}>
        <div style={{
          margin: 'auto',
          maxWidth: '800px',
          textAlign: 'left'
        }}>
          <article>
            <b>Starda Casino</b> – яркий пример современной игровой площадки, идеально подходящей для всех категорий азартных пользователей. Сайт презентовали в 2021 году, но несмотря на относительную молодость, он уже успел завоевать популярность и даже потеснить некоторых старожилов. Такой феномен легко объяснить подходом руководящей команды. В клубе работает щедрая бонусная программа для новичков и постоянных клиентов, разыгрываются ценные призы, проводятся акции и онлайн турниры. Компания ценит каждого клиента, поэтому делает персональные выгодные предложения зарегистрированным игрокам. Все клиенты могут рассчитывать на денежные подарки в день рождения, бонус коды, кэшбэк и призовые фриспины за активные действия.
          </article>
          <br />
          <article>
            <b>Важное преимущество Старда казино</b> – наличие лицензии Кюрасао. Этот документ подтверждает законность работы и гарантирует прозрачность взаиморасчетов. За деятельностью клуба следят независимые аудиторы, для которых в приоритете интересы клиентов. Каждый совершеннолетний посетитель может делать ставки на реальные деньги и заказывать быстрый вывод выигрыша.
            <Text h4>Зеркальный сайт для обхода блокировок</Text>
            <br />
            Интернет казино работает на законных основаниях по лицензии, но иногда азартные сайты блокируются из-за ограничений, установленных в некоторых регионах. В России эту функцию выполняет Роскомнадзор. Клиенты теряют доступ к сайтам, которые попадают под блок и, соответственно, к выигранным деньгам. Чтобы дать посетителям казино Starda возможность распоряжаться честно заработанными средствами, запущено актуальное зеркало. Это сайт-клон, который в точности дублирует основной портал, но не попадает под блок, так как размещается по другому доменному адресу. Официальное зеркало открывает такие возможности:
            <div>
            {textArray.map(item => <Badge variant='flat' size="lg" color={'error'}>{item}</Badge>)}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
