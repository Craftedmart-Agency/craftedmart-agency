import Image from 'next/image'
import { AiFillStar } from "react-icons/ai";
import trust from "@/assets/trustpilot.svg";
import google from "@/assets/google.svg"

const Review = () => {
  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Review On */}
        <h3 className="text-lg font-semibold mb-4">Review On</h3>
        <div className="flex gap-6 flex-wrap">
          {/* Trustpilot */}
          <div className="bg-[#111] border border-gray-700 rounded-lg px-6 py-4 flex items-center gap-3">
            <Image
              src={trust} // put your image in public folder
              alt="Trustpilot"
              width={100}
              height={40}
              className="w-full h-full object-contain"
            />
            <div className="flex items-center gap-1 text-yellow-400">
              <AiFillStar />
              <span>5/5.0</span>
            </div>
          </div>

          {/* Google */}
          <div className="bg-[#111] border border-gray-700 rounded-lg px-6 py-4 flex items-center gap-3">
            <Image
              src={google}
              alt="Google"
              width={100}
              height={40}
              className="object-contain"
            />
            <div className="flex items-center gap-1 text-yellow-400">
              <AiFillStar />
              <span>5/5.0</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8">
          <div>
            <h4 className="text-2xl font-bold">
              4 <span className="text-teal-400">Years</span>
            </h4>
            <p className="text-gray-400 text-sm">Working With Passion</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">
              1.4K <span className="text-teal-400">Customer</span>
            </h4>
            <p className="text-gray-400 text-sm">Satisfied Customer</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">
              736 <span className="text-teal-400">Project</span>
            </h4>
            <p className="text-gray-400 text-sm">We Have Completed</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">
              13 <span className="text-teal-400">Awards</span>
            </h4>
            <p className="text-gray-400 text-sm">Achievement For Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review