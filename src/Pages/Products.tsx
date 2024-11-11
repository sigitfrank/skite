import { useState } from 'react'
import ImageIcon from '../Components/Icons/Image'
import Layout from '../Components/Layout'
import useBreakpoint from '../Hooks/useBreakpoints'
import Header from '../Components/Admin/Header'

const categories = [
    {
        label: 'Wash and Fold',
        value: 'Wash and Fold',
    },
    {
        label: 'Dry Clean',
        value: 'Dry Clean',
    },
    {
        label: 'Home',
        value: 'Home',
    },
    {
        label: 'Others',
        value: 'Others',
    },
]

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>(categories[0])
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'xs'


    return <Layout>
        {!isMobile && <Header />}
        <div className='p-3 mt-3 m-5'>
            <div className='mt-1'>
                <h1 className='font-bold text-3xl'>Add New Product</h1>
            </div>
            <div className='mt-5 text-[#3B97CB]'>
                <div className="rounded-lg flex flex-wrap md:flex-nowrap w-full gap-8">
                    <form className="space-y-4 flex-1">
                        <div>
                            <label className="block text-sm font-medium mb-1">Product Name</label>
                            <input type="text" className="w-full border border-blue-300 rounded-lg p-2" placeholder="Enter product name" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea className="w-full border border-blue-300 rounded-lg p-2" rows={3} placeholder="Enter description"></textarea>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-1">SKU</label>
                                <input type="text" className="w-full border border-blue-300 rounded-lg p-2" placeholder="SKU" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-1">Stock</label>
                                <input type="text" className="w-full border border-blue-300 rounded-lg p-2" placeholder="Stock" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <div className="flex gap-2">
                                {
                                    categories.map(category => {
                                        const isSelected = category.value === selectedCategory?.value
                                        return <button type="button"
                                            className={`px-4 py-2 rounded-lg bg-[#CAECFF] text-sm ${isSelected ? 'bg-[#3B97CB] text-white' : ''}`}
                                            key={category.value}
                                            onClick={() => setSelectedCategory(category)}>
                                            {category.value}
                                        </button>
                                    })
                                }
                            </div>
                        </div>

                        <div className="flex mt-4 items-end justify-between" >
                            <div>
                                <label className="block text-sm font-medium mb-1">Price</label>
                                <input type="text" className="w-full border border-blue-300 rounded-lg p-2" placeholder="Enter price" />
                            </div>
                            {!isMobile && <button type="button" className="px-6 py-2 bg-[#56E4A0] text-white rounded-lg hover:bg-green-600">Publish</button>}
                        </div>
                    </form>
                    <div className="w-full md:w-1/4 flex flex-col items-center bg-blue-50">
                        <div className="bg-white rounded-lg w-full h-48 flex flex-col items-center justify-center p-2">
                            <ImageIcon fill='#CAECFF' />
                            <p className="text-[#3B97CB] mt-2 text-center underline font-bold">Upload image here</p>
                        </div>
                    </div>
                    {isMobile && <button type="button" className="px-6 py-4 bg-[#56E4A0] text-white rounded-lg hover:bg-green-600 w-full">Publish</button>}
                </div>
            </div>
        </div>
    </Layout>
}

export default Products