// StepsSection.jsx
import React from 'react';

const Team = () => {
  return (
    <section className="py-10  bg-cyan-700 sm:py-16 lg:py-24 mt-0.5 mb-0.5">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-amber-50 sm:text-4xl">
           Our Dedicated Mobile Repair Team
At Helpyra.
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
          <div className="md:px-4 lg:px-10">
            <img
              className="-rotate-1 rounded-lg shadow-md"
              src="https://img.freepik.com/free-photo/front-view-man-repairing-computer_23-2148419171.jpg"
              alt="Join as a team"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-amber-50">
              Join as a team
            </h3>
            <p className="mt-4 text-base text-amber-50">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="rotate-1 rounded-lg shadow-md"
              src="https://img.freepik.com/premium-photo/very-realistic-detail-image-asian-man-repairing-phone-with-detailed-tools-full-equipment_1110513-12371.jpg?ga=GA1.1.840742692.1748253951&semt=ais_hybrid&w=740"
              alt="Work from anywhere"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-amber-50">
              Work from anywhere
            </h3>
            <p className="mt-4 text-base text-amber-50">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="-rotate-1 rounded-lg shadow-md"
              src="https://img.freepik.com/premium-photo/young-indian-electrician-holding-tools-hand-showing-smartphone_75648-4253.jpg?ga=GA1.1.840742692.1748253951&semt=ais_hybrid&w=740"
              alt="Get success"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-amber-50">
              Get success
            </h3>
            <p className="mt-4 text-base text-amber-50">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
