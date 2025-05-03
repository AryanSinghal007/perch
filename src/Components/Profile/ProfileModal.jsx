import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 550 },
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: 24,
  outline: 'none',
  p: 0,
};

// Validation schema
const ProfileSchema = Yup.object().shape({
  fullName: Yup.string()
    .max(50, 'Name should be 50 characters or less')
    .required('Name is required'),
  bio: Yup.string()
    .max(160, 'Bio should be 160 characters or less'),
  location: Yup.string()
    .max(30, 'Location should be 30 characters or less'),
  website: Yup.string()
    .url('Enter a valid URL')
    .max(100, 'Website URL should be 100 characters or less'),
});

export default function ProfileModal({ open, handleClose }) {
  const [coverImagePreview, setCoverImagePreview] = React.useState("https://adllinsmedia.com.au/wp-content/uploads/2023/09/Adllins-Media-Social-Marketing-Platforms.jpg");
  const [profileImagePreview, setProfileImagePreview] = React.useState("https://t3.ftcdn.net/jpg/08/20/75/34/360_F_820753420_Nqjb8USaj0J7K82Uo6yZLhCv4roZFBj7.jpg");
  
  // Add loading states for both images
  const [coverImageLoading, setCoverImageLoading] = React.useState(false);
  const [profileImageLoading, setProfileImageLoading] = React.useState(false);
  
  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImageLoading(true); // Start loading
      formik.setFieldValue('coverImage', file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result);
        // Simulate network delay for uploading image
        setTimeout(() => {
          setCoverImageLoading(false); // Stop loading
        }, 1000); // Simulated 1 second delay
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImageLoading(true); // Start loading
      formik.setFieldValue('profileImage', file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
        // Simulate network delay for uploading image
        setTimeout(() => {
          setProfileImageLoading(false); // Stop loading
        }, 1000); // Simulated 1 second delay
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: 'Aryan Singhal',
      bio: 'Software Engineer | Web Developer | Tech Enthusiast',
      location: 'New Delhi, India',
      website: 'https://aryansinghal.com',
      coverImage: '',
      profileImage: '',
    },
    validationSchema: ProfileSchema,
    onSubmit: (values) => {
      console.log("Form submitted", values);
      handleClose();
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
    >
      <Box sx={style}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid #eff3f4'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              edge="start" 
              onClick={handleClose}
              sx={{ mr: 1 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
              Edit Profile
            </Typography>
          </Box>
          <button 
            className="bg-black text-white font-bold px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
            onClick={formik.handleSubmit}
            type="submit"
            disabled={coverImageLoading || profileImageLoading}
          >
            {(coverImageLoading || profileImageLoading) ? (
              <span className="flex items-center">
                <CircularProgress size={16} color="inherit" className="mr-2" />
                Uploading...
              </span>
            ) : "Save"}
          </button>
        </Box>
        
        {/* Cover Image */}
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ 
            height: 150,
            overflow: 'hidden',
            backgroundColor: '#e6ecf0'
          }}>
            {coverImagePreview && (
              <img 
                src={coverImagePreview}
                alt="Cover"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: coverImageLoading ? 'blur(1px)' : 'none',
                }}
              />
            )}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}>
              {coverImageLoading ? (
                <CircularProgress size={30} sx={{ color: 'white' }} />
              ) : (
                <label>
                  <IconButton 
                    sx={{ 
                      color: 'white',
                      backgroundColor: 'rgba(15,20,25,0.75)',
                      '&:hover': {
                        backgroundColor: 'rgba(39,44,48,0.75)',
                      }
                    }} 
                    component="span"
                  >
                    <CameraAltOutlinedIcon />
                  </IconButton>
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleCoverImageChange}
                  />
                </label>
              )}
            </Box>
          </Box>
          
          {/* Profile Image */}
          <Box sx={{ 
            position: 'absolute', 
            bottom: '-40px',
            left: 16,
          }}>
            <Box sx={{ 
              width: 100,
              height: 100,
              borderRadius: '50%',
              border: '4px solid white',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={profileImagePreview}
                alt="Profile"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: profileImageLoading ? 'blur(1px)' : 'none',
                }}
              />
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}>
                {profileImageLoading ? (
                  <CircularProgress size={20} sx={{ color: 'white' }} />
                ) : (
                  <label>
                    <IconButton 
                      sx={{ 
                        color: 'white',
                        backgroundColor: 'rgba(15,20,25,0.75)',
                        '&:hover': {
                          backgroundColor: 'rgba(39,44,48,0.75)',
                        },
                        padding: '4px'
                      }} 
                      component="span"
                    >
                      <CameraAltOutlinedIcon fontSize="small" />
                    </IconButton>
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleProfileImageChange}
                    />
                  </label>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        
        {/* Form */}
        <Box sx={{ 
          p: 2, 
          pt: 7,
          display: 'flex', 
          flexDirection: 'column', 
          gap: 3
        }}>
          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            label="Name"
            variant="outlined"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            InputProps={{
              sx: { borderRadius: 1 }
            }}
            disabled={coverImageLoading || profileImageLoading}
          />
          
          <TextField
            fullWidth
            id="bio"
            name="bio"
            label="Bio"
            multiline
            rows={3}
            variant="outlined"
            value={formik.values.bio}
            onChange={formik.handleChange}
            error={formik.touched.bio && Boolean(formik.errors.bio)}
            helperText={
              formik.touched.bio && formik.errors.bio ? 
              formik.errors.bio : 
              `${formik.values.bio.length}/160`
            }
            InputProps={{
              sx: { borderRadius: 1 }
            }}
            disabled={coverImageLoading || profileImageLoading}
          />
          
          <TextField
            fullWidth
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            InputProps={{
              sx: { borderRadius: 1 }
            }}
            disabled={coverImageLoading || profileImageLoading}
          />
          
          <TextField
            fullWidth
            id="website"
            name="website"
            label="Website"
            variant="outlined"
            value={formik.values.website}
            onChange={formik.handleChange}
            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
            InputProps={{
              sx: { borderRadius: 1 }
            }}
            disabled={coverImageLoading || profileImageLoading}
          />
        </Box>
      </Box>
    </Modal>
  );
}