import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle(' Blogs')
    return (
        <div>
            <div className="border text-center p-5 text-4xl font-bold bg-amber-100 rounded-lg roboto">
                <h2>Blogs</h2>
            </div>
            <div className="bg-amber-100 my-10 rounded-lg py-5 mx-auto w-9/12 roboto">
                <div className="w-8/12 mx-auto">
                    <h2 className="text-xl font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2><br />

                    <h3 className=" text-lg font-bold">Answer:</h3><br />
                    <p className=" text-lg"><span className="font-bold text-lg">Access Token:</span> An Access Token is used to ensure the user is authenticated and authorized to access the protected resources on a server. It has a limited lifespan.

                        It is generally issued by a authentication server (such a OAuth Provider) after successful authentication & authorization of the user. Usually, the user includes the access token in each request to the server to gain access to protected resouces and the server lets the user access by validating the access token.</p> <br />

                    <p className=" text-lg"><span className="font-bold text-lg">Refresh Token:</span>  A Refresh Token is usually used to obtain a new access token when the access token expires. A Refresh Token has a greater lifespan.
                        It is issued along with the access token during initial authentication process. When the access token expired, then the user send the refresh token to the server to get a anew access token without requiring re-authentication. </p> <br />

                    <p className=" text-lg">We should store <span className="font-bold">Access token and Refresh token</span> on localstorage or as an HTTP-only cookie. HTTP-only cookie is usually recommended and considered as safer option.</p><br />

                </div>
                <div className="w-8/12 mx-auto">
                    <h2 className="text-xl font-bold">2. Compare between SQL & NoSQL databases? </h2><br />
                    <h3 className="text-lg font-bold">Answer:</h3> <br />
                    <p className=" text-lg"> <span className="font-bold">SQL Database:</span> In SQL, datas are stored in Table. For example: MySQL <br /><br />
                        <span className="font-bold">NoSQL Database:</span>In NoSQL, datas ares tored in collections. It has a flexible structure. For Example: MongoDB</p><br />
                </div>
                <div className="w-8/12 mx-auto">
                    <h2 className="text-xl font-bold">3. What is express js? What is Nest JS? </h2><br />
                    <h3 className="text-lg font-bold">Answer:</h3> <br />

                    <p><span className="font-bold text-lg">Express JS:</span> Express JS is a minimal & flexible Node.js framework which makes the code writing easier and provides extensive features for building web as well as mobile applications. </p><br />

                   <p> <span className="font-bold text-lg">Nest JS:</span> Nest JS is also one of the fastest growing Node.js framework what is used to build effecient, large scale applications. Nest JS can be a better option while working with very large scale enterprise level application.</p><br />
                </div>
                <div className="w-8/12 mx-auto">
                    <h2 className="font-bold text-xl">4. What is MongoDB aggregate? How does it work? </h2><br />
                    <h3 className="font-bold text-lg">Answer:</h3> <br />
                    It is an way of processing large number o documents ina collection by means of passing them through different stages. Using MongoDB aggregate, we can group values from multiple documents together. And then, perform operation on the grouped data to return a single result.
                </div>
            </div>

        </div>
    );
};

export default Blogs;