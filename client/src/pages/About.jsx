import homeVector from '../assets/home-vector.svg';

const About = () => {
  return (
    <div className='relative py-20 px-4 max-w-6xl mx-auto'>
      <div 
        className='absolute inset-0 bg-cover opacity-10 z-0' 
        style={{ backgroundImage: `url(${homeVector})` }}
      ></div>
      <div className='relative z-10'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>About RealEstate</h1>
        <p className='mb-4 text-slate-700'>
          Welcome to RealEstate, a premier real estate agency dedicated to assisting clients in buying, selling, and renting properties in the most sought-after neighborhoods. Our experienced team of agents is committed to providing top-notch service and ensuring a seamless transaction process from start to finish.
        </p>
        <p className='mb-4 text-slate-700'>
          At RealEstate, our mission is to help clients achieve their real estate aspirations through expert guidance, personalized attention, and a comprehensive understanding of the local market. Whether you’re a first-time homebuyer, an experienced investor, or looking to rent, our agents are here to support you every step of the way.
        </p>
        <p className='mb-4 text-slate-700'>
          Our team boasts extensive experience and in-depth knowledge of the real estate industry. We pride ourselves on our commitment to client satisfaction and believe that buying or selling a property should be an exciting and rewarding experience. Our agents are dedicated to making this a reality for each of our clients by providing tailored solutions and exceptional service.
        </p>
        <p className='mb-4 text-slate-700'>
          We specialize in a wide range of services, including:
        </p>
        <ul className='list-disc list-inside mb-4 text-slate-700'>
          <li>Residential Sales and Purchases</li>
          <li>Property Rentals and Leasing</li>
          <li>Market Analysis and Property Valuation</li>
          <li>Real Estate Investment Consultation</li>
          <li>Property Management</li>
        </ul>
        <p className='mb-4 text-slate-700'>
          Our success is built on the trust and relationships we establish with our clients. We look forward to helping you navigate the real estate market and achieve your property goals with confidence and ease. Thank you for choosing RealEstate as your trusted real estate partner.
        </p>
      </div>
    </div>
  );
};

export default About;
