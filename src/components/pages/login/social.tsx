import React from 'react';

const Social: React.FC = () => {
    return(
        <div className="flex flex-col items-center mt-6 w-full">
        <button className="flex items-center justify-center w-customborderwidth py-3 mb-6 bg-red-500 text-white rounded-lg text-sm">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.447 10.01H12.36v4.088h5.894c-0.737 2.098-2.737 3.6-5.894 3.6-3.54 0-6.415-2.88-6.415-6.423S8.92 4.857 12.459 4.857c1.737 0 3.273 0.593 4.5 1.563l3.015-3.012C17.7 1.43 15.12 0.254 12.46 0.254 5.537 0.254 0 5.797 0 12.707s5.538 12.454 12.46 12.454c6.76 0 12.374-5.413 12.374-12.358 0-0.82-0.085-1.623-0.234-2.403z" />
          </svg>
          Sign in with Google
        </button>

        <button className="flex items-center justify-center w-customborderwidth py-3 bg-blue-600 text-white rounded-lg text-sm">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0H1.326C0.593 0 0 0.593 0 1.326v21.348C0 23.407 0.593 24 1.326 24h11.495v-9.294H9.618V11.25h3.203V8.432c0-3.176 1.938-4.907 4.773-4.907 1.362 0 2.531 0.102 2.872 0.148v3.325h-1.97c-1.546 0-1.845 0.735-1.845 1.812v2.38h3.691l-0.482 3.455h-3.209V24h6.295C23.407 24 24 23.407 24 22.674V1.326C24 0.593 23.407 0 22.675 0z" />
          </svg>
          Sign in with Facebook
        </button>
      </div>
    );
};

export default Social;