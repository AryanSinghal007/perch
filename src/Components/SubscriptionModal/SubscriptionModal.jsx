import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import VerifiedIcon from '@mui/icons-material/Verified';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 450 },
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: 4,
    outline: 'none',
    p: 0,
    maxHeight: '90vh',
    overflow: 'auto'
};

export default function SubscriptionModal({ open, handleClose }) {
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Header */}
        <Box sx={{ 
          p: 2, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #eff3f4'
        }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            Perch Premium
          </Typography>
          <IconButton 
            aria-label="close" 
            onClick={handleClose}
            sx={{ color: 'text.primary' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        {/* Main Content */}
        <Box sx={{ p: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            mb: 1 
          }}>
            <VerifiedIcon sx={{ 
              fontSize: 50, 
              color: '#1d9bf0',
              mb: 1 
            }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
              Subscribe to Perch Premium
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              Get the blue checkmark and exclusive features
            </Typography>
          </Box>
          
          {/* Features */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              mb: 0,
              padding: 1,
              '&:hover': { bgcolor: '#f7f9f9', borderRadius: 2 }
            }}>
              <CheckCircleOutlineIcon sx={{ color: '#1d9bf0', mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Blue Verification Badge
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Stand out with the iconic blue checkmark next to your name
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              padding: 1,
              '&:hover': { bgcolor: '#f7f9f9', borderRadius: 2 }
            }}>
              <CheckCircleOutlineIcon sx={{ color: '#1d9bf0', mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Priority Ranking
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Your replies will be prioritized in conversations
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Pricing Options */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ 
              border: '1px solid #eff3f4', 
              borderRadius: 2, 
              p: 2, 
              mb: 1,
              cursor: 'pointer',
              position: 'relative',
              '&:hover': { bgcolor: '#f7f9f9' }
            }}>
              <Box sx={{ 
                position: 'absolute', 
                top: -10, 
                left: 16, 
                bgcolor: '#1d9bf0', 
                color: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                MOST POPULAR
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Annual Plan
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                $8/month, billed annually ($96/year)
              </Typography>
              <Typography variant="body2" sx={{ color: '#1d9bf0' }}>
                Save 33% compared to monthly
              </Typography>
            </Box>
            
            <Box sx={{ 
              border: '1px solid #eff3f4', 
              borderRadius: 2, 
              p: 2,
              cursor: 'pointer',
              '&:hover': { bgcolor: '#f7f9f9' }
            }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Monthly Plan
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                $12/month, billed monthly
              </Typography>
            </Box>
          </Box>
          
          {/* Action Buttons */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ 
                bgcolor: '#0f1419',
                color: 'white',
                borderRadius: '9999px',
                padding: '10px 0',
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '15px',
                '&:hover': {
                  bgcolor: '#272c30'
                }
              }}
            >
              Subscribe Now
            </Button>
            
            <Button 
              variant="text" 
              onClick={handleClose}
              sx={{ 
                color: 'text.secondary',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'transparent',
                  textDecoration: 'underline'
                },
              }}
            >
              Maybe later
            </Button>
          </Box>
          
          <Typography variant="caption" sx={{ display: 'block', mt: 0.5, textAlign: 'center', color: 'text.secondary' }}>
            By subscribing, you agree to our Terms of Service and Privacy Policy.
            Cancel anytime in your account settings.
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}