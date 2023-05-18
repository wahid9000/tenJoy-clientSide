
const Gallery = () => {
    return (
        <div className="my-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Gallery</h2>
            <div className="divider"></div>
            <div className="grid md:grid-cols-2 gap-4">
                <img src="https://i.ibb.co/BtJfMV0/child4.png" alt="" className="h-[651px] w-full rounded-lg" />

                <div className="">
                    <div className="grid md:grid-cols-2 gap-3 rounded-lg">
                        <div>
                            <img src="https://i.ibb.co/CKmdnBD/Untitled-design-3.png" alt="" className="h-full md:h-80 w-full rounded-lg" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/tKNGZnF/child3.webp" alt="" className="h-full md:h-80 w-full rounded-lg" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/bBjgkjH/child2.webp" alt="" className="h-full md:h-80 w-full rounded-lg" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/1QyRJWS/child2.jpg" alt="" className="h-full md:h-80 w-full rounded-lg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;