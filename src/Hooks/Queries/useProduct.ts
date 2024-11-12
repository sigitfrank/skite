import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react'
import { createProduct, getCategories } from '../../Api';
import { useFormik } from 'formik';
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import useBreakpoint from '../useBreakpoints';
import { queryClient } from '../../Lib/queryClient';


const mockImgUrl = 'https://m.media-amazon.com/images/I/51FIaqed1eL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg'

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

const useProduct = () => {
    const breakpoint = useBreakpoint()
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

    return {
        isMobile,
        categories,
        values,
        isSubmitting,
        fileInputRef,
        errors,
        categoriesQuery,
        handleImgChange,
        triggerInputImage,
        handleChangeNumber,
        handleSubmit,
        handleChange,
        setFieldValue,
    }

}

export default useProduct