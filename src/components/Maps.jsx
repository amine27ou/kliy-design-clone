import React from 'react';

export default function Maps() {
  return (
    <div className='w-screen'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.940492564758!2d-6.8505623247293554!3d33.99406222080093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c90502ba7bf%3A0x32423c06e1af2d02!2sImm%20N%C2%B0%2022%2C%20Appt%2C%2012%20Rue%20Jbel%20Moussa%2C%20Rabat%2010080!5e0!3m2!1sfr!2sma!4v1710338401904!5m2!1sfr!2sma"
        width="600"
        height="450"
        style={{ border: '0',width:'100%' }} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" // Correct attribute name
      ></iframe>
    </div>
  );
}
