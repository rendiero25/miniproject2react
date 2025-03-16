import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { useNavigate } from 'react-router-dom';

const SwiperImage = ({Item1, Item1Name, Item1Type, Item1Price, Item1Style, Item1ImageSize, Item2, Item2Name, Item2Type, Item2Price, Item2Style, Item2ImageSize, Item3, Item3Name, Item3Type, Item3Price, Item3Style, Item3ImageSize, Item4, Item4Name, Item4Type, Item4Price, Item4Style, Item4ImageSize, Item5, Item5Name, Item5Type, Item5Price, Item5Style, Item5ImageSize}) => {
    
    const navigate = useNavigate();

    const toProductDetails = () => {navigate('/product-details')};
    
    return(
        <section className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{clickable: true}}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    1280: {slidesPerView: 3}
                }}> 
                
                <SwiperSlide className="mb-16">
                    <a href="" onClick={toProductDetails}>
                        <div className={Item1Style}>
                            <img src={Item1} alt="item1-image" className={Item1ImageSize}/>
                            <div className='mt-4'>
                                <div className='flex flex-row justify-between items-start'>
                                    <div className='flex flex-col'>
                                        <h3 className='font-semibold text-xl sm:text-2xl'>{Item1Name}</h3>
                                        <h2 className='font-medium text-sm text-gray-500'>{Item1Type}</h2>
                                    </div>
                                    <h3 className='font-semibold text-xl sm:text-2xl'>{Item1Price}</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                </SwiperSlide>
                
                <SwiperSlide className="mb-16">
                    <a href="" onClick={toProductDetails}>
                        <div className={Item2Style}>
                            <img src={Item2} alt="item2-image" className={Item2ImageSize}/>
                            <div className='mt-4'>
                                <div className='flex flex-row justify-between items-start'>
                                    <div className='flex flex-col'>
                                        <h3 className='font-semibold text-xl sm:text-2xl'>{Item2Name}</h3>
                                        <h2 className='font-medium text-sm text-gray-500'>{Item2Type}</h2>
                                    </div>
                                    <h3 className='font-semibold text-xl sm:text-2xl'>{Item2Price}</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                </SwiperSlide>

                <SwiperSlide className="mb-16">
                    <a href="" onClick={toProductDetails}>
                        <div className={Item3Style}>
                            <img src={Item3} alt="item3-image" className={Item3ImageSize}/>
                            <div className='mt-4'>
                                <div className='flex flex-row justify-between items-start'>
                                    <div className='flex flex-col'>
                                        <h3 className='font-semibold text-xl sm:text-2xl'>{Item3Name}</h3>
                                        <h2 className='font-medium text-sm text-gray-500'>{Item3Type}</h2>
                                    </div>
                                    <h3 className='font-semibold text-xl sm:text-2xl'>{Item3Price}</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                </SwiperSlide>

                <SwiperSlide className="mb-16">
                    <a href="">
                        <div className={Item4Style}>
                            <img src={Item4} alt="item4-image" className={Item4ImageSize}/>
                            <div className='mt-4'>
                                <div className='flex flex-row justify-between items-start'>
                                    <div className='flex flex-col'>
                                        <h3 className='font-semibold text-xl sm:text-2xl'>{Item4Name}</h3>
                                        <h2 className='font-medium text-sm text-gray-500'>{Item4Type}</h2>
                                    </div>
                                    <h3 className='font-semibold text-xl sm:text-2xl'>{Item4Price}</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                    
                </SwiperSlide>

                <SwiperSlide className="mb-16">
                    <a href="">
                        <div className={Item5Style}>
                            <img src={Item5} alt="item5-image" className={Item5ImageSize}/>
                            <div className='mt-4'>
                                <div className='flex flex-row justify-between items-start'>
                                    <div className='flex flex-col'>
                                        <h3 className='font-semibold text-xl sm:text-2xl'>{Item5Name}</h3>
                                        <h2 className='font-medium text-sm text-gray-500'>{Item5Type}</h2>
                                    </div>
                                    <h3 className='font-semibold text-xl sm:text-2xl'>{Item5Price}</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}

export default SwiperImage;