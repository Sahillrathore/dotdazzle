import React from 'react'

const services = [
    {
        title: 'Web Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi perferendis consequuntur harum distinctio dolores accusantium maiores illo laudantium, porro quod iure pariatur libero ab sed ut! Voluptatum delectus tempore voluptatem?',
        img: 'mobile.svg'
    },
    {
        title: 'Web Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi perferendis consequuntur harum distinctio dolores accusantium maiores illo laudantium, porro quod iure pariatur libero ab sed ut! Voluptatum delectus tempore voluptatem?',
        img: 'mobile.svg'
    },
    {
        title: 'Web Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi perferendis consequuntur harum distinctio dolores accusantium maiores illo laudantium, porro quod iure pariatur libero ab sed ut! Voluptatum delectus tempore voluptatem?',
        img: 'mobile.svg'
    },
    {
        title: 'Web Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi perferendis consequuntur harum distinctio dolores accusantium maiores illo laudantium, porro quod iure pariatur libero ab sed ut! Voluptatum delectus tempore voluptatem?',
        img: 'mobile.svg'
    },
    {
        title: 'Web Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi perferendis consequuntur harum distinctio dolores accusantium maiores illo laudantium, porro quod iure pariatur libero ab sed ut! Voluptatum delectus tempore voluptatem?',
        img: 'mobile.svg'
    },
   
]

const Services = () => {
  return (
    <div className='px-24 py-12 px'>
        <div className='flex justify-between'>
            <h1 className='uppercase text-4xl font-bold'>Services we offer</h1>
            <p className='capitalize text-xl'>All Services</p>
        </div>

        <div className='py-6 pt-12 flex gap-24 flex-wrap items-center justify-'>
            {
                services.map((item,i)=>(
                    <div className='flex rounded-2xl hover:shadow-lg !shadow-blue-100 relative z-30 transition-all p-6 py-6 flex-col gap-3 max-w-[20rem]'>
                        <img src={item.img} alt="" className='w-24' />
                        <h1 className='text-2xl font-semibold'>{item.title}</h1>
                        <p className='text-black/80'>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services