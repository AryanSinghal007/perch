/* eslint-disable no-unused-vars */
import React from 'react';
import { Avatar } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string()
        .max(280, 'Content must be 280 characters or less')
        .required('Content is required'),
    image: Yup.mixed()
        .required('Image is required')
        .test('fileSize', 'File size is too large', (value) => {
            return value && value.size <= 2000000; // 2MB
        })
});

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = React.useState(null);
    const [selectImage, setSelectImage] = React.useState(null);

    const formik = useFormik({
        initialValues: {
            content: '',
            image: "",
        },
        onSubmit: (values) => {
            console.log("values", values);
        },
        validationSchema,
    });

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const file = event.currentTarget.files[0];
        if (file) {
            setSelectImage(URL.createObjectURL(file));
            formik.setFieldValue('image', file);
        }
        setUploadingImage(false);
    }

    return (
        <div className="space-y-5 px-5 lg:px-10">
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={`pb-10`}>
                <div className='flex space-x-5'>
                    <Avatar alt="username" src="https://toppng.com/uploads/preview/avatar-png-115540218987bthtxfhls.png" />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-5'>
                            <div>
                                <input type="text" name="content" placeholder='What is happening' 
                                className={`border-none outline-none text-xl bg-transparent`}
                                {...formik.getFieldProps('content')}/>
                                {formik.errors.content && formik.touched.content (
                                    <span className='text-red-500'> {formik.errors.content}</span>
                                )}
                            </div>

                            {/* <div>
                                <img src="" alt="" />

                            </div> */}
                            <div className='flex items-center justify-between mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 cursor-pointer rounded-md'>
                                        <ImageIcon className='text-[#1d9bf0]'/>
                                        <input type="file" name="imageFile" className="hidden" onChange={handleSelectImage} />
                                        
                                    </label>
                                    <label className='flex items-center space-x-2 cursor-pointer rounded-md'>
                                        <FmdGoodIcon className='text-[#1d9bf0]'/>
                                        <input type="file" name="imageFile" className="hidden" onChange={handleSelectImage} />
                                        
                                    </label>
                                    <label className='flex items-center space-x-2 cursor-pointer rounded-md'>
                                        <EmojiEmotionsIcon className='text-[#1d9bf0]'/>
                                        <input type="file" name="imageFile" className="hidden" onChange={handleSelectImage} />
                                        
                                    </label>
                                </div>
                                <div>
                                    <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-bold py-2 px-4 text-sm rounded-full w-full mt-2 transition-colors duration-200" type='submit'>
                                        TWEET
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </section>
            <section>
                {[1, 1, 1, 1].map((item) => <TweetCard/>)}
            </section>
        </div>
    );
}

export default HomeSection;