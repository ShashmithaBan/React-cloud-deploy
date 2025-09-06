import React from 'react'

const KnowledgeCards = ({ knowledgeType, title, description, image }) => {
  return (
    <div className='border pb-3 shadow-sm overflow-hidden p-2 rounded-xl'>
            <img src={image} alt={title} className='w-full  object-cover rounded-xl' />
            <div className='p-2'>
                <h4 className='text-xs bg-[#00A7E7] w-[6rem] text-white rounded-xl py-1 text-center font-semibold mb-4'>{knowledgeType}</h4>
                <h5 className='text-lg font-semibold'>{title}</h5>
                <p className='text-gray-700 font-light mt-2 '>{description}</p>
            </div>
        </div>
  )
}

export default KnowledgeCards