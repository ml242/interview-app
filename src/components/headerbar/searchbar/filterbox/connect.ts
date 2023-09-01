import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useProducts } from '../../../../context/ProductsProvider';

const useConnect = () => {
    const navigate = useNavigate();
    const { search } = useLocation();

    const [filters, setFilters] = useState<string[]>();

    const { handleFilters } = useProducts();

    const handleChange = useCallback((val: string) => {
        if (!filters) {
            setFilters([val]);
        } else if (!filters.includes(val)) { 
               setFilters(filters?.concat(val))
        } else {
            if (filters.length > 1) {
                setFilters(filters.filter((item) => item !== val));
            } else {
                setFilters(undefined);
            }
        }
    }, [filters]);
    
    const resetFilters = useCallback(() => {
        setFilters(undefined);
        navigate('/');
    }, [filters]);
    
    useEffect(() => {
        if (filters) {
            navigate(`/?filters=${filters?.toString()}`);
        } else {
            navigate('/');
        }
    }, [filters]);
    
    useEffect(() => {
        const filters = new URLSearchParams(search).get("filters");
        if (filters) {
            const arrayOfItems = filters.split(',');            
            setFilters(arrayOfItems);
            handleFilters(arrayOfItems);
        }
    }, []);

    useEffect(() => {
        handleFilters(filters ? filters : undefined);
    }, [filters]);

    return {
        filters,
        handleChange,
        resetFilters,
    };
}

export default useConnect;