import axios from "axios";
import { useState } from "react";
import NavbarComponent from "../../components/navbar";
import SidebarComponent from "../../components/sidebar";
import useFetch from "../../hooks/useFetch";
import { roomInputs } from "../../assets/formSource";
const NewRoomPage = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch(
    `${api}/api/v1/hotels/getAllHotels`
  );

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(`${api}/api/v1/rooms/${hotelId}`, {
        ...info,
        roomNumbers,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <SidebarComponent />
      <div className="newContainer">
        <NavbarComponent />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers"
                />
              </div>
              <div className="formInput">
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoomPage;
