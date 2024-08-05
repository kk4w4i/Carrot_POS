import { SvgButton } from '@/components/ui/svg-button'
import { Input } from '@/components/ui/input'
import React from 'react'

function Products() {

    return (
        <div className='w-full'>
            <div className='flex justify-between items-end font-custom w-full'>
                <div className='flex gap-4 p-10'>
                    <section>
                        <h1 className=' font-semibold text-[2rem]'>Your Products</h1>
                        <p>Here’s a list of your products for </p>
                    </section>
                    <div className='flex flex-row gap-5 items-end'>
                        <Input className="h-[2rem] w-[18rem]" placeholder="Search Products"/>
                        <SvgButton>Time</SvgButton>
                        <SvgButton>Category</SvgButton>
                        <SvgButton> Price</SvgButton>
                    </div>
                </div>
                <div className='flex gap-4 p-10'>
                    <div className='flex gap-5'>
                        <SvgButton>View</SvgButton>
                        <SvgButton 
                            stroke="#ffffff" 
                            hoverStroke="#ffffff" 
                            className="bg-black/90 hover:bg-black/80 px-3 py-2 rounded-md"
                        >
                            Create
                        </SvgButton> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products