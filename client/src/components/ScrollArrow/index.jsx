import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollBottom = () => {
      if (!showScroll && window.scrollY > 100) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 100) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollBottom);

    return () => {
      window.removeEventListener('scroll', checkScrollBottom);
    };
  }, [showScroll]);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <IconButton
      style={{
        display: showScroll ? 'flex' : 'none',
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        backgroundColor: 'transparent',
        color: '#ffffff',
        fontSize: '48px', // Adjust the icon size as needed
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)', // Add shadow
      }}
      onClick={scrollToBottom}
      aria-label="scroll to bottom"
    >
      <KeyboardArrowDownIcon />
    </IconButton>
  );
};

export default ScrollArrow;
