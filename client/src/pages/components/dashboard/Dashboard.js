import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/pages/context/AuthContext";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();
  const { user, loggedIn } = useContext(AuthContext);

  const name = user ? user.user.name : "Viewer";
  const email = user ? user.user.email : "Viewer Email";
  const role = user ? user.user.role : "Viewer role";
  console.log(user);
  console.log("dash");

  useEffect(() => {
    if (typeof window !== "undefined" && !loggedIn) {
      router.push("/signin");
    }
  }, []);

  return (
    <main>
      {user && (
        <section className="flex bg-[#7694f5] w-full mb-8 justify-center">
          <h1 className="text-xl text-gray-900 py-4">Hello, {name}</h1>
        </section>
      )}

      <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-8">
        {/* Personal Info */}
        <div className="flex justify-center mb-8">
          <div className=" p-8 border-2 border-slate-900">
            <h1 className="text-lg text-gray-700">
              Name: <span className="text-xl text-gray-950">{name}</span>
            </h1>
            <h2 className="text-lg text-gray-700">
              Email: <span className="text-xl text-gray-950">{email}</span>
            </h2>
            <h2 className="text-lg text-gray-700">
              Role: <span className="text-xl text-gray-950">{role}</span>
            </h2>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center mb-8">
          <div className=" p-8 border-2 border-slate-900">
            <h1 className="text-center text-xl bg-gray-950 text-zinc-200 rounded-lg">
              Current Stats
            </h1>
            <ul className="flex flex-col gap-4 ">
              <li>Attendance: 70%</li>
              <li>College Rank: 17</li>
              <li>Courses Completed: 4</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 justify-center sm:flex-row ">
        <div className="w-[300px]">
          <Link href="/videoChat">
            <button className="w-full cursor-pointer bg-slate-950 text-zinc-300 rounded-lg p-4">
              {" "}
              Join A Classroom{" "}
            </button>
          </Link>
        </div>
        <div className="w-[300px]">
          <Link href="/course/course">
            <button className="w-full cursor-pointer bg-slate-950 text-zinc-300 rounded-lg p-4">
              {" "}
              Go to Course Page{" "}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
