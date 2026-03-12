import contactImage from '@/assets/uk.png'

function Contact() {
  return (
    <div>
      <h1 className='header'> Our location</h1>
      <div className="container mx-auto px-4">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="flex flex-col lg:flex-row items-center lg:items-center py-6 lg:py-4 gap-4 lg:gap-6">
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0 rounded-md border border-gray-200 overflow-hidden">
              <img
                src={contactImage}
                alt="Location thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Info */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-lg font-medium text-gray-900">                
                  United Kingdom Office
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
                <i className="fi fi-sr-phone-call flex items-center justify-center text-lg leading-none"></i>
                <span>07123 456780</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
                <i className="fi fi-sr-envelope flex items-center justify-center text-lg leading-none"></i>
                <span>template@gmail.com</span>
              </div>              
            </div>

            {/* Map */}
            <div className="w-full lg:w-1/2 h-64 lg:h-40 rounded-md overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47269.15066003889!2d-0.41044279575720144!3d51.48975276142867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767234cdc56de9%3A0x8fe7535543f64167!2z5biM5oCd576F5qmf5aC0!5e0!3m2!1szh-TW!2suk!4v1772231090850!5m2!1szh-TW!2suk"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
