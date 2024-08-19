import cloudimg from "../../assets/images/cloudimgg.jpg";

const LoginIntro = () => {
  return (
    <div className="col-span-6 ">
      <div className="flex flex-col justify-start items-center mt-48">
        <div className="text-customBlue text-4xl font-semibold tracking-wide subpixel-antialiased text-center  leading-relaxed font-paintbrush">
          Securely Upload and Store Your Important Documents With CLoudDrive!
        </div>
        <div className="flex justify-center items-center">
          <img src={cloudimg} className="h-4/4 w-4/4" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default LoginIntro;
