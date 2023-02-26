import React from 'react'
import { useAppSelector } from '../../../../app/hooks';
import { services } from '../../../../utils/consts';
import ServiceDescription from './ServiceDescription';
import ServiceItem from './ServiceItem';

const Services = () => {

    const language = useAppSelector(state => state.language);
    const mode = useAppSelector(state => state.mode);

    return (
        <div className='container-fluid services pb-3' id='our_services' style={{ backgroundColor: `${!mode ? 'rgba(244, 244, 241,0.5)' : '#333'}` }}>
            <div className='py-3 pt-4 row text-center' style={{ borderTop: '4px solid #333', borderBottom: '4px solid #333', backgroundColor: 'rgba(244, 244, 241)' }}>
                <h1 style={{fontWeight:'200'}}>{language === 'he' ? 'שירותים שלנו' : language === 'ru' ? 'Наши услуги' : 'Our services'}</h1>
                {services[language].map(item => <ServiceItem item={item} key={item.name} />)}
            </div>
            <div className='pt-4 '>
                {services[language].map(item => <ServiceDescription mode={mode} item={item} key={item.img} />)}
            </div>
        </div>
    )
}

export default Services