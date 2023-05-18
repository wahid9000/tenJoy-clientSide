import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TeddyBearToys from './SubCategories/TeddyBearToys';
import HorseToys from './SubCategories/HorseToys';
import GiraffeToys from './SubCategories/GiraffeToys';

const Category = () => {

    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [])

    const [teddyBearData, setTeddyBearData] = useState([])
    useEffect(() => {
        const teddyBearSubCategoryData = categoryData.filter(c => c.subCategory === "Teddy Bear Toys");
        setTeddyBearData(teddyBearSubCategoryData)
    }, [categoryData]);

    const [horseData, setHorseData] = useState([]);
    useEffect(() => {
        const horseSubCategoryData = categoryData.filter(c => c.subCategory === "Horse Toys");
        setHorseData(horseSubCategoryData)
    }, [categoryData]);

    const [giraffeData, setGiraffeData] = useState([]);
    useEffect(() => {
        const giraffeSubCategoryData = categoryData.filter(c => c.subCategory === "Giraffe Toys");
        setGiraffeData(giraffeSubCategoryData)
    }, [categoryData]);




    return (
        <div className="my-24">
            <div className=" text-center space-y-5">
                <h2 className="text-5xl font-bold">Shop By Category</h2>
                <p className="text-xl">Shop the best toy from us. We deliver quality products and ensures your child safety.</p>
            </div>
            <div className='mt-16'>
                <Tabs>
                    <TabList className="flex justify-center gap-1 md:gap-16 mb-8">
                        <Tab><h2 className='text-xl'>Teddy Bear Toys</h2></Tab>
                        <Tab><h2 className='text-xl'>Horse Toys</h2></Tab>
                        <Tab><h2 className='text-xl'>Giraffee Toys</h2></Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {
                                teddyBearData.map(teddyBear => <TeddyBearToys

                                    key={teddyBear._id}
                                    teddyBear={teddyBear}

                                ></TeddyBearToys>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {
                                horseData.map(horse => <HorseToys

                                    key={horse._id}
                                    horse={horse}

                                ></HorseToys>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {
                                giraffeData.map(giraffe => <GiraffeToys

                                    key={giraffe._id}
                                    giraffe={giraffe}

                                ></GiraffeToys>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;