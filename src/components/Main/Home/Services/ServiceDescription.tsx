import React from 'react'

interface Props {
  item: { name: string, img: string, icon: string, description: string,id:string },
  mode:boolean
}

const ServiceDescription = ({ item,mode }: Props) => {

  return (
    <div className='container row my-5 serviceDescription' style={{margin:'0 auto'}} id={item.id}>
      <div className='col-lg-12 col-xl-6 row mx-0 px-0 divServiceDescription'
        style={{ height:'358px', overflowY:'hidden', backgroundImage:`url(${item.img})`}}>
        {/* <img
          className='col-12 px-0'
          src={item.img}
          title={item.name}
          alt={item.name} /> */}
      </div>
      <div className='text-center col-lg-12 col-xl-6 m-0 pServiceDescription' style={{backgroundColor:`${!mode?'rgba(51,51,51,0.1)':'rgba(245, 245, 245, 0.8)'}`}}>
        <h3 className=' pt-4 pb-2'>{item.name}</h3>
        <p style={{fontSize:'1.2rem'}}>
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default ServiceDescription;