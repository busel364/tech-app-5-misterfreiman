import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/hooks';
import { sendMsg } from '../../../../utils/consts';
import {
    WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined,
    CheckOutlined
} from '@ant-design/icons';

const ContactUs = () => {

    const language = useAppSelector(state => state.language);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');
    const [isDelete, setIsDelete] = useState<boolean>();
    const [messageSend, setMessageSend] = useState(false);

    const clearFields = () => {
        setName('');
        setEmail('');
        setTel('');
        setMessage('');
    }

    const renderMessageSend = () => {
        setMessageSend(true);
        setTimeout(() => {
            setMessageSend(false);
        }, 1500)
    }

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Delete' || e.key === "Backspace") {
                setIsDelete(false)
            } else {
                setIsDelete(true);
            }
        })
    }, [])


    return (
        <div className=' container-fluid  pt-4 pb-5 px-0 mx-0' id='contact' style={{ backgroundColor: '#333', color: 'whitesmoke' }}>
            <div className='text-center '>
                {/* <h2 className='pb-3'>{language === 'he' ? 'צור קשר' : language === 'ru' ? 'Контактная информация' : 'Contact us'}</h2> */}
                <p className='text-center mb-3' style={{ fontWeight: '200', fontSize: '2.5rem' }}>{language === 'he' ? 'צור קשר' : language === 'ru' ? 'Контактная информация' : 'Contact us'}</p>
                <div className='row row-cols-2 m-0 p-0'>
                    <div className='col-12 col-md-6'>
                        {messageSend ?
                            <div className='mt-5'>
                                <CheckOutlined style={{ fontSize: '7rem' }} />
                                <p style={{ fontSize: '3rem', fontWeight: '200' }}>{language === 'he' ? 'נשלח' : language === 'ru' ? 'Отправлено' : 'Sended'}</p>
                            </div>
                            :
                            <div style={{ margin: '0 auto' }}>
                                <div className='divInputs'>
                                    <input type='text' placeholder='Name' className='inputs' value={name} onChange={(e) => setName(e.currentTarget.value)} />
                                </div>
                                <div className='divInputs'>
                                    <input type='email' placeholder='Email' className='inputs' value={email} onChange={(e) => setEmail(e.currentTarget.value)} required />
                                </div>
                                <div className='divInputs'>
                                    <input
                                        type='tel'
                                        placeholder='Tel'
                                        className='inputs'
                                        value={tel}
                                        onChange={(e) => {
                                            if ("0123456789-".includes(e.target.value[e.target.value.length - 1])) {
                                                if ((e.target.value.length === 3 || e.target.value.length === 7) && isDelete) {
                                                    e.target.value += '-';
                                                }
                                                if (e.target.value.length <= 12 && e.target.value.length >= 0) {
                                                    setTel(e.currentTarget.value)
                                                }
                                            }
                                            if (!isDelete && e.target.value.length === 1) {
                                                setTel('')
                                            }
                                            if (!isDelete && e.target.value[e.target.value.length - 1] === '-') {
                                                setTel(tel.slice(0, e.target.value.length))
                                            }
                                        }}
                                        pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}" />
                                </div>
                                <div className='divInputs mb-5'>
                                    <textarea style={{ resize: 'none' }} placeholder='Message' value={message} className='inputs' onChange={(e) => setMessage(e.currentTarget.value)} />
                                </div>
                                <button className='btnContact mt-5 ' onClick={() => {
                                    if (email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) && name && tel.match(/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/)) {
                                        sendMsg({ email, message, name, tel })
                                        clearFields();
                                        renderMessageSend();
                                    }
                                }}>{language === 'he' ? 'לשלוח הודעה' : language === 'ru' ? 'Отправить сообщение' : 'Send message'}</button>
                            </div>
                        }
                    </div>
                    <div className='col-12 col-md-6 '>
                        <p className='pContact1 mt-1 mb-3'>Tel: 050-257-2750</p>
                        <p className='pContact1 mt-3 mb-5'>Email: <a href='mailto:toda@mister-freiman.com' className='aEmail' >toda@mister-freiman.com</a></p>
                        <div className='pt-4'>
                            <a href='tel:+972502572750' className='mt-5'><button className='btnContact mt-3'>{language === 'he' ? 'להתקשר אלינו' : language === 'ru' ? 'Позвоните нам' : 'Call us'}</button></a>
                        </div>
                        <div className='container row row-cols-3 mt-5 pt-3 text-center ms-1'>
                            <div>
                                <a
                                    target='_blank'
                                    rel="noreferrer"
                                    style={{ width: '72px' }}
                                    href='https://www.facebook.com/profile.php?id=100083939062676&mibextid=LQQJ4d'
                                    className='aSocialMedia p-0'>
                                    <FacebookOutlined style={{ fontSize: '4.5rem' }} />
                                </a>
                            </div>
                            <div>
                                <a
                                    target='_blank'
                                    rel="noreferrer"
                                    style={{ width: '72px' }}
                                    className='aSocialMedia p-0 '
                                    href='https://instagram.com/_mr.freiman?igshid=YmMyMTA2M2Y='>
                                    <InstagramOutlined style={{ fontSize: '4.5rem' }} />
                                </a>
                            </div>
                            <div>
                                <a
                                    target='_blank'
                                    rel="noreferrer"
                                    style={{ width: '72px' }}
                                    className='aSocialMedia p-0'
                                    href='https://api.whatsapp.com/send/?phone=972502572750&text&type=phone_number&app_absent=0'>
                                    <WhatsAppOutlined style={{ fontSize: '4.5rem' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs