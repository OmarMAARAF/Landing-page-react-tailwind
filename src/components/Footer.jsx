import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto text-gray-300 py-16 px-4 grid lg:grid-cols-3 gap-8">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet at,
          distinctio modi quod voluptas qui facilis adipisci deleniti molestias
          ipsam reprehenderit dolor deserunt tempore magnam voluptate ratione
          perspiciatis voluptatem dolores.
        </p>
        <div className="flex justify-around md:w-[70%]">
          <FaFacebookSquare size={40} />
          <FaInstagram size={40} />
          <FaTwitterSquare size={40} />
          <FaGithubSquare size={40} />
        </div>
      </div>
      <div className=" flex justify-between lg:col-span-2 mt-6">
        <div>
          <h6 className="font-meduim text-gray-400">Solution</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-meduim text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Picing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-meduim text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-meduim text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Clain</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
}
