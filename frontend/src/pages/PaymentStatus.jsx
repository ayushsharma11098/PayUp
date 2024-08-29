import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    // Check if token exists in local storage
    if (!userToken) {
      navigate("/signin"); // Redirect to sign-in page if token doesn't exist
    } else {
      const t = setTimeout(() => {
        navigate("/dashboard");
      }, 5000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
       <img src={message === "Transfer successful" ? "https://i.gifer.com/7efs.gif" : "https://i.pinimg.com/originals/52/cd/db/52cddb4d267e3c3c3637f2abaf61aa5d.gif"} alt="Payment Status" className="w-[200px]" />
       
      <div className="bg-green-300 md:w-1/4 text-center py-10 px-5 m-4 text-green-900 font-bold text-3xl rounded-md">
        {message}
        <div className="text-center text-black text-sm font-semibold py-4">
          Redirecting to Dashboard in 5 seconds.
        </div>
      </div>
    </div>
  );
};
