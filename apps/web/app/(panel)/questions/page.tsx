import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="container mx-auto">
      <ul role="list" className="mb-2">
        {[1, 2, 3, 4].map((questionData) => {
          return (
            <Link href={`/solve`}>
              <li className="flex mb-3 py-5 px-5 border-white rounded-lg border-2 cursor-pointer hover:bg-white hover:text-black">
                <div className="flex min-w-0 gap-x-4">
                  <h2>Q1</h2>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6">
                      Leslie Alexander Leslie Alexander Leslie Alexander Leslie
                      Alexander Leslie Alexander Leslie Alexander Leslie
                      Alexander Leslie Alexander Leslie Alexander Leslie
                      Alexander Leslie Alexander Leslie AlexanderLeslie
                      Alexander Leslie Alexander Leslie Alexander Leslie
                      Alexander Leslie Alexander Leslie AlexanderLeslie
                      Alexander Leslie Alexander Leslie Alexander
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default page;
