import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetchDetails = (endPoint) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)
    const fetchDataDetails = async () => {
        try {
            setLoading(true);
            const response = await axios.get(endPoint);
            setLoading(false);
            setData(response.data);
            // console.log("Get NowPlayingData Test:", response.data.results);
        } catch (error) {
            console.log("Error", error);
        }
      };
      useEffect(() => {
        fetchDataDetails();
      }, [endPoint]);
  return {
    data, loading
  }
}

export default useFetchDetails