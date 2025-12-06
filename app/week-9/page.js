"use client";
import { useUserAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      {!user ? (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={firebaseSignOut}>Logout</button>
        </div>
      )}
    </div>
  );
}
