import { createContext, useEffect, useState } from "react";

const DataContext = createContext({})

export function DataContextProvider({ children }) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
    const getData = async () => {
      try {
        let url;
        if(page === 'page1') {
          url = ''
        } else if(page === 'page2') {
          url = ''
        } else if(page === 'page3') {
          url = ''
        }
      } catch (error) {
        
      }
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const data = await response.json();
       setProducts(data);
        if (response) setLoading(false);
      };      
      getData();
      }, []);

    return (
        <DataContext.Provider value={{products, loading, error}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;