import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    if (!booking) return null;

    const { date, _id, Service, price, img, customerName, email, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-error rounded-3xl">X</button>
            </th>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" onChange={() => handleBookingConfirm(_id)} />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img || "https://via.placeholder.com/50"} alt="Service" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <td>
                {status === "confirmed" ? (
                    <span className="font-bold text-primary">Confirmed</span>
                ) : (
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">
                        Please Confirm
                    </button>
                )}
                {/* <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleBookingConfirm(_id)}
                    checked={status === "confirmed"}
                    disabled={status === "confirmed"}
                /> */}

            </td>
        </tr>
    );
};

export default BookingRow;
