"use client";
import { useState } from "react";
import Link from "next/link";

export default function RedeployButton() {
  const [isRedeploying, setIsRedeploying] = useState(false);
  const [message, setMessage] = useState("");

  const handleRedeploy = async (e) => {
    e.preventDefault()
    setIsRedeploying(true);
    try {
      const response = await fetch("/api/deploy", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to trigger redeploy");
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error triggering redeploy:", error);
      setMessage(
        "Failed to trigger redeploy. Please check the console for details."
      );
    } finally {
      setIsRedeploying(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Update This Website
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Click here to update the site and see the new images.{" "}
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
            onClick={handleRedeploy}
          >
            {isRedeploying ? "Updating Website..." : "Update"}
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
}
