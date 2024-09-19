import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import {BarLoader} from 'react-spinners'
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  // we use this hook to check if the user is logged in or not.
  // and we can fetch the detail of logged in user like (ID, email, profile image).
  const {user, isLoaded} = useUser()
  const navigate = useNavigate();

  const navigateUser = (currRole) => {
    navigate(currRole === "recruiter" ? "/post-jobs" : "/jobs");
  };

  const handleRoleSelection = async (role) => {
    await user
      .update({ unsafeMetadata: { role } })
      .then(() => {
        console.log(`Role updated to: ${role}`);
        navigateUser(role);
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };


  if(!isLoaded){
    return <BarLoader className='mb-4' width={'100%'} color='#36d7b7'
    />
  }

  // in unsafemetadata we can store the data that is not sensitive if someone knows about it there is no prob with that.

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
        I am a...
      </h2>
      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
        <Button
          variant="blue"
          className="h-36 text-2xl"
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button
          variant="destructive"
          className="h-36 text-2xl"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
};

export default Onboarding