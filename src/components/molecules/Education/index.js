// import React from "react";
// import Lottie from "react-lottie";
// import readingBook from "../../../assets/reading-book.json";

// const Education = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: readingBook,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <div className="pt-24">
//       <div className="mb-12">
//         <h1 className="text-4xl font-semibold drop-shadow-md text-center">
//           My <span className="text-primary">Qualification</span>
//         </h1>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
//         {/* Animation Section */}
//         <div>
//           <Lottie
//             options={defaultOptions}
//             height="70%"
//             width="90%"
//             className="mx-auto lg:mr-auto"
//           />
//         </div>

//         {/* Education Cards */}
//         <div className="flex flex-col gap-6 items-center lg:items-start">
//           {/* UG */}
//           <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[320px] hover:shadow-primary duration-300 cursor-pointer">
//             <div className="text-right mb-4">
//               <h3 className="text-2xl font-semibold text-primary">
//                 BTech in CSE
//               </h3>
//               <p className="text-sm text-neutral font-semibold">2021 - 2025</p>
//             </div>
//             <p className="text-sm text-neutral text-justify">
//               I am currently studying a B.Tech in Computer Science Engineering
//               (7th Semester) at Vellore Institute of Technology, Chennai.
//             </p>
//           </div>

//           {/* Full Stack */}
//           <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[320px] hover:shadow-primary duration-300 cursor-pointer">
//             <div className="text-right mb-4">
//               <h3 className="text-2xl font-semibold text-primary">
//                 Full Stack Web Developer
//               </h3>
//               <p className="text-sm text-neutral font-semibold">2023</p>
//             </div>
//             <p className="text-sm text-neutral text-justify">
//               I have successfully completed the{" "}
//               <b>Full Stack Web Development</b> course from Udemy.
//             </p>
//           </div>

//           {/* Microsoft Certification */}
//           <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[320px] hover:shadow-primary duration-300 cursor-pointer">
//             <div className="text-right mb-4">
//               <h3 className="text-2xl font-semibold text-primary">
//                 Microsoft Certified: Azure Administrator Associate
//               </h3>
//               <p className="text-sm text-neutral font-semibold">2023</p>
//             </div>
//             <p className="text-sm text-neutral text-justify">
//               I have successfully completed the{" "}
//               <b>Azure Administrator Associate Certification</b> from Microsoft.
//             </p>
//           </div>

//           {/* Intermediate */}
//           <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[320px] hover:shadow-primary duration-300 cursor-pointer">
//             <div className="text-right mb-4">
//               <h3 className="text-2xl font-semibold text-primary">
//                 Intermediate
//               </h3>
//               <p className="text-sm text-neutral font-semibold">2019 - 2021</p>
//             </div>
//             <p className="text-sm text-neutral text-justify">
//               I have passed Intermediate (12th class) with a result of{" "}
//               <b>Percentage - 93</b>.
//             </p>
//           </div>

//           {/* 10th Class */}
//           <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[320px] hover:shadow-primary duration-300 cursor-pointer">
//             <div className="text-right mb-4">
//               <h3 className="text-2xl font-semibold text-primary">10th Class</h3>
//               <p className="text-sm text-neutral font-semibold">2019</p>
//             </div>
//             <p className="text-sm text-neutral text-justify">
//               I have passed SSC (10th class) with a result of{" "}
//               <b>CGPA - 9.8</b>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;
 
import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const qualifications = [
    {
      title: "BTech in CSE",
      year: "2021 - 2025",
      description:
        "I am currently studying a B.Tech in Computer Science Engineering (8th Semester) at Vellore Institute of Technology, Chennai.",
    },
    {
      title: "Full Stack Web Developer",
      year: "2023",
      description:
        "I have Attained the Full Stack Web Development course from Udemy.",
    },
    {
      title: "Microsoft Certified",
      year: "2023 - 2025",
      description:
        "I have successfully obtained the Azure Administrator Associate certification from Microsoft.",
    },
    {
      title: "Intermediate",
      year: "2019 - 2021",
      description:
        "I have passed Intermediate (12th class) with a result of Percentage - 93.",
    },
    {
      title: "10th Class",
      year: "2019",
      description: "I have passed SSC (10th class) with a result of CGPA - 9.8.",
    },
  ];

  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Animation Section */}
        <div>
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>

        {/* Zigzag Qualifications */}
        <div className="flex flex-col gap-10">
          {qualifications.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[320px] hover:shadow-primary duration-300 cursor-pointer">
                <div className="text-right mb-4">
                  <h3 className="text-2xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral font-semibold">
                    {item.year}
                  </p>
                </div>
                <p className="text-sm text-neutral text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
