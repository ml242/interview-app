const Loader = () => {
  return (
    <div className='loading'>
      <div className='content'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <img src='/images/wifi.png' className='logo wifi' alt='Loader' />
      </div>
    </div>
  );
};

export default Loader;
