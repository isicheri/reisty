import React from 'react'
import ExperienceProp from '../ExperienceProp'

const AboutRestaurant = () => {
  return (
    <div>

  
<div className=" mb-[50px] leading-[26px] text-[13px]">
                  <p>
                    Orchid Bistro is a contemporary restaurant located in the
                    heart of Surulere, Lagos. The restaurant's interior design
                    is inspired by the beauty of orchids, with elegant décor and
                    soothing colors that create a relaxing atmosphere. Orchid
                    Bistro's culinary team is dedicated to offering the highest
                    quality dishes, featuring locally sourced ingredients and
                    creative flavor combinations. The menu offers a variety of
                    appetizers, entrees, and desserts, with vegetarian and
                    gluten-free options available. The restaurant also features
                    a full-service bar with a carefully curated wine list and
                    handcrafted cocktails. Whether you're looking for a romantic
                    dinner or a night out with friends, Orchid Bistro is the
                    perfect spot for an unforgettable dining experience.{" "}
                    <span className=" text-[#BC172F]">+More</span>
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <ExperienceProp />
                  <ExperienceProp />
                  <ExperienceProp />
                </div>


    </div>
  )
}

export default AboutRestaurant