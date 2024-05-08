
import { createContext, useState, useEffect } from "react";

export const CalcContext = createContext();


const CalcProvider = ({ children }) => {
    const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        async function fetchData() {
           
             try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                console.log(result,"result");
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        if(data.length===0){
        fetchData();
        }
    }, [data.length]);

    return (
        <CalcContext.Provider value={{ data, loading, error,setData }}>
            {children}
        </CalcContext.Provider>
    );
};

export default CalcProvider;
