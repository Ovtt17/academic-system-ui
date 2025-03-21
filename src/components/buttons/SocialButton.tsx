import { Button, SvgIconProps } from '@mui/material';
import { FC } from 'react';

interface SocialButtonProps {
  icon: React.ReactElement<SvgIconProps>;
  text: string;
  onClick: () => void;
}

const SocialButton: FC<SocialButtonProps> = ({ icon, text, onClick }) => {
  return (
    <Button
      variant="outlined"
      startIcon={icon}
      onClick={onClick}
      fullWidth
      sx={{
        textTransform: 'none',
        borderColor: '#E0E0E0',
        color: '#FFFFFF',
        paddingY: 1,
        ":hover": {
          borderColor: '#E0E0E0',
          backgroundColor: '#E0E0E0',
          color: '#000000'
        }
      }}
    >
      <span className="text-sm sm:text-base">{text}</span>
    </Button>
  );
}

export default SocialButton;