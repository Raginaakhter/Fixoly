import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Bookservice = () => {


    const handleBookService = event => {
        event.preventDefault();
        console.log('object', service);
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const img = form.img.value;
        //  const imgUrl = service?.img ? service.img : 'https://i.ibb.co/default-image.png';
        const booking = {
            customerName: name,
            email: email,
            // img: service?.img,
            //    ? service.img : 'https://i.ibb.co/default-image.png',
            // img: imgUrl,
            date: date,
            img: img,
            price: price,
            serviceId: service?._id,
            serviceTitle: service?.title
        }

        console.log(booking);
        //    console.log('service:', service?.img);



        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.
                    insertedId) {
                    alert("Booking Successfully")
                }
            })
    }


    const { user } = useContext(AuthContext);


    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/Services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.error("Error loading service:", err));
    }, [id]);

    if (!service) {
        return <p className="text-center mt-10 text-red-500">Loading booking form...</p>;
    }

    return (
        <div>

            <h2 className="text-2xl font-bold mb-6 text-center mt-5 text-blue-700">
                Booking: {service.title}
            </h2>
            <form onSubmit={handleBookService}>
                <div className='bg-white p-6 md:p-10 w-full max-w-6xl mx-auto mt-10'>




                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className='w-full md:w-1/2'>
                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend">Name</legend>
                                <input type="text" name="name" defaultValue={user?.displayName} className="input w-full" placeholder="Type here" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Email</legend>
                                <input type="email" name="email" defaultValue={user?.email} className="input w-full" placeholder="Type here" />
                            </fieldset>
                        </div>

                        <div className='w-full md:w-1/2'>
                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend">Date</legend>
                                <input type="date" name="date" className="input w-full" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Due Price</legend>
                                <input type="text" name="price" defaultValue={'$' + service.price} className="input w-full" placeholder="Type here" />
                            </fieldset>

                        </div>

                        

                    </div>

                </div>
                <div className='w-full md:w-1/2'>

                            <fieldset className="fieldset  ml-25 ">
                                <legend className="fieldset-legend">Image</legend>
                                <input type="url" name="img" className="input w-1/1 "placeholder="image url" />
                                {/* <img src="" alt="" /> */}



                            </fieldset>
                          

                        </div>

                <button className=" mb-6 ml-5 mr-5 cursor-pointer input w-full bg-blue-500 text-white text-center mt-6 align-middle font-extrabold justify-center-safe">Submit</button>

            </form >
        </div >
    );
};

export default Bookservice;
