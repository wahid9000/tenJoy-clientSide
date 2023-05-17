
const Gallery = () => {
    return (
        <div className="my-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Gallery</h2>
            <div className="divider"></div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <img src="https://i.ibb.co/HntgKQY/teddy-4124310-960-720.jpg" alt="" className="h-[651px] w-full rounded-lg" />
                </div>
                <div className="">
                    <div className="grid grid-cols-2 gap-3 rounded-lg">
                        <div>
                            <img src="https://i.ibb.co/CKmdnBD/Untitled-design-3.png" alt="" className="h-80 w-full rounded-lg" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/svxm6YW/Untitled-design-8.png" alt="" className="h-80 w-full rounded-lg" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/T8WfSrf/Untitled-design-6.png" alt="" className="h-80 w-full rounded-lg" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/R2XTfyj/Untitled-design-7.png" alt="" className="h-80 w-full rounded-lg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;