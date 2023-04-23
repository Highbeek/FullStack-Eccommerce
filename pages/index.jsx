import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        Logged In {session.user.email}</div>
      <div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  );
};

export default Home;
