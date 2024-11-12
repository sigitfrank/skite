import ImageIcon from '../../Components/Icons/Image'
import Layout from '../../Components/Layout'
import useBreakpoint from '../../Hooks/useBreakpoints'
import Header from '../../Components/Admin/Header'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createProduct, getCategories } from '../../Api'
import { queryClient } from '../../Lib/queryClient'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRef } from 'react'

const mockImgUrl = 'https://m.media-amazon.com/images/I/51FIaqed1eL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg'

type Category = {
    id: number
    name: string
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required"),
    description: Yup.string()
        .required("Description is required"),
    sku: Yup.string()
        .required("SKU is required"),
    stock: Yup.number()
        .required("Stock is required")
        .notOneOf([0], "Stock cannot be 0"),
    category_id: Yup.number()
        .required("Category is required")
        .notOneOf([0], "Category is required"),
    price: Yup.number()
        .required("Price is required")
        .notOneOf([0], "Price cannot be 0"),
    image: Yup.string()
        .required("Image is required")
});

const initivalValues = {
    name: "",
    description: "",
    sku: "",
    stock: 0,
    category_id: 0,
    price: 0,
    image: ""
}

const Products = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const categoriesQuery = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    })

    const { isSubmitting, handleSubmit, handleChange, setFieldValue, values, errors, resetForm } = useFormik({
        initialValues: initivalValues,
        validationSchema: validationSchema,
        onSubmit: (data) => {
            mutation.mutateAsync(data)
        }
    })

    const mutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
            toast.success("Product uploaded!");
            resetForm()
        },
        onError: () => {
            toast.error("Opps, something went wrong!");
        }
    })

    const categories = categoriesQuery.data?.response
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'xs'

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.replace(/[^0-9]/g, "");
        setFieldValue(e.target.name, newValue);
    };

    const triggerInputImage = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };


    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isSubmitting) return
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                /* Since the api can not receive base64/file, I will just put hardcoded image url to mock the interaction. */
                setFieldValue('image', mockImgUrl);
            };

            reader.readAsDataURL(file);
        }
    };

    return <Layout>
        {!isMobile && <Header />}
        <div className='p-3 mt-3 m-5'>
            <div className='mt-1'>
                <h1 className='font-bold text-3xl'>Add New Product</h1>
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
                                    <div className="flex gap-2">
                                        {
                                            categories.map((category: Category) => {
                                                const isSelected = category.id === values.category_id
                                                return <button type="button"
                                                    disabled={isSubmitting}
                                                    className={`px-4 py-2 rounded-lg bg-[#CAECFF] text-sm ${isSelected ? 'bg-[#3B97CB] text-white' : ''}`}
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