import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    return (
        <div className="my-24">
            <div className=" text-center space-y-5">
                <h2 className="text-5xl font-bold">Shop By Category</h2>
                <p className="text-xl">Shop the best toy from us. We deliver quality products and ensures your child safety.</p>
            </div>
            <div className='mt-16'>
                <Tabs>
                    <TabList className="flex justify-center gap-16 mb-8">
                        <Tab><h2 className='text-xl'>Teddy Bear Toys</h2></Tab>
                        <Tab><h2 className='text-xl'>Horse Toys</h2></Tab>
                        <Tab><h2 className='text-xl'>Giraffee Toys</h2></Tab>
                    </TabList>

                    <TabPanel>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="TeddyBear" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Horse" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Giraffee" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;