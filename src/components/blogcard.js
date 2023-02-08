import React from 'react'
import { Outlet,Link } from 'react-router-dom';
function BlogCard({title,id,img,text,name,description,avatar_url,categories}) {
   console.log(categories)
  return (
    <div>
        <>


<div class="flex flex-wrap ">
    <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" class="w-full block h-full">
            <img alt="blog photo" src={img} class="max-h-40 w-full object-cover"/>
            <div class="bg-white w-full p-4">
                <p class=" text-indigo-500 text-2xl font-medium">
                    {title}
                </p>
                <p class=" text-gray-800 text-sm font-medium mb-2">
                {description}
                </p>
                <p class="truncate text-gray-600 font-light text-md">
                {text}
                   
                </p>
                {/* <a class="inline-flex text-indigo-500" href="">Read More</a> */}
                <Link to={`/blogpost/${id}`}>Read More</Link>
                <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                    {categories.length>0?(
                            categories.map((c)=>{
                                return <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                          #{c.name}
                            </span>
                            })
                    ):('')}
                    {/* <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                         {categories.name}
                    </span>
                    <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                        internet
                    </span>
                    <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                        #education
                    </span> */}
                </div>
                <div class="flex items-center mt-2">
                    <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src={avatar_url}/>
        
                    <div class="pl-3">
                        <div class="font-medium">
                           {name}
                        </div>
                        <div class="text-black-600 text-sm">
                            {description}  
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    
</div>
        </>
    </div>
  )
}

export default BlogCard