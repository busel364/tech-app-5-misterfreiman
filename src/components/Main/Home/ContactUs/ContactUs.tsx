import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/hooks';
import { sendMsg } from '../../../../utils/consts';

const ContactUs = () => {

    const language = useAppSelector(state => state.language);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');
    const [isDelete, setIsDelete] = useState<boolean>();

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
                <h2 className='pb-3'>{language === 'he' ? 'צור קשר' : language === 'ru' ? 'Контактная информация' : 'Contact us'}</h2>
                <div className='row row-cols-2 m-0 p-0'>
                    <div className='col-12 col-md-6 my-3'>
                        <p className='pContact1 mt-1 mb-3'>Tel: 053-721-1086</p>
                        <p className='pContact1 my-3'>Email: busel364@gmail.com</p>
                        <div className='col-0 col-md-12 fakeDiv'></div>
                        <button className='btnContact mt-3'><a href='tel:+972537211086'>{language === 'he' ? 'להתקשר אלינו' : language === 'ru' ? 'Позвоните нам' : 'Call us'}</a></button>
                    </div>
                    <div className='col-12 col-md-6'>
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
                            <div className='divInputs'>
                                <textarea style={{ resize: 'none' }} placeholder='Message' value={message} className='inputs' onChange={(e) => setMessage(e.currentTarget.value)} />
                            </div>
                            <button className='btnContact mt-3' onClick={() => {
                                if (email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) && name && tel.match(/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/)) {
                                    sendMsg({ email, message, name, tel })
                                }
                            }}>{language === 'he' ? 'לשלוח הודעה' : language === 'ru' ? 'Отправить сообщение' : 'Send message'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs