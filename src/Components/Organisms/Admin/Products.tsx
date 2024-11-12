import ImageIcon from '../../Atoms/Icons/Image'
import Layout from './Components/Layout'
import Header from './Components/Header'
import useProduct from '../../../Hooks/Queries/useProduct'
import { Category } from '../../../Types/category'

const Products = () => {
    const {
        isMobile,
        categories,
        values,
        isSubmitting,
        errors,
        categoriesQuery,
        handleImgChange,
        triggerInputImage,
        handleChangeNumber,
        handleSubmit,
        handleChange,
        setFieldValue,
        fileInputRef,
    } = useProduct()

    return <Layout>
        {!isMobile && <Header />}
        <div className='p-3 mt-3 m-5'>
            <div className='mt-1'>
                <h1 className='font-bold text-3xl text-[#303030]'>Add New Product</h1>
            </div>
            <div className='mt-5 text-[#3B97CB]'>
                <div className="rounded-lg flex flex-wrap md:flex-nowrap w-full gap-8">
                    <form className="space-y-4 flex-1" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1">Product Name</label>
                            <input type="text" className="w-full border border-blue-300 rounded-lg p-2" name='name' disabled={isSubmitting} value={values.name} onChange={handleChange} placeholder="Enter product name" />
                            <small className='text-red-500'>{errors.name}</small>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea className="w-full border border-blue-300 rounded-lg p-2" rows={3} name='description' disabled={isSubmitting} value={values.description} onChange={handleChange} placeholder="Enter description"></textarea>
                            <small className='text-red-500'>{errors.description}</small>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-1">SKU</label>
                                <input type="text" className="w-full border border-blue-300 rounded-lg p-2" name='sku' disabled={isSubmitting} value={values.sku} onChange={handleChange} placeholder="SKU" />
                                <small className='text-red-500'>{errors.sku}</small>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-1">Stock</label>
                                <input type="text" className="w-full border border-blue-300 rounded-lg p-2" name='stock' disabled={isSubmitting} value={values.stock} onChange={handleChangeNumber} placeholder="Stock" />
                                <small className='text-red-500'>{errors.stock}</small>
                            </div>
                        </div>

                        {
                            categoriesQuery.isFetched ?
                                <div>
                                    <label className="block text-sm font-medium mb-1">Category</label>
                                    <div className="flex gap-2 flex-wrap">
                                        {
                                            categories.map((category: Category) => {
                                                const isSelected = category.id === values.category_id
                                                return <button type="button"
                                                    disabled={isSubmitting}
                                                    className={`px-4 py-2 rounded-lg bg-[#CAECFF] text-sm ${isSelected ? '!bg-[#3B97CB] text-white' : ''}`}
                                                    key={category.id}
                                                    onClick={() => setFieldValue('category_id', category.id)}>
                                                    {category.name}
                                                </button>
                                            })
                                        }
                                    </div>
                                    <small className='text-red-500'>{errors.category_id}</small>
                                </div> : <p>Fetching Categories...</p>
                        }

                        <div className="flex mt-4 items-end justify-between" >
                            <div>
                                <label className="block text-sm font-medium mb-1">Price</label>
                                <input type="text" className="w-full border border-blue-300 rounded-lg p-2" name='price' disabled={isSubmitting} value={values.price} onChange={handleChangeNumber} placeholder="Enter price" />
                                <small className='text-red-500'>{errors.price}</small>
                            </div>
                            {!isMobile && <button type="submit" className="px-6 py-2 bg-[#56E4A0] text-white rounded-lg hover:bg-green-600" disabled={isSubmitting}>Publish</button>}
                        </div>
                    </form>
                    <div className="w-full md:w-1/4 flex flex-col items-center bg-blue-50">
                        <div className="bg-white rounded-lg w-full h-48 flex flex-col items-center justify-center p-2">
                            {
                                values.image ? <img src={values.image} alt='product-img' className='w-full h-full object-contain' /> : <ImageIcon className='cursor-pointer' fill='#CAECFF' onClick={triggerInputImage} />
                            }

                            <input type='file' className='hidden' accept='image/*' ref={fileInputRef} onChange={handleImgChange} />
                            <p className="text-[#3B97CB] mt-2 text-center underline font-bold cursor-pointer" onClick={triggerInputImage}>Upload image here</p>
                            <small className='text-red-500'>{errors.image}</small>
                        </div>
                    </div>
                    {isMobile && <button type="submit" className="px-6 py-4 bg-[#56E4A0] text-white rounded-lg hover:bg-green-600 w-full" disabled={isSubmitting}>Publish</button>}
                </div>
            </div>
        </div>
    </Layout>
}

export default Products