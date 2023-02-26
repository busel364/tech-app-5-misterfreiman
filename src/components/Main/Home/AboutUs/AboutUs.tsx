import React from 'react'
import { useAppSelector } from '../../../../app/hooks';
import { aboutUs } from '../../../../utils/consts';

const AboutUs = () => {

    const mode = useAppSelector(state => state.mode);
    const language = useAppSelector(state => state.language);

    return (
        <div id='about_us' className='container-fluid m-0 py-4' style={{ backgroundColor: `${!mode ? 'rgba(51,51,51,0.8)' : '#333'}`, color: 'whitesmoke' }}>
            <div className='container'>
                {/* <h1 className='text-center' style={{ fontWeight: '200' }}>{language === 'he' ? 'מידע עלינו' : language === 'ru' ? 'О нас' : 'About us'}</h1> */}
                <p className='text-center mb-3' style={{fontWeight:'200', fontSize:'2.5rem'}}>{language === 'he' ? 'מידע עלינו' : language === 'ru' ? 'О нас' : 'About us'}</p>
                <p className='pAboutUs pt-2 ms-4 text-center'>{aboutUs[language]}</p>
            </div>
        </div>
    )
}

export default AboutUs