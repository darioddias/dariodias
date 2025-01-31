const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'black',
      padding: '5px 0', // Increased padding for visibility
      textAlign: 'center', // Center aligns text
      color: '#1DB954',
      fontSize: '12px',
      borderTop: '1px solid #1DB954',
      width: '100%', // Ensures it spans full width
      position: 'relative', // Keeps it within the document flow
      bottom: 0 // Ensures it's at the bottom
    }}>
      <p>thanks for checking this out :p - Dario</p>
    </footer>
  );
};

export default Footer;
