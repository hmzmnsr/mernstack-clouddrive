import React from 'react';
import { Link } from 'react-router-dom';

const NoAccount: React.FC = () => {
    return(
        <div className="font-mono font-light text-sm pb-5 pt-8">
        <h3 className="text-customBlue">
          Don't have an account?{" "}
          <Link to="/signup" className="text-customBlueTwo hover:text-red-500">
            Sign Up Here!
          </Link>
        </h3>
      </div>
    )
}

export default NoAccount;