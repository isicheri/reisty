
import React from 'react'
import TextRating from '../../../components/rating/RatingStar'

const ReviewRestaurant = () => {
  return (
    <div className='mb-[50px] leading-[26px] text-[13px]'>
      <p>
      Explore authentic reviews from verified Reisty diners about Orchid Bistro. Before reserving your table, learn more about what the restaurant has to offer by getting insider tips and ratings from other restaurant-goers on Reisty. With genuine reviews, you can discover what other diners enjoyed about Orchid Bistro and make your table booking with confidence!
      </p>

      <div className='w-full h-auto border border-gray-400 p-3 rounded-xl mt-8  flex justify-center items-center flex-col'>
        <div className='h-28 w-full flex justify-start p-2 items-center bg-blue-gray-500 rounded-xl'>
     <TextRating /> 
     <p>77 reviews</p>
        </div>

        <div className='flex justify-center text-center w-full h-auto p-3 rounded-xl'>
        <div className='flex justify-center items-center w-1/2 h-64 bg-blue-gray-500 rounded-xl m-2 '></div>
        <div className='flex justify-center items-center w-1/2 h-64 bg-blue-gray-500 rounded-xl m-2'></div>
        </div>
      </div>

      <div className='h-auto w-full flex flex-col justify-center items-center mt-6'>

          <div className='w-full h-auto border-2 border-[#DADADA] rounded-lg flex justify-center items-center flex-col p-6 m-4'>
            <div className='w-full h-20 rounded-lg flex justify-between items-center'>
              <div className='w-1/2 h-20 rounded-lg flex justify-start items-center p-3'>
                 <div className='w-8 h-8 bg-gray-900'></div>
                 <div className='h-auto flex flex-col justify-center items-center m-3 text-[#000000] text-base'>
                 <h3>Richard Ayo</h3>
                 <p className='text-[#717171] text-sm'>December 2022</p>
                 </div>
              </div>
              <div className='w-1/2 h-20rounded-lg flex justify-center p-3 items-end flex-col'>

             <div className='w-full h-16 flex  justify-start items-center'>
                                           <TextRating /> 
             </div>
               <p>a month ago</p>
              </div>
            </div>
            <div className='w-full h-36  rounded-lg mt-3 flex justify-center items-center'>
              <p className='p-4 text-[#717171] text-base'>
              My experience at the restaurant was absolutely delightful! From the moment I arrived, the staff was incredibly welcoming and accommodating. The reservation process was seamless, and they had my table ready for me upon arrival. The menu had an impressive variety of options, and the food did not disappoint. Each dish was beautifully presented and bursting with flavor
              </p>
            </div>
          </div>




          <div className='w-full h-auto border-2 border-[#DADADA] rounded-lg flex justify-center items-center flex-col p-6 m-4'>
            <div className='w-full h-20 rounded-lg flex justify-between items-center'>
              <div className='w-1/2 h-20 rounded-lg flex justify-start items-center p-3'>
                 <div className='w-8 h-8 bg-gray-900'></div>
                 <div className='h-auto flex flex-col justify-center items-center m-3 text-[#000000] text-base'>
                 <h3>Richard Ayo</h3>
                 <p className='text-[#717171] text-sm'>December 2022</p>
                 </div>
              </div>
              <div className='w-1/2 h-20rounded-lg flex justify-center p-3 items-end flex-col'>

             <div className='w-full h-16 flex  justify-start items-center'>
                                           <TextRating /> 
             </div>
               <p>a month ago</p>
              </div>
            </div>
            <div className='w-full h-36  rounded-lg mt-3 flex justify-center items-center'>
              <p className='p-4 text-[#717171] text-base'>
              My experience at the restaurant was absolutely delightful! From the moment I arrived, the staff was incredibly welcoming and accommodating. The reservation process was seamless, and they had my table ready for me upon arrival. The menu had an impressive variety of options, and the food did not disappoint. Each dish was beautifully presented and bursting with flavor
              </p>
            </div>
          </div>



          <div className='w-full h-auto border-2 border-[#DADADA] rounded-lg flex justify-center items-center flex-col p-6 m-4'>
            <div className='w-full h-20 rounded-lg flex justify-between items-center'>
              <div className='w-1/2 h-20 rounded-lg flex justify-start items-center p-3'>
                 <div className='w-8 h-8 bg-gray-900'></div>
                 <div className='h-auto flex flex-col justify-center items-center m-3 text-[#000000] text-base'>
                 <h3>Richard Ayo</h3>
                 <p className='text-[#717171] text-sm'>December 2022</p>
                 </div>
              </div>
              <div className='w-1/2 h-20rounded-lg flex justify-center p-3 items-end flex-col'>

             <div className='w-full h-16 flex  justify-start items-center'>
                                           <TextRating /> 
             </div>
               <p>a month ago</p>
              </div>
            </div>
            <div className='w-full h-36  rounded-lg mt-3 flex justify-center items-center'>
              <p className='p-4 text-[#717171] text-base'>
              My experience at the restaurant was absolutely delightful! From the moment I arrived, the staff was incredibly welcoming and accommodating. The reservation process was seamless, and they had my table ready for me upon arrival. The menu had an impressive variety of options, and the food did not disappoint. Each dish was beautifully presented and bursting with flavor
              </p>
            </div>
          </div>


          <div className='w-full p-3 flex justify-start items-center h-20'>
             <div className='w-[172px] h-[60px] rounded-lg border-[#DADADA] border-2 flex justify-center items-center'>
              <p className='text-base cursor-pointer'>show all 77 views</p> 
             </div>
          </div>

      </div>


    </div>
  )
} 

export default ReviewRestaurant