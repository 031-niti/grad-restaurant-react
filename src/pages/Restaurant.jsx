import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../service/api";
import Card from "../components/Card";
import authHeader from "../service/auth.header";
import Londing from "../components/Londing";
import * as londingData from "../londing/Animation - 1698821869094.json";

const Restaurant = () => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const res = await api.get(`/restaurant`);
        setRestaurants(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllRestaurants();
    setTimeout(() => {
      setLoading(false); // กำหนดค่า loading เป็น false เมื่อการดำเนินการเสร็จสิ้น
    }, 2000);
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/restaurant/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? (
        <Londing animation={londingData} />
      ) : (
        <div>
          <h1>Restaurant</h1>
          <div className="row">
            <div className="restaurants">
              {restaurants.map((restaurant) => {
                return (
                  <Card
                    restaurant={restaurant}
                    handleDelete={handleDelete}
                    key={restaurant.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
