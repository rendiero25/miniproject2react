import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return(
        <section className="px-6 xl:px-12 2xl:px-20 py-10 2xl:py-20 flex flex-col gap-4 justify-center items-start bg-black xl:gap-12">
            <div className="flex flex-col xl:flex-row justify-between items-start w-full gap-12">
                <div className="flex flex-col gap-6 font-bold text-2xl text-white">
                    <a href="#">FIND A STORE</a>
                    <a href="#">BECOME A MEMBER</a>
                    <a href="#">SIGN UP FOR EMAIL</a>
                    <a href="#">SEND US FEEDBACK</a>
                    <a href="#">STUDENT DISCOUNTS</a>
                </div>
                <div className="flex flex-col gap-4 font-bold text-2xl text-white">
                    <a href="#">GET HELP</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Order Status</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Delivery</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Returns</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Payment Options</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Contact Us On nike.com Inquiries</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Contact Us On All Other Inquiries </a>
                </div>
                <div className="flex flex-col gap-4 font-bold text-2xl text-white">
                    <a href="#">ABOUT NIKE</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Order Status</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">News</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Careers</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Investors</a>
                    <a href="#" className="text-gray-500 font-medium text-xl">Sustainability</a>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <FaTwitterSquare className="text-white size-8"/>
                    <FaFacebookSquare className="text-white size-8" />
                    <FaYoutubeSquare className="text-white size-8" />
                    <FaInstagramSquare className="text-white size-8" />
                </div>
            </div>

            <div className="flex flex-col xl:flex-row justify-between w-full items-center gap-12">
                <div className="flex flex-row gap-4 font-medium text-xs text-gray-500">
                    <a href="#">Guides</a>
                    <a href="#">Terms of Sale</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Nike Privacy Policy</a>
                </div>

                <h4 className="text-white font-medium text-xs sm:self-start">&copy; 2025 Nike, Inc. All Rights Reserved</h4>
            </div>

        </section>
    )
}

export default Footer;