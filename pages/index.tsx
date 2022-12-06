import { Navbar, Button, Link, Text, Card, Radio, Badge } from "@nextui-org/react";
import { AiOutlineLogin } from 'react-icons/ai'
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
            <svg width="140" height="44" viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_6742_343152)">
                <path d="M93.7236 43.2799V0.815918H104.329C110.993 0.815918 114.325 4.31415 114.325 11.3106V32.7853C114.325 39.7817 110.993 43.2799 104.329 43.2799H93.7236ZM104.207 6.88221H100.428V37.2137H104.207C106.483 37.2137 107.62 35.8386 107.62 33.0886V11.0073C107.62 8.25723 106.483 6.88221 104.207 6.88221Z" fill="#E92139" />
                <path d="M89.6949 43.1959H82.9141C82.5105 41.985 82.3087 40.2494 82.3087 37.9892V31.3295C82.3087 29.3921 81.9656 28.0198 81.2794 27.2126C80.5933 26.365 79.4833 25.9412 77.9496 25.9412H75.649V43.1959H68.9893V0.815918H79.0394C82.4701 0.815918 84.9725 1.62316 86.5467 3.23763C88.1208 4.81174 88.9078 7.25363 88.9078 10.5633V13.8932C88.9078 18.2522 87.4548 21.1179 84.5487 22.4902C87.4952 23.7414 88.9684 26.7484 88.9684 31.5111V38.0497C88.9684 40.3504 89.2105 42.0657 89.6949 43.1959ZM78.8577 6.8702H75.649V19.8869H78.2523C79.5842 19.8869 80.5731 19.5438 81.2189 18.8577C81.905 18.1715 82.2481 17.0212 82.2481 15.4067V11.2293C82.2481 8.32322 81.118 6.8702 78.8577 6.8702Z" fill="#E92139" />
                <path d="M22.2549 6.8702V0.815918H42.8394V6.8702H35.877V43.1959H29.2173V6.8702H22.2549Z" fill="#E92139" />
                <path d="M132.702 0.815918L139.483 43.1959H132.763L131.612 35.5069H123.439L122.289 43.1959H116.174L122.955 0.815918H132.702ZM127.495 8.32322L124.287 29.7554H130.704L127.495 8.32322Z" fill="#E92139" />
                <path d="M59.3094 0.815918L66.0903 43.1959H59.37L58.2197 35.5069H50.0464L48.8961 43.1959H42.7812L49.562 0.815918H59.3094ZM54.1027 8.32322L50.8941 29.7554H57.3116L54.1027 8.32322Z" fill="#E92139" />
                <path d="M0.700183 10.9739C0.700183 7.54313 1.5276 4.91961 3.18244 3.10332C4.83727 1.24668 7.27916 0.318359 10.5081 0.318359C13.7371 0.318359 16.179 1.24668 17.8338 3.10332C19.4886 4.91961 20.316 7.54313 20.316 10.9739V12.3058H14.0196V10.5501C14.0196 7.76512 12.9096 6.37263 10.6897 6.37263C8.46984 6.37263 7.35989 7.76512 7.35989 10.5501C7.35989 11.7206 7.60206 12.8305 8.0864 13.8799C8.17501 14.0719 8.26836 14.2606 8.36643 14.4458C8.80439 15.273 9.33666 16.0329 9.96323 16.7254C10.7301 17.573 11.5777 18.4206 12.506 19.2682C13.4343 20.0755 14.3425 20.9433 15.2304 21.8716C16.1588 22.7595 17.0064 23.7282 17.7732 24.7776C18.5401 25.7867 19.1657 26.9975 19.6501 28.4102C20.1344 29.8229 20.3766 31.3566 20.3766 33.0115C20.3766 36.4422 19.529 39.0859 17.8338 40.9426C16.9869 41.85 15.9486 42.5307 14.7188 42.9848C13.4871 43.4396 12.0634 43.667 10.4476 43.667C7.21862 43.667 4.75655 42.7588 3.06135 40.9426C1.36615 39.0859 0.518555 36.4422 0.518555 33.0115V30.4081H6.815V33.4353C6.815 36.1799 7.96531 37.5522 10.2659 37.5522C12.5666 37.5522 13.7169 36.1799 13.7169 33.4353C13.7169 32.1348 13.4139 30.9033 12.8078 29.7406C12.6803 29.4959 12.5393 29.2542 12.3849 29.0156C11.497 27.603 10.4072 26.3316 9.11563 25.2014C7.86441 24.0713 6.59301 22.9008 5.30143 21.69C4.00985 20.4387 2.92008 18.905 2.03212 17.0887C1.14416 15.2321 0.700183 13.1938 0.700183 10.9739Z" fill="url(#paint0_linear_6742_343152)" />
                <path d="M3.18343 3.10334C1.52859 4.91963 0.701172 7.54315 0.701172 10.9739C0.701172 13.1938 1.14515 15.2321 2.03311 17.0887C2.92107 18.905 4.01084 20.4388 5.30242 21.69C6.594 22.9008 7.8654 24.0713 9.11662 25.2015C10.4082 26.3316 11.498 27.603 12.3859 29.0156C12.5399 29.2536 12.6805 29.4945 12.8077 29.7385C14.8206 32.6624 18.0187 39.4059 14.7085 42.9889C15.9432 42.5349 16.9853 41.8528 17.8348 40.9426C19.53 39.0859 20.3776 36.4422 20.3776 33.0115C20.3776 31.3566 20.1354 29.8229 19.6511 28.4102C19.1667 26.9976 18.5411 25.7867 17.7742 24.7777C17.0074 23.7282 16.1598 22.7596 15.2314 21.8716C14.3435 20.9433 13.4353 20.0755 12.507 19.2683C11.5787 18.4207 10.7311 17.5731 9.96422 16.7255C9.33765 16.0329 8.80538 15.2731 8.36742 14.4458C8.26934 14.2606 8.176 14.072 8.08739 13.88C3.63548 6.34319 5.43944 2.01791 6.89791 0.797363C5.39013 1.24802 4.15197 2.01668 3.18343 3.10334Z" fill="url(#paint1_linear_6742_343152)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_6742_343152" x1="19.4667" y1="8.5027" x2="3.44761" y2="10.4124" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#78111D" />
                  <stop offset="1" stop-color="#E92139" />
                </linearGradient>
                <linearGradient id="paint1_linear_6742_343152" x1="15.1788" y1="32.9838" x2="-2.02805" y2="24.0458" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F01A34" />
                  <stop offset="1" stop-color="#77111D" />
                </linearGradient>
                <clipPath id="clip0_6742_343152">
                  <rect width="140" height="44" fill="white" />
                </clipPath>
              </defs>
            </svg>

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
        <Link href={link}>
          <Card css={{ mw: "500px" }} isPressable isHoverable>
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
        </Link>
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
            <br />
            <div>
              {textArray.map((item, index) => <Text h5 key={index}>{item}</Text>)}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
