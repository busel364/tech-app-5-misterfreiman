import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Switch } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeMode } from '../../reducers/ModeReducer';
import { changeLanguage } from '../../reducers/LanguageReducer';


const items: MenuProps['items'] = [
    {
        label: 'English',
        key: 'English selected',
    },
    {
        label: 'עברית',
        key: 'עברית נבחרה',
    },
    {
        label: 'Русский',
        key: 'Выбран Русский',
    },
];


const Header = () => {

    const dispatch = useAppDispatch();
    const mode = useAppSelector(state => state.mode);
    const language = useAppSelector(state => state.language);

    const [isOn, setIsOn] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const onClick: MenuProps['onClick'] = ({ key }) => {
        message.info(`${key}`);
        if (key === 'English selected') {
            dispatch(changeLanguage('en'));
        }
        if (key === 'עברית נבחרה') {
            dispatch(changeLanguage('he'));
        }
        if (key === 'Выбран Русский') {
            dispatch(changeLanguage('ru'));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > 200) {
                setVisible(() => prevScrollPos > currentScrollPos);
                setPrevScrollPos(currentScrollPos);
            }
        });
    }, [prevScrollPos])

    return (
        <div>
            <div className={`${isOn ? 'headerBlock' : 'headerBlockNone'}`} onClick={() => setIsOn(false)}></div>
            <div className={`text-center ${!isOn ? visible ? ' header ' : ' header headerHidden ' : ' header '}`}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" expanded={isOn} className='pt-2 '>
                    <Container>
                        <Navbar.Brand href="#home" className='p-0 m-0 container' style={{ width: '160px' }}>
                            <div className='container row row-cols-2'>
                                <div className='col-6'>
                                    <img src={`${require('../../utils/imgs/domw.png')}`} alt='logo' style={{ width: '70px', padding: '0' }} />
                                    {/* <p></p><p></p> */}
                                </div>
                                <div className='col-6'>
                                    <p className='m-0 p-0 pLogo pLogo1'>Mister Freiman</p>
                                    <p className='m-0 p-0 pLogo'><i>תמיד בשבילך</i></p>
                                </div>
                            </div>
                        </Navbar.Brand>
                        <div onClick={() => setIsOn(prev => !prev)}>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" value={'false'} />
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#about_us" className='navItem' style={{ fontSize: '1.5rem', fontWeight: '100' }}>{language === 'he' ? 'מידע עלינו' : language === 'ru' ? 'О нас' : 'About us'}</Nav.Link>
                                <Nav.Link href="#our_services" className='navItem' style={{ fontSize: '1.5rem', fontWeight: '100' }}>{language === 'he' ? 'שירותים שלנו' : language === 'ru' ? 'Наши услуги' : 'Our services'}</Nav.Link>
                                <Nav.Link href="#contact" className='navItem' style={{ fontSize: '1.5rem', fontWeight: '100' }}>{language === 'he' ? 'צור קשר' : language === 'ru' ? 'Контактная информация' : 'Contact us'}</Nav.Link>
                                <NavDropdown title={language === 'he' ? 'הגדרות' : language === 'ru' ? 'Настройки' : 'Settings'} id="collasible-nav-dropdown" className='settings' autoClose="outside">
                                    <NavDropdown.Item>
                                        <Dropdown menu={{ items, onClick }} trigger={['click']} >
                                            {/* <Space > */}
                                            <p style={{ fontSize: '1.2rem' }}>
                                                {language === 'he' ? 'שפה' : language === 'ru' ? 'Язык' : 'Language'}
                                                <DownOutlined className='ms-2' />
                                            </p>
                                            {/* </Space> */}
                                        </Dropdown>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <p style={{ fontSize: '1.2rem' }}>
                                            {language === 'he' ? 'גרסה' : language === 'ru' ? 'Версия' : 'Mode'}
                                            <Switch
                                                checkedChildren="Dark" unCheckedChildren="Light"
                                                checked={mode}
                                                className='mx-3'
                                                onClick={() => dispatch(changeMode())}
                                            />
                                        </p>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Header