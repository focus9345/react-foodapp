'use client' 
import { useEffect } from 'react';
import { Button } from "@nextui-org/react";

interface ErrorProps {
  error: any;
  reset?: any;
}

  const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    // This is a demo so just console error
    console.error(error)
  }, [error]);

  if (error.statusCode === 404) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  } else {
 
  return (
    <div className="error flex flex-col items-center justify-center w-full h-screen">
      <h1>Something went wrong with the Meals!</h1>
      <p>An unexpected error with creating a new meal.</p>
      <p>{error.message}</p>
      <p><br />
      <Button
        color="danger" 
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
      </p>
    </div>
  )
}
}

export default Error;