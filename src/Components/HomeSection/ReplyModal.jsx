import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 600 },
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  outline: 'none',
  borderRadius: 4,
  p: 0,
  overflow: 'auto'
};

const replySchema = Yup.object().shape({
  content: Yup.string()
    .required('Reply cannot be empty')
    .max(280, 'Reply cannot exceed 280 characters')
});

export default function ReplyModal({ open, handleClose, tweet }) {
  const [imagePreview, setImagePreview] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      content: '',
      image: null
    },
    validationSchema: replySchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      console.log("Submitting reply:", values);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        handleClose();
        formik.resetForm();
        setImagePreview(null);
      }, 1000);
    }
  });
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue('image', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = () => {
    formik.setFieldValue('image', null);
    setImagePreview(null);
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        if (!isSubmitting) {
          handleClose();
          formik.resetForm();
          setImagePreview(null);
        }
      }}
      aria-labelledby="reply-modal-title"
    >
      <Box sx={style}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid #eff3f4'
        }}>
          <IconButton 
            onClick={() => {
              if (!isSubmitting) {
                handleClose();
                formik.resetForm();
                setImagePreview(null);
              }
            }}
            disabled={isSubmitting}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        {/* Original Tweet */}
        <Box sx={{ px: 2, py: 2, borderBottom: '1px solid #eff3f4' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar 
              src="https://t3.ftcdn.net/jpg/08/20/75/34/360_F_820753420_Nqjb8USaj0J7K82Uo6yZLhCv4roZFBj7.jpg"
              sx={{ width: 35, height: 35 }}
            />
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                  Aryan Singhal
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '14px' }}>
                  @aryansinghal · 2min
                </Typography>
              </Box>
              <Typography sx={{ mt: 1, fontSize: '15px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
              </Typography>
              
              <Typography sx={{ mt: 2, color: 'text.secondary', fontSize: '14px' }}>
                Replying to <span style={{ color: '#1d9bf0' }}>@aryansinghal</span>
              </Typography>
            </Box>
          </Box>
        </Box>
        
        {/* Reply Form */}
        <Box sx={{ p: 2 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Avatar 
                src="https://t3.ftcdn.net/jpg/08/20/75/34/360_F_820753420_Nqjb8USaj0J7K82Uo6yZLhCv4roZFBj7.jpg"
                sx={{ width: 35, height: 35 }}
              />
              <Box sx={{ flex: 1 }}>
                <textarea
                  placeholder="Tweet your reply"
                  className="w-full border-none outline-none text-xl bg-transparent resize-none"
                  rows={3}
                  name="content"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  disabled={isSubmitting}
                />
                
                {formik.touched.content && formik.errors.content && (
                  <Typography color="error" variant="caption">
                    {formik.errors.content}
                  </Typography>
                )}
                
                {imagePreview && (
                  <Box sx={{ 
                    position: 'relative', 
                    mt: 2,
                    borderRadius: 2,
                    overflow: 'hidden',
                    maxHeight: '300px',
                  }}>
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full object-cover rounded-lg"
                    />
                    <IconButton 
                      onClick={removeImage}
                      sx={{ 
                        position: 'absolute', 
                        top: 8, 
                        right: 8,
                        backgroundColor: 'rgba(15,20,25,0.75)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(39,44,48,0.75)',
                        },
                        padding: '4px'
                      }}
                      disabled={isSubmitting}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                )}
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #eff3f4',
                  mt: 2,
                  pt: 2
                }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <label>
                      <IconButton 
                        component="span" 
                        sx={{ color: '#1d9bf0' }}
                        disabled={isSubmitting}
                      >
                        <ImageIcon />
                      </IconButton>
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                        disabled={isSubmitting}
                      />
                    </label>
                    
                    <IconButton sx={{ color: '#1d9bf0' }} disabled={isSubmitting}>
                      <GifBoxOutlinedIcon />
                    </IconButton>
                    
                    <IconButton sx={{ color: '#1d9bf0' }} disabled={isSubmitting}>
                      <EmojiEmotionsIcon />
                    </IconButton>
                  </Box>
                  
                  <button
                    type="submit"
                    className="bg-[#1d9bf0] text-white font-bold px-4 py-1.5 rounded-full hover:bg-[#1a8cd8] transition-colors disabled:opacity-50"
                    disabled={!formik.values.content || isSubmitting}
                  >
                    {isSubmitting ? 'Replying...' : 'Reply'}
                  </button>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
}