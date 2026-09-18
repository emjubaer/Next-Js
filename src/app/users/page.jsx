import Link from "next/link";
import React, { use } from "react";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <p>
              {user.email}
            </p>
            <p>
              {user.phone}
            </p>    
            <div className="card-actions justify-end">
              <Link href={`/users/${user.id}`} className="btn btn-primary">
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
