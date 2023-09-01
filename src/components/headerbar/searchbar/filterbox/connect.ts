import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useConnect = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState<string[]>();

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
        console.log('filters ', filters );
        if (filters) {
            navigate(`/?filters=${filters?.toString()}`);
        } else {
            navigate('/');
        }
    }, [filters]);
    
    return {
        filters,
        handleChange,
        resetFilters,
    };
}

export default useConnect;