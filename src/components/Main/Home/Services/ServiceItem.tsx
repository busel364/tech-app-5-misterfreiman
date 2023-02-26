import React from 'react'

interface Props {
    item: { name: string, img: string, icon: string, description: string, id: string }
}

const ServiceItem = ({ item }: Props) => {
    return (
        <a href={`#${item.id}`} className='col text-center mt-3 mx-4 linkServiceItem col-lg col-md-5'>
            <img
                className=''
                style={{height:'150px'}}
                src={item.icon}
                alt={item.name}
                title={item.name} />
            <p className='pt-5'>{item.name}</p>
        </a>
    )
}

export default ServiceItem